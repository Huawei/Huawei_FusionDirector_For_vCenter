package com.huawei.fdvcenterpluginui.services;

import com.huawei.fdvcenterpluginui.dao.FDAlarmDao;
import com.huawei.fdvcenterpluginui.entity.AlarmEvent;
import com.huawei.fdvcenterpluginui.entity.AlarmRecord;
import com.huawei.fdvcenterpluginui.entity.FDSyncServer;
import com.huawei.fdvcenterpluginui.entity.FusionDirector;
import com.huawei.fdvcenterpluginui.entity.HAComponent;
import com.huawei.fdvcenterpluginui.entity.HAEventDef;
import com.huawei.fdvcenterpluginui.entity.Pair;
import com.huawei.fdvcenterpluginui.entity.VCenterInfo;
import com.huawei.fdvcenterpluginui.exception.IgnorableException;
import com.huawei.fdvcenterpluginui.exception.VcenterException;
import com.huawei.fdvcenterpluginui.utils.ConnectedVim;
import com.huawei.fdvcenterpluginui.utils.FDUtils;
import com.huawei.fdvcenterpluginui.utils.HAEventHelper;
import com.huawei.fdvcenterpluginui.utils.JsonUtil;
import com.huawei.fdvcenterpluginui.utils.StringUtil;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.LinkedBlockingQueue;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;

public class FDAlarmServiceImpl implements FDAlarmService {

  private static final Log LOGGER = LogFactory.getLog(FDAlarmServiceImpl.class);

  @Autowired
  private FDHostService fdHostService;

  @Autowired
  private FDAlarmDao fdAlarmDao;

  @Autowired
  private FDSettingService fdSettingService;

  @Autowired
  private FDSyncService fdSyncService;

  private ConnectedVim connectedVim = null;

  private BlockingQueue<Map<String, Object>> eventQueue = new LinkedBlockingQueue<>(2000);

  private ExecutorService eventExecutor = Executors.newSingleThreadExecutor();

  @Override
  public List<ResponseEntity<Map>> subscribe(Collection<FusionDirector> fds) {
    List<ResponseEntity<Map>> responseEntityList = new ArrayList<>();
    VCenterInfo vCenterInfo = fdSettingService.getVCenterInfo(false);
    if (fds != null && !fds.isEmpty() && vCenterInfo != null) {
      String subscribeEndpoint = "/EventService/Subscriptions";
      String callbackUrl = getCallbackUrl(vCenterInfo.getHostIp(), vCenterInfo.getHostPort());
      for (FusionDirector fd : fds) {
        try {
          String body = buildSubscribeBody(callbackUrl, fd.getAlarmUsername(),
              fd.getAlarmPassword());
          ResponseEntity<Map> responseEntity = fdHostService
              .connect(fd, subscribeEndpoint, HttpMethod.POST.name(), body);
          LOGGER.info("Subscribing " + fd);
          responseEntityList.add(responseEntity);
          int statusCode = responseEntity.getStatusCode().value();
          if (isErrorStatusCode(statusCode)) {
            // Error status code
            LOGGER.error("Error status code: " + statusCode);
            LOGGER.error("Cannot subscribe due to error: " + responseEntity.getBody());
            continue;
          }
          int subscribedId = parseSubscribeId(responseEntity);
          LOGGER.info("Subscribed Id: " + subscribedId);
          fdHostService.updateSubscribedId(fd.getHostIp(), subscribedId);

        } catch (Exception e) {
          LOGGER.error("Failed to subscribe on " + fd, e);
        }
      }
    }
    return responseEntityList;
  }

  @Override
  public List<ResponseEntity<Map>> unsubscribe(Collection<FusionDirector> fds) {
    List<ResponseEntity<Map>> responseEntityList = new ArrayList<>();
    if (fds != null) {
      for (FusionDirector fd : fds) {
        try {
          if (fd.getReservedInt1() > 0) {
            LOGGER.info("Unsubscribing " + fd);
            ResponseEntity<Map> responseEntity = fdHostService
                .connect(fd, "/EventService/Subscriptions/" + fd.getReservedInt1(),
                    HttpMethod.DELETE.name(), "");
            responseEntityList.add(responseEntity);
            int statusCode = responseEntity.getStatusCode().value();
            if (isErrorStatusCode(statusCode)) {
              LOGGER.error("Error status code: " + statusCode);
              LOGGER.error("Cannot unsubscribe due to error: " + responseEntity.getBody());
              continue;
            }
            LOGGER.info("Unsubscribed " + fd);
            fdHostService.updateSubscribedId(fd.getHostIp(), null);
          }
        } catch (Exception e) {
          LOGGER.error("Failed to unsubscribe on " + fd, e);
        }
      }
    }
    return responseEntityList;
  }

  @Override
  public List<ResponseEntity<Map>> resubscribe(Collection<FusionDirector> fds) {
    List<ResponseEntity<Map>> responseEntityList = new ArrayList<>();
    VCenterInfo vCenterInfo = fdSettingService.getVCenterInfo(false);
    if (fds != null && !fds.isEmpty() && vCenterInfo != null) {
      for (FusionDirector fd : fds) {
        if (fd.getReservedInt1() > 0) {
          String subscribeEndpoint = "/EventService/Subscriptions/" + fd.getReservedInt1();
          String callbackUrl = getCallbackUrl(vCenterInfo.getHostIp(), vCenterInfo.getHostPort());
          String username = vCenterInfo.getUsername();
          String password = vCenterInfo.getPassword();
          String body = buildResubscribeBody(callbackUrl, username, password);
          LOGGER.info("Resubscribing " + fd);
          ResponseEntity<Map> responseEntity = fdHostService.connect(fd, subscribeEndpoint, "PATCH",
              body);
          responseEntityList.add(responseEntity);
          int statusCode = responseEntity.getStatusCode().value();
          if (isErrorStatusCode(statusCode)) {
            LOGGER.info("Error status code: " + statusCode);
            LOGGER.info("Cannot resubscribe due to error: " + responseEntity.getBody());
            continue;
          }
          LOGGER.info("Resubscribed: " + fd);
        }
      }
    }
    return responseEntityList;
  }

  @Override
  public Collection<AlarmEvent> getAlarmEventsFromFD(FusionDirector fusionDirector) {
    ResponseEntity<Map> responseEntity = fdHostService
        .connect(fusionDirector, "/rich/EventService/Alarms", HttpMethod.GET.name(), null);
    Collection<Map<String, Object>> members = (Collection<Map<String, Object>>) responseEntity
        .getBody().get("Members");
    Collection<AlarmEvent> alarmEvents = new ArrayList<>();
    for (Map<String, Object> member : members) {
      String eventCategory = member.get("EventCategory").toString();
      String severity = member.get("Severity").toString();
      if (isValidEventCategory(eventCategory) && isValidSeverity(severity)) {
        alarmEvents.add(
            new AlarmEvent(0, member.get("EventId").toString(),
                member.get("EventName").toString().replace("/", ""),
                eventCategory, severity, member.get("EventName").toString(), null));
      }
    }
    return alarmEvents;
  }

  @Override
  public int deleteAlarmAndHADeviceId(int fdHostId, String deviceId) {
    return fdAlarmDao.deleteAlarmRecord(fdHostId, deviceId) + fdAlarmDao
        .deleteHAComponent(fdHostId, deviceId);
  }

  @Override
  public void handleEvent(String baseAuthString, final String body) {
    final FusionDirector fusionDirector = validateAlarmEvent(baseAuthString, body);
    if (fusionDirector == null) {
      LOGGER.info("[FDEvent]Alarm event auth is not valid");
      return;
    }
    if (fusionDirector.getHaStatus() < 1 && fusionDirector.getAlarmStatus() < 1) {
      LOGGER.info("[FDEvent]Alarm and HA is not enabled");
      return;
    }
    final VCenterInfo vCenterInfo = fdSettingService.getVCenterInfo(false);
    if (vCenterInfo == null) {
      LOGGER.info("[FDEvent]vCenter setting is not enabled.");
      return;
    }

    try {
      Map<String, Object> dataMap = (Map<String, Object>) JsonUtil.readAsMap(body).get("data");
      dataMap.put("fdId", fusionDirector.getId());
      putEventToQueue(dataMap);
    } catch (IOException e) {
      LOGGER.error("[FDEvent]Cannot parse body", e);
    }
  }

  @Override
  public int removeAlarmEvents(ConnectedVim connectedVim) {
    List<AlarmEvent> alarmEvents = fdAlarmDao.getAlarmEvents();
    Collection<String> morValues = new HashSet<>();
    for (AlarmEvent alarmEvent : alarmEvents) {
      morValues.add(alarmEvent.getMorValue());
    }
    return connectedVim.removeAlarmDefinitions(morValues, false);
  }

  @Override
  public void cleanData() {
    fdAlarmDao.deleteData();
  }

  @Override
  public synchronized int syncAlarmEvents(FusionDirector fusionDirector) {
    VCenterInfo vCenterInfo = fdSettingService.getVCenterInfo(false);
    if (vCenterInfo == null) {
      LOGGER.info("vCenter setting is not enabled.");
      return 0;
    }
    Collection<AlarmEvent> alarmEventsFromFD = getAlarmEventsFromFD(fusionDirector);
    LOGGER.info("FD alarm events size: " + alarmEventsFromFD.size());
    if (alarmEventsFromFD.isEmpty()) {
      return 0;
    }
    String tmpTableName = null;
    ConnectedVim connectedVim = new ConnectedVim(vCenterInfo);
    connectedVim.connect(false);
    try {
      // 1. create temp table to compare data
      tmpTableName = fdAlarmDao.createAlarmEventTempTable();
      // 2. insert data to temp table
      fdAlarmDao.addAlarmEventToTempTable(tmpTableName, alarmEventsFromFD);
      // 3. get alarm mor values need to be updated
      List<String> updatedMorVal = fdAlarmDao.getUpdatedMorVal(tmpTableName);
      LOGGER.info("To be updated alarm events: " + updatedMorVal.size());
      // 4. remove alarm event from vCenter, DB
      if (!updatedMorVal.isEmpty()) {
        for (String morVal : updatedMorVal) {
          if (connectedVim.removeAlarmDefinitions(Collections.singletonList(morVal), false) > 0) {
            fdAlarmDao.deleteByMorVal(morVal);
          }
        }
      }
      // 5. find new alarm event, and add to vCenter and DB
      List<AlarmEvent> newAlarmEvents = fdAlarmDao.getNewAlarmEvents(tmpTableName);
      LOGGER.info("To be added alarm events: " + newAlarmEvents.size());
      if (!newAlarmEvents.isEmpty()) {
        for (AlarmEvent newAlarmEvent : newAlarmEvents) {
          List<AlarmEvent> alarmDefinitions = connectedVim
              .createAlarmDefinitions(Collections.singletonList(newAlarmEvent), false);
          fdAlarmDao.saveAlarmEvents(alarmDefinitions);
        }
      }
      return 1;
    } finally {
      if (tmpTableName != null) {
        fdAlarmDao.dropTempTable(tmpTableName);
      }
      connectedVim.disconnect();
    }
  }

  @Override
  public void syncAlarmEvents() {
    fdHostService.getBackgroundExecutor().execute(new Runnable() {
      @Override
      public void run() {
        VCenterInfo vCenterInfo = fdSettingService.getVCenterInfo(false);
        if (vCenterInfo == null) {
          LOGGER.info("vCenter setting is not enabled.");
          return;
        }
        List<FusionDirector> fusionDirectorList = fdHostService
            .getFusionDirectorList(null, 0, 0, false, true);
        if (fusionDirectorList == null || fusionDirectorList.isEmpty()) {
          LOGGER.info("Do not sync alarm events. No FD server exists.");
          return;
        } else if (fusionDirectorList.size() == 1) {
          FusionDirector fusionDirector = fusionDirectorList.get(0);
          if (fusionDirector.getAlarmStatus() < 1) {
            LOGGER.info("Do not sync alarm events. Alarm is not enabled.");
            return;
          }
          LOGGER.info("Sync alarm events from " + fusionDirector);
          syncAlarmEvents(fusionDirector);
          return;
        } else {
          String maxVersion = null;
          FusionDirector maxVersionFD = null;
          boolean hasAlarmEnabled = false;
          for (FusionDirector fusionDirector : fusionDirectorList) {
            if (fusionDirector.getAlarmStatus() > 0) {
              hasAlarmEnabled = true;
              break;
            }
          }
          if (!hasAlarmEnabled) {
            LOGGER.info("Do not sync alarm events. Alarm is not enabled.");
            return;
          }
          for (FusionDirector fusionDirector : fusionDirectorList) {
            String fdVersion = fusionDirector.getFdVersion();
            if (!StringUtils.hasText(fdVersion)) {
              LOGGER.info("Skip FD in which does not have version: " + fusionDirector);
              continue;
            }
            fdVersion = fdVersion.replace("FusionDirector ", "");
            if (maxVersion == null
                || StringUtil.isVersionAGreaterThanB(fdVersion, maxVersion) > 0) {
              maxVersion = fdVersion;
              maxVersionFD = fusionDirector;
            }
          }
          // fix maxVersionFD null dereference
          LOGGER.info(
              "Sync alarm events from " + maxVersion + (maxVersionFD == null ? "" : maxVersionFD));
          if (maxVersionFD != null) {
            syncAlarmEvents(maxVersionFD);
          }
          return;
        }
      }
    });
  }

  @Override
  public void syncHistoricEvents(final String fdIp) {
    syncHistoricEvents(fdIp, null);
  }

  @Override
  public void syncHistoricEvents(final String fdIp, final String deviceId) {
    fdHostService.getBackgroundExecutor().execute(new Runnable() {
      @Override
      public void run() {
        FusionDirector newFD = fdHostService.getFusionDirectorByIp(fdIp);
        if (newFD == null) {
          LOGGER.info("[FDHistoricEvents]FD host doesn't exist: " + fdIp);
          return;
        }
        LOGGER.info("[FDHistoricEvents]Sync historic events is starting: " + newFD + (
            StringUtils.hasText(deviceId) ? ", deviceId: " + deviceId : ""));
        if (newFD.getAlarmStatus() < 1 && newFD.getHaStatus() < 1) {
          LOGGER.info("[FDHistoricEvents]FD Alarm and HA is not enabled: " + newFD);
          return;
        }
        VCenterInfo vCenterInfo = fdSettingService.getVCenterInfo(false);
        if (vCenterInfo == null) {
          LOGGER.info("[FDHistoricEvents]vCenter setting is not enabled.");
          return;
        }
        int skip = 0;
        int top = 500;
        while (true) {
          try {
            while (eventQueue.size() > 200) { // wait if more than 200 events left in queue
              Thread.sleep(5000L);
            }
          } catch (InterruptedException e) {
            LOGGER.info("[FDHistoricEvents]Waiting queue is interrupted");
            break;
          }
          LOGGER.info("[FDHistoricEvents]Getting from " + (skip + 1) + ", query size: " + top);
          String serviceUrl = "/rich/EventService/Events?$skip=" + skip + "&$top=" + top;
          if (StringUtils.hasText(deviceId)) {
            serviceUrl += ("&$filter=(EventView='CurrentAlert')and(EventSource='" + deviceId
                + "')");
          }
          ResponseEntity<Map> responseEntity = fdHostService
              .connect(newFD, serviceUrl, "GET", null);
          if (!responseEntity.getStatusCode().equals(HttpStatus.OK)) {
            LOGGER.warn(
                "[FDHistoricEvents]Cannot get historic events: " + responseEntity.getStatusCode()
                    + ", " + responseEntity.getBody());
            return;
          }
          Collection<Map<String, Object>> members = (Collection<Map<String, Object>>) responseEntity
              .getBody().get("Members");
          LOGGER.info("[FDHistoricEvents]Number of members to proceed: " + members.size());
          if (members.isEmpty()) {
            return;
          }
          for (Map<String, Object> member : members) {
            try {
              Map<String, Object> dataMap = mapHistoricEventToCallbackEvent(member);
              dataMap.put("fdId", newFD.getId());
              LOGGER.info("[FDHistoricEvents]Putting SN to queue: " + dataMap.get("sn"));
              putEventToQueue(dataMap);
            } catch (Exception e) {
              LOGGER.error("[FDHistoricEvents]Failed to sync historic event: " + member, e);
            }
          }
          // data size is smaller than expected, which means it comes to the end.
          if (members.size() < top) {
            return;
          }
          skip += top;
        }
      }
    });
  }

  @Override
  public AlarmEvent getAlarmEvent(String alarmId, String eventCategory) {
    return fdAlarmDao.getAlarmEvent(alarmId, eventCategory);
  }

  @Override
  public void createProvider() {
    fdHostService.getBackgroundExecutor().execute(new Runnable() {
      @Override
      public void run() {
        ConnectedVim connectedVim = new ConnectedVim(fdSettingService.getVCenterInfo(false));
        connectedVim.connect(false);
        String provider = connectedVim
            .createProvider(true, true);
        LOGGER.info("Provider has been created: " + provider);
      }
    });
  }

  @Override
  public void start() {
    eventExecutor.execute(new Runnable() {
      @Override
      public void run() {
        while (true) {
          try {
            getAndHandleEventFromQueue();
          } catch (InterruptedException e) {
            LOGGER.info("Event handler is interrupted.", e);
            break;
          } catch (Exception e) {
            LOGGER.info("Cannot handle event.", e);
          }
        }
      }
    });
  }

  private void putEventToQueue(Map<String, Object> eventDataMap) {
    if (!eventQueue.offer(eventDataMap)) {
      LOGGER.info("[FDEvent]Event queue is full, discard " + eventDataMap);
    }
  }

  private Map<String, Object> getAndHandleEventFromQueue() throws InterruptedException {
    LOGGER.info("[FDEvent]Event queue size: " + eventQueue.size());
    if (eventQueue.isEmpty()) {
      if (connectedVim != null) {
        connectedVim.disconnect();
        connectedVim = null;
      }
    }
    Map<String, Object> eventDataMap = eventQueue.take();
    if (connectedVim == null) {
      connectedVim = new ConnectedVim(fdSettingService.getVCenterInfo(false));
      connectedVim.connect(false);
    }
    doHandleEvent(eventDataMap);
    return eventDataMap;
  }

  private Map<String, Object> mapHistoricEventToCallbackEvent(Map<String, Object> member) {
    // construct event
    Map<String, Object> eventMap = new HashMap<>();
    // map severity to alarm severity 1:Critical 2:Warning 3:OK
    String severity = member.get("Severity").toString();
    if ("Warning".equalsIgnoreCase(severity)) {
      eventMap.put("severity", "2");
    } else if ("Critical".equalsIgnoreCase(severity)) {
      eventMap.put("severity", "1");
    } else {
      eventMap.put("severity", "3");
    }
    eventMap.put("eventcategory", member.get("EventCategory"));
    eventMap.put("eventsubject", member.get("EventSubject"));
    eventMap.put("deviceid", member.get("DeviceID"));
    eventMap.put("alarmid", member.get("EventID"));
    eventMap.put("sn", member.get("SerialNumber"));
    String status = member.get("Status").toString();
    if ("Uncleared".equalsIgnoreCase(status)) {
      eventMap.put("category", "1"); // Alarm
    } else if ("Cleared".equalsIgnoreCase(status)) {
      eventMap.put("category", "2"); // Resume Alarm
    } else {
      throw new IgnorableException("[FDHistoricEvents]Unsupported status: " + status);
    }
    return eventMap;
  }

  private void doHandleEvent(final Map<String, Object> eventDataMap) {
    final String severity = eventDataMap.get("severity").toString();
    final String eventCategory = eventDataMap.get("eventcategory").toString();
    final String eventSubject = eventDataMap.get("eventsubject").toString();
    final String category = StringUtil.objToStr(eventDataMap.get("category"));
    final int sn = Integer.parseInt(String.valueOf(eventDataMap.get("sn")));
    String eventId = eventDataMap.get("alarmid").toString();
    LOGGER.info("[FDEvent]Start handling event: " + eventId + ", sn: " + sn);
    if (!isValidEventCategory(eventCategory)) {
      LOGGER.info("[FDEvent]Do not handle event category: " + eventCategory);
    }
    String deviceId = StringUtil.objToStr(eventDataMap.get("deviceid")).toLowerCase();
    List<FDSyncServer> fdSyncServerList = fdSyncService.loadSyncServersByDeviceId(deviceId);
    if (fdSyncServerList.isEmpty()) {
      LOGGER.info("[FDEvent]No sync deviceId: " + deviceId);
      return;
    }
    Collection<String> hostSystems = new HashSet<>();
    for (FDSyncServer fdSyncServer : fdSyncServerList) {
      hostSystems.add(fdSyncServer.getHaHostSystem());
    }
    final FusionDirector fusionDirector = fdHostService
        .getFusionDirector((int) eventDataMap.get("fdId"));
    if (fusionDirector == null) {
      LOGGER.info("[FDEvent]FD does not exist: " + eventDataMap.get("fdId"));
      return;
    }
    // Alarm
    if (fusionDirector.getAlarmStatus() > 0) {
      try {
        if (isEnclosure(eventCategory) && !(eventSubject.matches("(Fan|PS)\\d+"))) {
          LOGGER.info(
              "[FDEvent]Do not push alarm for Enclosure event subject: " + eventSubject);
        } else if (fusionDirector.getAlarmLevel() == 1 && !"1".equals(severity)) {
          LOGGER.info("[FDEvent]Do not push alarm for severity: " + severity);
        } else {
          AlarmRecord toBeAddedAlarmRecord = null;
          AlarmRecord toBeDeletedAlarmRecord = null;
          AlarmEvent alarmEvent = getAlarmEvent(eventId, eventCategory);
          if (alarmEvent == null) {
            LOGGER.info("[FDEvent]No alarm event defined, " + eventCategory + ": " + eventId);
          } else {
            AlarmRecord ar = new AlarmRecord();
            ar.setFdHostId(fusionDirector.getId());
            ar.setSn(sn);
            ar.setEventId(eventId);
            ar.setCreateTime(new Date());
            ar.setDeviceId(deviceId);
            AlarmRecord alarmRecord = fdAlarmDao.getAlarmRecord(fusionDirector.getId(), sn, deviceId);
            if ("1".equals(category)) { // 1: alarm
              if (alarmRecord == null) {
                toBeAddedAlarmRecord = ar;
              } else {
                LOGGER.info("[FDEvent]Existing Alarm sn data: " + alarmRecord);
              }
            } else { // 2. resume
              if (alarmRecord == null) {
                LOGGER.info("[FDEvent]No sn data to resume Alarm, sn: " + sn);
              } else {
                toBeDeletedAlarmRecord = ar;
              }
            }

            if (toBeAddedAlarmRecord != null) {
              // alarm
              pushAlarmEvent(connectedVim, alarmEvent.getVcEventId(), hostSystems);
              fdAlarmDao.addAlarmRecord(toBeAddedAlarmRecord);
            }
            if (toBeDeletedAlarmRecord != null) {
              // resume
              // check if any eventId exists in the FD
              int alarmRecordEventIdCount = fdAlarmDao
                  .getAlarmRecordEventIdCount(toBeDeletedAlarmRecord);
              LOGGER.info(
                  "[FDEvent]Number of " + eventId + " left to resume: " + (alarmRecordEventIdCount
                      - 1));
              if (alarmRecordEventIdCount < 2) {
                // all this eventId are resumed
                pushAlarmEvent(connectedVim, alarmEvent.getVcResumeEventId(), hostSystems);
              }
              fdAlarmDao.deleteAlarmRecord(toBeDeletedAlarmRecord);
            }
          }
        }
      } catch (Exception e) {
        LOGGER.info("[FDEvent]Failed to push event", e);
      }
    }
    // Proactive HA
    if (fusionDirector.getHaStatus() > 0) {
      try {
        HAEventDef haEventDef = HAEventHelper.getInstance().getHaEventDef(eventId);
        if (!isBMC(eventCategory)) {
          LOGGER.info("[FDEvent]HA doesn't support event category: " + eventCategory);
        } else if (!isValidCategory(category)) {
          LOGGER.info("[FDEvent]HA doesn't support category: " + category);
        } else if (haEventDef == null) {
          LOGGER.info("[FDEvent]eventsForHA doesn't include eventId: " + eventId);
        } else {
          HAComponent haComponent = new HAComponent();
          haComponent.setFdHostId(fusionDirector.getId());
          haComponent.setComponent(eventSubject);
          haComponent.setComponentType(haEventDef.getEventComponent());
          haComponent.setDeviceId(deviceId);
          haComponent.setSeverity(haEventDef.getSeverity());
          haComponent.setSn(sn);
          List<HAComponent> haComponentList = fdAlarmDao.getHAComponents(haComponent);
          HAComponent toBeAddedHAComponent = null;
          HAComponent toBeDeletedHAComponent = null;
          boolean isComponentAllResumed = false;
          boolean doPush = false;
          if ("1".equals(category)) { // 1: component alarm
            if (haComponentList.isEmpty()) { // add if it is not exist in DB
              haComponent.setCreateTime(new Date());
              toBeAddedHAComponent = haComponent;
              doPush = true;
            } else {
              LOGGER.info(
                  "[FDEvent]Existing HA sn data: " + haComponentList.get(0));
            }
          } else { // 2: component resume
            if (haComponentList.isEmpty()) {
              LOGGER.info("[FDEvent]No sn data to resume HA, sn: " + sn);
            } else {
              toBeDeletedHAComponent = haComponent;
              int componentTypeCount = fdAlarmDao.getComponentTypeCount(haComponent);
              if (componentTypeCount < 2) {
                isComponentAllResumed = true;
                doPush = true;
              }
              LOGGER.info(
                  "[FDEvent]Number of the component left to resume: " + (componentTypeCount
                      - 1));
            }
          }

          if (doPush) {
            pushHA(connectedVim, haEventDef.getEventComponent(), hostSystems,
                isComponentAllResumed);
            LOGGER.info("[FDEvent]Push HA completed");
          }
          if (toBeAddedHAComponent != null) {
            LOGGER.info("[FDEvent]New HA alarm component: " + toBeAddedHAComponent + ", eventId: "
                + eventId);
            fdAlarmDao.addHAComponents(toBeAddedHAComponent);
          }
          if (toBeDeletedHAComponent != null) {
            LOGGER.info(
                "[FDEvent]Resumed HA alarm component: " + toBeDeletedHAComponent + ", eventId: "
                    + eventId);
            fdAlarmDao.deleteHAComponent(haComponent);
          }
        }
      } catch (Exception e) {
        LOGGER.info("[FDEvent]Failed to push HA", e);
      }
    }
  }

  private void pushAlarmEvent(ConnectedVim connectedVim, String eventId,
      Collection<String> hostSystems) {
    LOGGER.info("[FDEvent]Pushing event " + eventId + " to host: " + hostSystems);
    for (String hostSystem : hostSystems) {
      connectedVim.pushEvent(eventId, hostSystem, false);
    }
  }

  private void pushHA(ConnectedVim connectedVim, String haComponent, Collection<String> hostSystems,
      boolean isComponentAllResumed) {
    connectedVim
        .pushHealth(haComponent, hostSystems, isComponentAllResumed ? "ok" : "critical", false);
  }

  private boolean isValidEventCategory(String eventCategory) {
    return isEnclosure(eventCategory) || isBMC(eventCategory);
  }

  private boolean isEnclosure(String eventCategory) {
    return "Enclosure".equalsIgnoreCase(eventCategory);
  }

  private boolean isBMC(String eventCategory) {
    return "BMC".equalsIgnoreCase(eventCategory);
  }

  private boolean isValidSeverity(String severity) {
    return "Warning".equalsIgnoreCase(severity) || "Critical".equalsIgnoreCase(severity);
  }

  private boolean isValidCategory(String category) {
    return category != null && ("1".equals(category) || "2".equals(category));
  }

  private boolean isErrorStatusCode(int statusCode) {
    return statusCode >= 400 && statusCode < 600;
  }

  private int parseSubscribeId(ResponseEntity<Map> responseEntity) {
    if (responseEntity != null) {
      int statusCode = responseEntity.getStatusCode().value();
      HttpHeaders headers = responseEntity.getHeaders();
      if (statusCode >= 200 && statusCode < 300 && headers != null && headers
          .containsKey("Location")) {
        List<String> locations = headers.get("Location");
        if (!locations.isEmpty()) {
          String location = locations.get(0);
          return Integer.parseInt(location.substring(location.lastIndexOf("/") + 1));
        }
      }
    }
    return -1;
  }

  private String getCallbackUrl(String localIp, int port) throws VcenterException {
    return "https://" + localIp + ":" + port
        + "/vsphere-client/fdvcenterpluginui/rest/services/fd/event";
  }

  private FusionDirector validateAlarmEvent(String baseAuthString, String body) {
    try {
//      LOGGER.info("Received alarm event auth: " + baseAuthString);
//      LOGGER.info("Received alarm event body: " + body);
      Pair<String, String> pair = FDUtils.parseBasicAuth(baseAuthString);
      if (!FDUtils.isValidAlarmUsername(pair.getKey())) {
        LOGGER.info("Alarm username is not valid.");
        return null;
      }
      FusionDirector fusionDirector = fdHostService.getFusionDirector(pair.getKey());
      if (fusionDirector != null && pair.getValue().equals(fusionDirector.getReservedStr2())) {
        return fusionDirector;
      }
    } catch (Exception e) {
      LOGGER.error("Cannot validate auth", e);
      return null;
    }
    return null;
  }

  private String buildSubscribeBody(String callbackUrl, String username, String password) {
    Map<String, Object> subscribeBodyMap = new HashMap<>();
    subscribeBodyMap.put("Context", "Huawei vCenter plugin event subscription for Fusion Director");
    subscribeBodyMap.put("EventTypes", Collections.singletonList("Alert"));
    subscribeBodyMap.put("Protocol", "Redfish");
    subscribeBodyMap.putAll(buildResubscribeMap(callbackUrl, username, password));
    return JsonUtil.GSON.toJson(subscribeBodyMap, Map.class);
  }

  private String buildResubscribeBody(String callbackUrl, String username, String password) {
    return JsonUtil.GSON.toJson(buildResubscribeMap(callbackUrl, username, password), Map.class);
  }

  private Map<String, Object> buildResubscribeMap(String callbackUrl, String username,
      String password) {
    Map<String, Object> resubscribeBodyMap = new HashMap<>();
    Map<String, String> oemHuaweiNode = new HashMap<>();
    oemHuaweiNode.put("Resource", "plugin");
    oemHuaweiNode.put("Password", password);
    oemHuaweiNode.put("UserName", username);
    resubscribeBodyMap.put("Oem", Collections.singletonMap("Huawei", oemHuaweiNode));
    resubscribeBodyMap.put("Destination", callbackUrl);
    return resubscribeBodyMap;
  }

  private void destroy() {
    LOGGER.info("release resources....");
    eventExecutor.shutdownNow();
    eventExecutor = null;

    connectedVim = null;
    eventQueue.clear();
    eventQueue = null;
  }

}
