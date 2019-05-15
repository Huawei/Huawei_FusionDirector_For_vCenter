package com.huawei.fdvcenterpluginui.services;

import com.huawei.fdvcenterpluginui.dao.FDSyncDao;
import com.huawei.fdvcenterpluginui.entity.FDSyncServer;
import com.huawei.fdvcenterpluginui.entity.FusionDirector;
import com.huawei.fdvcenterpluginui.entity.VCenterInfo;
import com.huawei.fdvcenterpluginui.exception.IgnorableException;
import com.huawei.fdvcenterpluginui.utils.ConnectedVim;
import com.huawei.fdvcenterpluginui.utils.StringUtil;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;

public class FDSyncServiceImpl implements FDSyncService {

  private static final Log LOGGER = LogFactory.getLog(FDSyncServiceImpl.class);

  @Autowired
  private FDSettingService fdSettingService;

  @Autowired
  private FDHostService fdHostService;

  @Autowired
  private FDAlarmService fdAlarmService;

  @Autowired
  private FDSyncDao fdSyncDao;

  @Override
  public synchronized List<FDSyncServer> getSyncServers() {
    // check vCenter setting
    List<FDSyncServer> fdSyncServiceList = new ArrayList<>();
    VCenterInfo vCenterInfo = fdSettingService.getVCenterInfo(false);
    if (vCenterInfo == null) {
      LOGGER.info("[Sync]No vCenter Settings");
      return fdSyncServiceList;
    }
    // check fd list
    List<FusionDirector> fdList = fdHostService.getFusionDirectorList(null, -1, -1, false, false);
    if (fdList.isEmpty()) {
      LOGGER.info("[Sync]No FusionDirector");
      return fdSyncServiceList;
    }
    // get servers from vCenter
    ConnectedVim connectedVim = new ConnectedVim(vCenterInfo);
    connectedVim.connect(false);
    List<FDSyncServer> vCenterServerList = connectedVim.getServerList(true);
    connectedVim = null; // release memory
    if (vCenterServerList.isEmpty()) {
      LOGGER.info("[Sync]No Host in vCenter");
      return fdSyncServiceList;
    }
    // convert to uuid-FDSyncServer map
    Map<String, FDSyncServer> uuidSyncServerMap = new HashMap<>();
    for (FDSyncServer fdSyncServer : vCenterServerList) {
      uuidSyncServerMap.put(fdSyncServer.getUuid(), fdSyncServer);
    }

    // get servers from FDs
    for (FusionDirector fd : fdList) {
      try {
        Collection<Map<String, Object>> nodesMembers = fdHostService.getNodesMembers(fd);
        if (nodesMembers == null || nodesMembers.isEmpty()) {
          LOGGER.info("[Sync]No node members in " + fd);
          continue;
        }
        Map<String, String> childParentDeviceIdMap = getChildParentDeviceIDMap(fd);
        LOGGER.info("[Sync]Parent - Child Device ID Map: " + childParentDeviceIdMap);
        // handle member UUID
        for (Map<String, Object> nodesMember : nodesMembers) {
          Object uuid = nodesMember.get("UUID");
          // No UUID text
          if (uuid == null || !StringUtils.hasText(uuid.toString())) {
            LOGGER.info("[Sync]No UUID in node of " + fd + ", " + nodesMember);
            continue;
          }
          String nodeUuid = StringUtil.formatUUID(uuid.toString());
          // UUID doesn't match
          if (!uuidSyncServerMap.containsKey(nodeUuid)) {
            LOGGER.info("[Sync]UUID doesn't exist in vCenter: " + nodeUuid);
            continue;
          }
          // put info to fdSyncServer
          FDSyncServer fdSyncServer = uuidSyncServerMap.get(nodeUuid).clone();
          String deviceID = StringUtil.objToStr(nodesMember.get("DeviceID")).toLowerCase();
          fdSyncServer.setDeviceId(deviceID);
          fdSyncServer.setFdHostId(fd.getId());
          fdSyncServer.setCreateTime(new Date());
          // find parent device ID
          String parentDeviceId = childParentDeviceIdMap.get(nodeUuid);
          fdSyncServer.setParentDeviceId(
              parentDeviceId == null ? null : StringUtil.formatUUID(parentDeviceId));
          // add to sync server list
          fdSyncServiceList.add(fdSyncServer);
        }
      } catch (Exception e) {
        LOGGER.error("[Sync]Cannot get sync servers from " + fd, e);
      }
    }
    return fdSyncServiceList;
  }

  @Override
  public void syncServers() {
    fdHostService.getBackgroundExecutor().execute(new Runnable() {
      @Override
      public void run() {
        Collection<FDSyncServer> syncServers = getSyncServers();
        LOGGER.info("[Sync]Sync servers: " + syncServers);
        // is device id changed
        if (!syncServers.isEmpty()) {
          List<FDSyncServer> fdSyncServersInDB = fdSyncDao.loadFDSyncServer();
          if (!fdSyncServersInDB.isEmpty()) {
            // use fd:uuid, syncserver map for quick searching
            Map<String, FDSyncServer> uuidSyncServerMapInDB = new HashMap<>();
            for (FDSyncServer fdSyncServerInDB : fdSyncServersInDB) {
              uuidSyncServerMapInDB
                  .put(fdSyncServerInDB.getFdHostId() + ":" + fdSyncServerInDB.getUuid(),
                      fdSyncServerInDB);
            }
            // if uuid exists and device_id/parent_device_id changed, delete old device_id from HW_HA_COMPONENT and HW_ALARM_RECORD
            for (FDSyncServer syncServer : syncServers) {
              FDSyncServer syncServerInDB = uuidSyncServerMapInDB
                  .get(syncServer.getFdHostId() + ":" + syncServer.getUuid());
              if (syncServerInDB == null) {
                continue;
              }
              if (!syncServerInDB.getDeviceId().equals(syncServer.getDeviceId())) {
                // device id changed
                LOGGER.info(
                    "[Sync]Device Id changed, delete corresponding alarm and HA records from DB: "
                        + syncServerInDB.getDeviceId() + ", fdHostId: " + syncServerInDB
                        .getFdHostId());
                fdAlarmService.deleteAlarmAndHADeviceId(syncServerInDB.getFdHostId(),
                    syncServerInDB.getDeviceId());

                // historical alarm filter
                FusionDirector fusionDirector = fdHostService
                    .getFusionDirector(syncServer.getFdHostId());
                if (fusionDirector == null) {
                  LOGGER.info("[Sync]No FD exists: " + syncServer.getFdHostId());
                } else {
                  fdAlarmService
                      .syncHistoricEvents(fusionDirector.getHostIp(), syncServer.getDeviceId());
                }
              }
              if (syncServerInDB.getParentDeviceId() != null
                  && syncServer.getParentDeviceId() != null && !syncServerInDB.getParentDeviceId()
                  .equals(syncServer.getParentDeviceId())) {
                // parent device id changed
                LOGGER.info(
                    "[Sync]Parent device Id changed, delete corresponding alarm and HA records from DB: "
                        + syncServerInDB.getParentDeviceId() + ", fdHostId: " + syncServerInDB
                        .getFdHostId());
                fdAlarmService.deleteAlarmAndHADeviceId(syncServerInDB.getFdHostId(),
                    syncServerInDB.getParentDeviceId());
                // historical alarm filter
                FusionDirector fusionDirector = fdHostService
                    .getFusionDirector(syncServer.getFdHostId());
                if (fusionDirector == null) {
                  LOGGER.info("[Sync]No FD exists: " + syncServer.getFdHostId());
                } else {
                  fdAlarmService.syncHistoricEvents(fusionDirector.getHostIp(),
                      syncServer.getParentDeviceId());
                  if (StringUtils.hasText(syncServer.getDeviceId())) {
                    fdAlarmService.syncHistoricEvents(fusionDirector.getHostIp(),
                        syncServer.getDeviceId());
                  }
                }
              }
            }
          }
        }
        // merge
        if (!syncServers.isEmpty()) {
          List<FDSyncServer> fdSyncServersInDB = fdSyncDao.loadFDSyncServer();
          if (!fdSyncServersInDB.isEmpty()) {
            Set<FDSyncServer> newFDSyncServers = new HashSet<>(syncServers);
            newFDSyncServers.addAll(fdSyncServersInDB);
            syncServers = newFDSyncServers;
            LOGGER.info("[Sync]Final sync servers: " + syncServers);
          }
          // update
          fdSyncDao.updateFDSyncServer(syncServers);
        }
      }
    });
  }

  @Override
  public List<FDSyncServer> loadSyncServer() {
    return fdSyncDao.loadFDSyncServer();
  }

  @Override
  public FDSyncServer loadSyncServer(String hostSystem) {
    return fdSyncDao.loadFDSyncServer(hostSystem);
  }

  @Override
  public List<FDSyncServer> loadSyncServersByDeviceId(String deviceId) {
    return fdSyncDao.loadSyncServersByDeviceId(deviceId);
  }

  private Map<String, String> getChildParentDeviceIDMap(FusionDirector fd) {
    Map<String, String> childParentDeviceIdMap = new HashMap<>();
    Collection<Map<String, Object>> enclosuresMembers = fdHostService.getEnclosuresMembers(fd);
    if (enclosuresMembers != null) {
      for (Map<String, Object> enclosuresMember : enclosuresMembers) {
        String odataId = StringUtil.objToStr(enclosuresMember.get("@odata.id"));
        if (StringUtils.hasText(odataId)) {
          String parentDeviceId = StringUtil
              .formatUUID(odataId.substring(odataId.lastIndexOf("/") + 1));
          Map<String, Object> bodyMap = fdHostService.connect(fd, odataId, "GET", null).getBody();
          Object slot = bodyMap.get("Slot");
          if (slot != null && ((Map<String, Object>) slot).containsKey("ServerSlot")) {
            Object serverSlot = ((Map<String, Object>) slot).get("ServerSlot");
            if (serverSlot != null && serverSlot instanceof Collection) {
              for (Map<String, Object> serverSlotMap : ((Collection<Map<String, Object>>) serverSlot)) {
                String physicalUUID = StringUtil
                    .formatUUID(StringUtil.objToStr(serverSlotMap.get("PhysicalUUID")));
                if (StringUtils.hasText(physicalUUID)) {
                  childParentDeviceIdMap.put(physicalUUID, parentDeviceId);
                }
              }
            }
          }
        }
      }
    }
    return childParentDeviceIdMap;
  }
}
