package com.huawei.fdvcenterpluginui.utils;

import com.huawei.fdvcenterpluginui.entity.AlarmEvent;
import com.huawei.fdvcenterpluginui.entity.FDSyncServer;
import com.huawei.fdvcenterpluginui.entity.VCenterInfo;
import com.huawei.fdvcenterpluginui.exception.VcenterException;
import com.huawei.fdvcenterpluginui.exception.VersionNotSupportException;
import com.vmware.common.Main;
import com.vmware.common.ssl.TrustAll;
import com.vmware.connection.BasicConnection;
import com.vmware.connection.ConnectedVimServiceBase;
import com.vmware.connection.Connection;
import com.vmware.vim25.AlarmExpression;
import com.vmware.vim25.AlarmSetting;
import com.vmware.vim25.AlarmSpec;
import com.vmware.vim25.ClusterConfigInfoEx;
import com.vmware.vim25.ClusterConfigSpecEx;
import com.vmware.vim25.ClusterInfraUpdateHaConfigInfo;
import com.vmware.vim25.DuplicateNameFaultMsg;
import com.vmware.vim25.DynamicProperty;
import com.vmware.vim25.EventAlarmExpression;
import com.vmware.vim25.ExtendedEvent;
import com.vmware.vim25.HealthUpdate;
import com.vmware.vim25.HealthUpdateInfo;
import com.vmware.vim25.HealthUpdateInfoComponentType;
import com.vmware.vim25.HostHardwareInfo;
import com.vmware.vim25.HostSystemInfo;
import com.vmware.vim25.InvalidPropertyFaultMsg;
import com.vmware.vim25.ManagedEntityStatus;
import com.vmware.vim25.ManagedObjectReference;
import com.vmware.vim25.NotFoundFaultMsg;
import com.vmware.vim25.ObjectContent;
import com.vmware.vim25.ObjectSpec;
import com.vmware.vim25.OrAlarmExpression;
import com.vmware.vim25.PropertyFilterSpec;
import com.vmware.vim25.PropertySpec;
import com.vmware.vim25.RetrieveOptions;
import com.vmware.vim25.RetrieveResult;
import com.vmware.vim25.RuntimeFaultFaultMsg;
import com.vmware.vim25.ServiceContent;
import com.vmware.vim25.VimPortType;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.net.MalformedURLException;
import java.net.URL;
import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.util.StringUtils;

/**
 * Created by Horace on 2018/11/12.
 */
public class ConnectedVim extends ConnectedVimServiceBase {

  public static final String HOST_SYSTEM = "HostSystem";

  private static final Log LOGGER = LogFactory.getLog(ConnectedVim.class);

  private static final String DATA_CENTER = "Datacenter";
  private static final String CLUSTER = "ClusterComputeResource";
  private static final String HARDWARE = "hardware";

  private static final String COMPATIBLE_VCENTER_VERSION_SINCE = "6.5.0";

  private String providerNamePrefix = "com.huawei.fdvcenterpluginui";
  private String providerNameVersion = "v1";
  private String providerName = providerNamePrefix + "." + providerNameVersion;

  private String username;

  private String password;

  private String host;

  private int port;

  public ConnectedVim(String host, int port, String username, String password) {
    this.host = host;
    this.port = port;
    this.username = username;
    this.password = password;
  }

  public ConnectedVim(VCenterInfo vCenterInfo) {
    setVCenterInfo(vCenterInfo);
  }

  public void setVCenterInfo(VCenterInfo vCenterInfo) {
    if (vCenterInfo != null) {
      this.host = vCenterInfo.getHostIp();
      this.port = vCenterInfo.getHostPort();
      this.username = vCenterInfo.getUsername();
      this.password = vCenterInfo.getPassword();
    }
  }

  /**
   * @param deviceComponentId one of Memory,Disk,PowerSupply,Fan,Network
   * @param severity one of critical(red), major(yellow), ok(green)
   */
  public void pushHealth(String deviceComponentId, Collection<String> hostSystems,
      String severity, boolean closeConnection) {
    if (hostSystems == null || hostSystems.size() == 0) {
      LOGGER.info("No host system, do not push health.");
      return;
    }
    try {
      ManagedObjectReference healthUpdateManager = getHealthUpdateManager();
      String providerId = getProviderId(healthUpdateManager);
      List<HealthUpdate> healthUpdates = new ArrayList<>();

      IdWorker idWorker = new IdWorker(1, 1, 1);
      for (String hostSystemValue : hostSystems) {
        ManagedObjectReference hostSystem = getHostSystem(hostSystemValue);
        addMonitored(healthUpdateManager, providerId, hostSystem);

        HealthUpdate healthUpdate = new HealthUpdate();
        healthUpdate.setId(deviceComponentId + idWorker.nextId());
        healthUpdate.setHealthUpdateInfoId(deviceComponentId);
        healthUpdate.setEntity(hostSystem);
        healthUpdate.setStatus(convertHealthStatus(severity));
        if (healthUpdate.getStatus() != ManagedEntityStatus.GREEN) {
          healthUpdate.setRemediation("please refer to Proposed Repair Actions in Fusion Director");
        } else {
          healthUpdate.setRemediation("");
        }
        healthUpdates.add(healthUpdate);
      }

      LOGGER.info("Health Updates size: " + healthUpdates.size());
      if (healthUpdates.isEmpty()) {
        return;
      }
      this.vimPort.postHealthUpdates(healthUpdateManager, providerId, healthUpdates);
    } catch (Exception e) {
      LOGGER.info("Failed to push health: " + deviceComponentId + " to " + hostSystems, e);
    } finally {
      if (closeConnection) {
        disconnect();
      }
    }
  }

  public void pushEvent(String eventTypeID, String haHostSystem, boolean closeConnection) {
    try {
      ExtendedEvent event = createEvent(eventTypeID, haHostSystem);
      this.vimPort.postEvent(this.serviceContent.getEventManager(), event, null);
      LOGGER.info("Post event " + eventTypeID + " completed.");
    } catch (Exception e) {
      LOGGER.info("Failed to post event: " + eventTypeID, e);
    } finally {
      if (closeConnection) {
        disconnect();
      }
    }
  }

  /**
   * create provider if it doesn't exist
   *
   * @param enable Whether to enable
   * @return providerId
   */
  public String createProvider(boolean enable, boolean closeConnection) {
    try {
      String version = getVersion(false);
      LOGGER.info("Current version is: " + version);
      checkVersionCompatible(version);
      ManagedObjectReference healthUpdateManager = getHealthUpdateManager();
      String providerId = registerAndGetProviderId(healthUpdateManager);
      if (enable) {
        reconfigureClusterProvider(providerId, true);
      }
      return providerId;
    } catch (VersionNotSupportException e) {
      throw e;
    } catch (Exception e) {
      LOGGER.warn("Failed to create provider", e);
      throw new VcenterException("Cannot create provider");
    } finally {
      if (closeConnection) {
        disconnect();
      }
    }
  }

  public Boolean removeProvider(boolean closeConnection) {
    Boolean result = null;
    try {
      ManagedObjectReference healthUpdateManager = getHealthUpdateManager();
      List<String> providerIdList = this.vimPort.queryProviderList(healthUpdateManager);
      for (String it : providerIdList) {
        String providerName = this.vimPort.queryProviderName(healthUpdateManager, it);
        if (providerName.startsWith(providerNamePrefix)) {
          LOGGER.info("unregister health update provider, providerName: " + providerName);
          result = unregisterHealthUpdateProvider(healthUpdateManager, it);
        }
      }
    } catch (Exception e) {
      LOGGER.warn("Failed to remove provider, " + e.getMessage());
      result = false;
    } finally {
      if (closeConnection) {
        disconnect();
      }
    }
    return result;
  }

  public String getVersion(boolean closeConnection) {
    try {
      String version = this.serviceContent.getAbout().getVersion();
      return version;
    } finally {
      if (closeConnection) {
        disconnect();
      }
    }
  }

  /**
   * Check whether vCenter version support provider and HA
   */
  public static void checkVersionCompatible(String version) {
    boolean isCompatibleVersion = true;
    try {
      String[] targetVersionsSince = COMPATIBLE_VCENTER_VERSION_SINCE.split("\\.");
      String[] currentVersions = version.split("\\.");
      for (int i = 0; i < Math.max(targetVersionsSince.length, currentVersions.length); i++) {
        String currentVersion = currentVersions.length - 1 < i ? "0" : currentVersions[i];
        String targetVersion = targetVersionsSince.length - 1 < i ? "0" : targetVersionsSince[i];
        if (Integer.parseInt(currentVersion) < Integer.parseInt(targetVersion)) {
          isCompatibleVersion = false;
          break;
        } else if (Integer.parseInt(currentVersion) > Integer.parseInt(targetVersion)) {
          break;
        }
      }
    } catch (Exception e) {
      LOGGER.error(e.getCause(), e);
    }
    if (!isCompatibleVersion) {
      throw new VersionNotSupportException(version);
    }
  }

  /**
   * connect to test username and password as well as host and port
   *
   * @param closeConnection close connection in the end. Set true for connectivity purpose
   */
  public synchronized boolean connect(boolean closeConnection) {
    Connection basicConnection = new BasicConnection();
    URL sdkUrl = null;
    try {
      sdkUrl = new URL("https", host, port, "/sdk");
    } catch (MalformedURLException e) {
      LOGGER.info("can not parse host: " + host);
      return false;
    }
    basicConnection.setPassword(password);
    basicConnection.setUrl(sdkUrl.toString());
    basicConnection.setUsername(username);
    this.setIgnoreCert();
    this.setHostConnection(true);
    this.setConnection(basicConnection);
    LOGGER.info("Connecting " + host + ":" + port);
    Connection connect = this.connect();
    if (connect == null || !connect.isConnected()) {
      LOGGER.info("connect is null or connect is not connected");
      return false;
    }
    LOGGER.info("connect vim success.");
    if (closeConnection) {
      disconnect();
    }
    return true;
  }

  @Override
  public Connection disconnect() {
    try {
      if (connection != null) {
        LOGGER.info("Disconnecting connectedVim...");
        Connection disconnect = super.disconnect();
        return disconnect;
      }
    } catch (Exception e) {
      LOGGER.warn("Failed to disconnect vcenter, " + e.getMessage());
    } finally {
      this.vimPort = null;
      this.waitForValues = null;
      this.getMOREFs = null;
      this.headers = null;
      this.serviceContent = null;
      this.rootRef = null;
    }
    return connection;
  }

  public void setIgnoreCert() {
    System.setProperty(Main.Properties.TRUST_ALL, Boolean.TRUE.toString());
    try {
      TrustAll.trust();
    } catch (NoSuchAlgorithmException | KeyManagementException e) {
      LOGGER.error(e.getMessage(), e);
    }
  }

  public int removeAlarmDefinitions(Collection<String> morValues, boolean closeConnection) {
    try {
      if (morValues == null || morValues.isEmpty()) {
        return 0;
      }
      int removed = 0;
      for (String morValue : morValues) {
        if (morValue != null && morValue.length() > 0) {
          ManagedObjectReference mor = new ManagedObjectReference();
          mor.setType("Alarm");
          mor.setValue(morValue);
          try {
            vimPort.removeAlarm(mor);
            ++removed;
          } catch (Exception e) {
            LOGGER.info("Failed remove alarm definition " + morValue);
          }
        }
      }
      return removed;
    } catch (Exception e) {
      LOGGER.error("Cannot remove alarm from vCenter", e);
      return 0;
    } finally {
      if (closeConnection) {
        disconnect();
      }
    }
  }

  public List<AlarmEvent> createAlarmDefinitions(List<AlarmEvent> alarmDefinitionList,
      boolean closeConnection) {
    if (alarmDefinitionList == null || alarmDefinitionList.isEmpty()) {
      LOGGER.info("alarmDefinitionList is empty");
      return Collections.EMPTY_LIST;
    }
    List<AlarmEvent> alarmDefinitionListResult = new ArrayList<>();
    try {
      for (AlarmEvent alarmDefinition : alarmDefinitionList) {
        LOGGER.info("creating alarm " + alarmDefinition.getVcEventId());
        try {
          AlarmExpression expression = creatEventAlarmExpression(
              getManagedEntityStatus(alarmDefinition.getSeverity()), alarmDefinition.getEventType(),
              alarmDefinition.getVcEventId(), alarmDefinition.getVcResumeEventId());

          String vcEventName = alarmDefinition.getVcEventName();
          int maxNameLength = 75;
          if (vcEventName.length() > maxNameLength) {
            LOGGER.info(vcEventName + " exceeds maximum length, rename: " + vcEventName
                .substring(0, maxNameLength));
            vcEventName = vcEventName.substring(0, maxNameLength);
          }
          ManagedObjectReference mor = vimPort
              .createAlarm(serviceContent.getAlarmManager(),
                  serviceContent.getRootFolder(),
                  createAlarmSpec(vcEventName,
                      StringUtils.hasText(alarmDefinition.getDescription()) ? alarmDefinition
                          .getDescription() : alarmDefinition.getEventName(), expression));
          alarmDefinition.setMorValue(mor.getValue());
          alarmDefinitionListResult.add(alarmDefinition);
        } catch (DuplicateNameFaultMsg e) {
          LOGGER.info(alarmDefinition.getEventName() + " is duplicated, ignore...", e);
        } catch (Exception e) {
          LOGGER.info("unknown error", e);
        }
      }
      return alarmDefinitionListResult;
    } catch (Exception e) {
      LOGGER.error("Failed to createAlarmDefinitions", e);
    } finally {
      if (closeConnection) {
        disconnect();
      }
    }
    return Collections.EMPTY_LIST;
  }

  public List<FDSyncServer> getServerList(boolean closeConnection) {
    try {
      List<FDSyncServer> result = new LinkedList<>();
      String providerId = null;
      try {
        providerId = queryProviderId(getHealthUpdateManager());
      } catch (Exception e) {
        LOGGER.warn("Failed to Query providerId", e);
      }
      final boolean isRequestMonitorHost = StringUtils.hasLength(providerId);
      LOGGER.info("isRequestMonitorHost: " + isRequestMonitorHost);
      List<ManagedObjectReference> monitoredHostList = new LinkedList<>();

      Map<String, ManagedObjectReference> dataCenters = this.getDataCenters();
      for (ManagedObjectReference dataCenter : dataCenters.values()) {
        Map<String, ManagedObjectReference> hostMap = this.getMOREFs
            .inContainerByType(dataCenter, HOST_SYSTEM);
        for (ManagedObjectReference hostSystem : hostMap.values()) {
          if (isRequestMonitorHost) {
            handleNotMonitored(providerId, hostSystem, monitoredHostList);
          }
          HostHardwareInfo hardwareInfo = (HostHardwareInfo) this
              .getDynamicProperty(hostSystem, HARDWARE);

          if (hardwareInfo == null) {
            LOGGER.warn("No hardware info");
            continue;
          }
          HostSystemInfo systemInfo = hardwareInfo.getSystemInfo();
          if (systemInfo == null) {
            LOGGER.warn("No system info");
            continue;
          }
          String uuid = systemInfo.getUuid();
          if (!StringUtils.hasLength(uuid)) {
            continue;
          }
          FDSyncServer fdSyncServer = new FDSyncServer();
          fdSyncServer.setUuid(StringUtil.formatUUID(uuid));
          fdSyncServer.setHaHostSystem(hostSystem.getValue());
          result.add(fdSyncServer);
        }
      }

      LOGGER.info("monitored host list size: " + monitoredHostList.size());
      if (isRequestMonitorHost && !monitoredHostList.isEmpty()) {
        try {
          addMonitored(getHealthUpdateManager(), providerId, monitoredHostList);
        } catch (Exception e) {
          LOGGER.warn("Failed to add Monitored.", e);
        }
      }

      return result;
    } catch (Exception e) {
      LOGGER.error(e.getMessage(), e);
      throw new VcenterException("Failed to get server list from vCenter");
    } finally {
      if (closeConnection) {
        disconnect();
      }
    }
  }

  private ManagedEntityStatus convertHealthStatus(String healthState) {
    switch (healthState.toLowerCase()) {
      case "critical":
        return ManagedEntityStatus.RED;
      case "major":
        return ManagedEntityStatus.YELLOW;
      case "ok":
        return ManagedEntityStatus.GREEN;
      default:
        return ManagedEntityStatus.GRAY;
    }
  }

  private String getProviderId(ManagedObjectReference healthUpdateManager) throws Exception {
    String providerId = queryProviderId(healthUpdateManager);
    if (providerId == null) {
      providerId = registerHealthUpdateProvider(healthUpdateManager);
    }
    return providerId;
  }

  private void addMonitored(ManagedObjectReference healthUpdateManager, String providerId,
      ManagedObjectReference hostSystem) throws NotFoundFaultMsg, RuntimeFaultFaultMsg {
    if (!this.vimPort.hasMonitoredEntity(healthUpdateManager, providerId, hostSystem)) {
      addMonitored(healthUpdateManager, providerId, Collections.singletonList(hostSystem));
    }
  }

  private void addMonitored(ManagedObjectReference healthUpdateManager, String providerId,
      List<ManagedObjectReference> hostSystem) throws NotFoundFaultMsg, RuntimeFaultFaultMsg {
    this.vimPort.addMonitoredEntities(healthUpdateManager, providerId, hostSystem);
  }

  private Map<String, ManagedObjectReference> getDataCenters()
      throws InvalidPropertyFaultMsg, RuntimeFaultFaultMsg {
    return this.getMOREFs.inContainerByType(this.serviceContent.getRootFolder(), DATA_CENTER);
  }

  private void handleNotMonitored(String providerId, ManagedObjectReference hostSystem,
      List<ManagedObjectReference> monitoredList) {
    try {
      if (!this.vimPort.hasMonitoredEntity(getHealthUpdateManager(), providerId, hostSystem)) {
        monitoredList.add(hostSystem);
      }
    } catch (NotFoundFaultMsg | RuntimeFaultFaultMsg e) {
      LOGGER.warn("has Monitored exception.", e);
    }
  }

  private AlarmSpec createAlarmSpec(String alarmName, String description,
      AlarmExpression expression) {
    AlarmSpec spec = new AlarmSpec();
    AlarmSetting alarmset = new AlarmSetting();
    alarmset.setReportingFrequency(300);
    alarmset.setToleranceRange(0);
    spec.setExpression(expression);
    spec.setName(alarmName);
    spec.setDescription(description);
    spec.setEnabled(true);
    spec.setSetting(alarmset);
    return spec;
  }

  private ManagedEntityStatus getManagedEntityStatus(String status) {
    switch (status.toLowerCase()) {
      case "critical":
        return ManagedEntityStatus.RED;
      case "warning":
        return ManagedEntityStatus.YELLOW;
      case "ok":
        return ManagedEntityStatus.GREEN;
      default:
        return ManagedEntityStatus.GRAY;
    }
  }

  private AlarmExpression creatEventAlarmExpression(ManagedEntityStatus status,
      String eventType, String eventTypeId, String resumeEventTypeId) {
    OrAlarmExpression orExpression = new OrAlarmExpression();

    EventAlarmExpression e1 = new EventAlarmExpression();
    e1.setStatus(status);
    e1.setEventType(eventType);
    e1.setEventTypeId(eventTypeId);
    e1.setObjectType(ConnectedVim.HOST_SYSTEM);

    // resume alarm
    EventAlarmExpression e2 = new EventAlarmExpression();
    e2.setStatus(getManagedEntityStatus("ok"));
    e2.setEventType(eventType);
    e2.setEventTypeId(resumeEventTypeId);
    e2.setObjectType(ConnectedVim.HOST_SYSTEM);

    orExpression.getExpression().add(e1);
    orExpression.getExpression().add(e2);

    return orExpression;
  }

  private ManagedObjectReference getHealthUpdateManager() {
    return this.serviceContent.getHealthUpdateManager();
  }

  /**
   * get provider id, register one if it doesn't exist
   */
  private String registerAndGetProviderId(ManagedObjectReference healthUpdateManager)
      throws RuntimeFaultFaultMsg,
      NotFoundFaultMsg {
    String providerId = queryProviderId(healthUpdateManager);
    if (providerId == null) {
      providerId = registerHealthUpdateProvider(healthUpdateManager);
    }
    return providerId;
  }

  /**
   * get providerId by providerName
   */
  private String queryProviderId(ManagedObjectReference healthUpdateManager)
      throws RuntimeFaultFaultMsg, NotFoundFaultMsg {
    String providerId = null;
    List<String> providerIdList = this.vimPort.queryProviderList(healthUpdateManager);
    for (String it : providerIdList) {
      String providerName = this.vimPort.queryProviderName(healthUpdateManager, it);
      if (this.providerName.equals(providerName)) {
        providerId = it;
        LOGGER.info("exist providerId: " + providerId);
      } else if (providerName.startsWith(providerNamePrefix)) {
        LOGGER.info("unregister health update provider, providerName: " + providerName);
        unregisterHealthUpdateProvider(healthUpdateManager, it);
      }
    }
    return providerId;
  }

  private boolean unregisterHealthUpdateProvider(ManagedObjectReference healthUpdateManager,
      String providerId) {
    int count = 0;
    try {
      count = reconfigureClusterProvider(providerId, false);
      LOGGER.info("Modified the configured number of clusters, count: " + count);
    } catch (Exception e) {
      LOGGER.warn("reconfigureClusterProvider Exception, errorMsg: " + e.getMessage());
    }
    // You need to keep some time waiting for the cluster configuration to complete.
    int maxFrequency = count > 0 ? 3 : 1;
    for (int i = 0; i < maxFrequency; i++) {
      try {
        if (count > 0) {
          Thread.sleep(1000L);
        }
        this.vimPort.unregisterHealthUpdateProvider(healthUpdateManager, providerId);
        LOGGER.info("unregister health update provider success, providerId: " + providerId);
        return true;
      } catch (Exception e) {
        LOGGER.warn(String.format(
            "unregister health update provider fail, providerId: %s, errorMsg: %s, frequency: %s",
            providerId, e.getMessage(), i + 1));
      }
    }
    return false;
  }

  private String registerHealthUpdateProvider(ManagedObjectReference healthUpdateManager) throws
      RuntimeFaultFaultMsg {
    LOGGER.info("register health update provider.");
    List<HealthUpdateInfo> healthUpdateInfos = defaultHealthUpdateInfos();
    String providerId = this.vimPort
        .registerHealthUpdateProvider(healthUpdateManager, this.providerName,
            healthUpdateInfos);
    LOGGER.info("new providerId: " + providerId);
    return providerId;
  }

  private List<HealthUpdateInfo> defaultHealthUpdateInfos() {
    List<HealthUpdateInfo> healthUpdateInfos = new ArrayList<>();
    for (HealthUpdateInfoComponentType huict : HealthUpdateInfoComponentType.values()) {
      HealthUpdateInfo healthUpdateInfo = new HealthUpdateInfo();
      healthUpdateInfo.setComponentType(huict.value());
      healthUpdateInfo.setId(huict.name());
      healthUpdateInfo.setDescription(huict.value() + " was failure.");
      healthUpdateInfos.add(healthUpdateInfo);
    }
    return healthUpdateInfos;
  }

  /**
   * Configure the Cluster to Enable the Proactive HA Provider
   *
   * @param providerId Proactive HA Provider
   * @param enable Whether to enable
   * @return Modified the configured number of clusters.
   */
  private int reconfigureClusterProvider(String providerId, boolean enable)
      throws InvalidPropertyFaultMsg, RuntimeFaultFaultMsg, NoSuchMethodException, IllegalAccessException,
      InvocationTargetException {
    int count = 0;
    LOGGER.info("reconfigureClusterProvider, provider: " + providerId + ", enable: " + enable);
    Map<String, ManagedObjectReference> clusters = this.getMOREFs
        .inContainerByType(this.serviceContent.getRootFolder(), CLUSTER);
    LOGGER.info("clusters size: " + clusters.size());
    for (ManagedObjectReference cluster : clusters.values()) {
      ClusterConfigInfoEx clusterConfigInfoEx = (ClusterConfigInfoEx) this
          .getDynamicProperty(cluster, "configurationEx");
      ClusterInfraUpdateHaConfigInfo infraUpdateHaConfig = clusterConfigInfoEx
          .getInfraUpdateHaConfig();
      if (infraUpdateHaConfig.getProviders().contains(providerId) == enable) {
        LOGGER.info("No need to configure, cluster: " + cluster.getValue());
        continue;
      }
      if (enable) {
        infraUpdateHaConfig.getProviders().add(providerId);
      } else {
        infraUpdateHaConfig.getProviders().remove(providerId);
      }

      ClusterConfigSpecEx clusterConfigSpecEx = new ClusterConfigSpecEx();
      clusterConfigSpecEx.setInfraUpdateHaConfig(infraUpdateHaConfig);
      this.vimPort.reconfigureComputeResourceTask(cluster, clusterConfigSpecEx, true);
      LOGGER.info("reconfigureClusterProvider success, cluster: " + cluster.getValue());
      count++;
    }
    return count;
  }

  private Object getDynamicProperty(ManagedObjectReference mor, String propertyName) throws
      InvalidPropertyFaultMsg, RuntimeFaultFaultMsg, NoSuchMethodException, InvocationTargetException,
      IllegalAccessException {
    ObjectContent[] objContent = getObjectProperties(mor, new String[]{propertyName});

    Object propertyValue = null;
    if (objContent != null) {
      List<DynamicProperty> listdp = objContent[0].getPropSet();
      if (listdp != null) {
        Object dynamicPropertyVal = listdp.get(0).getVal();
        String dynamicPropertyName = dynamicPropertyVal.getClass().getName();
        if (dynamicPropertyName.contains("ArrayOf")) {
          String methodName = dynamicPropertyName.substring(
              dynamicPropertyName.indexOf("ArrayOf") + "ArrayOf".length(),
              dynamicPropertyName.length());
          if (methodExists(dynamicPropertyVal, "get" + methodName)) {
            methodName = "get" + methodName;
          } else {
            methodName = "get_" + methodName.toLowerCase();
          }
          Method getMorMethod = dynamicPropertyVal.getClass()
              .getDeclaredMethod(methodName, (Class[]) null);
          propertyValue = getMorMethod.invoke(dynamicPropertyVal, (Object[]) null);
        } else if (dynamicPropertyVal.getClass().isArray()) {
          propertyValue = dynamicPropertyVal;
        } else {
          propertyValue = dynamicPropertyVal;
        }
      }
    }
    return propertyValue;
  }

  /**
   * Determines of a method 'methodName' exists for the Object 'obj'.
   *
   * @param obj The Object to check
   * @param methodName The method name
   * @return true if the method exists, false otherwise
   */
  @SuppressWarnings("rawtypes")
  private boolean methodExists(Object obj, String methodName) throws NoSuchMethodException {
    boolean exists = false;
    Method method = obj.getClass().getMethod(methodName, (Class[]) null);
    if (method != null) {
      exists = true;
    }
    return exists;
  }

  /**
   * Retrieve contents for a single object based on the property collector registered with the
   * service.
   *
   * @param mobj Managed Object Reference to get contents for
   * @param properties names of properties of object to retrieve
   * @return retrieved object contents
   */
  private ObjectContent[] getObjectProperties(ManagedObjectReference mobj, String[] properties)
      throws InvalidPropertyFaultMsg, RuntimeFaultFaultMsg {
    if (mobj == null) {
      return null;
    }

    PropertyFilterSpec spec = new PropertyFilterSpec();
    spec.getPropSet().add(new PropertySpec());
    PropertySpec propertySpec = spec.getPropSet().get(0);
    if ((properties == null || properties.length == 0)) {
      propertySpec.setAll(Boolean.TRUE);
    } else {
      propertySpec.setAll(Boolean.FALSE);
      propertySpec.getPathSet().addAll(Arrays.asList(properties));
    }
    propertySpec.setType(mobj.getType());
    spec.getObjectSet().add(new ObjectSpec());
    ObjectSpec objectSpec = spec.getObjectSet().get(0);
    objectSpec.setObj(mobj);
    objectSpec.setSkip(Boolean.FALSE);
    List<PropertyFilterSpec> listpfs = new ArrayList<>(1);
    listpfs.add(spec);
    List<ObjectContent> listobjcont = retrievePropertiesAllObjects(listpfs);
    return listobjcont.toArray(new ObjectContent[0]);
  }

  private ExtendedEvent createEvent(String eventTypeID, String haHostSystem)
      throws RuntimeFaultFaultMsg {
    ExtendedEvent event = new ExtendedEvent();
    event.setChainId(1001);
    event.setKey(1001);
    event.setCreatedTime(this.vimPort.currentTime(getServiceInstanceReference()));
    event.setMessage("");
    event.setUserName(this.username);
    event.setEventTypeId(eventTypeID);
    event.setManagedObject(getHostSystem(haHostSystem));
    return event;
  }

  private ManagedObjectReference getHostSystem(String value) {
    ManagedObjectReference host = new ManagedObjectReference();
    host.setType(HOST_SYSTEM);
    host.setValue(value);
    return host;
  }

  /**
   * Uses the new RetrievePropertiesEx method to emulate the now deprecated RetrieveProperties
   * method
   */
  private List<ObjectContent> retrievePropertiesAllObjects(List<PropertyFilterSpec> listpfs) throws
      InvalidPropertyFaultMsg, RuntimeFaultFaultMsg {
    ManagedObjectReference propCollectorRef = serviceContent.getPropertyCollector();
    RetrieveOptions propObjectRetrieveOpts = new RetrieveOptions();

    List<ObjectContent> listobjcontent = new ArrayList<>();

    RetrieveResult rslts = this.vimPort
        .retrievePropertiesEx(propCollectorRef, listpfs, propObjectRetrieveOpts);
    if (rslts != null && rslts.getObjects() != null && !rslts.getObjects().isEmpty()) {
      listobjcontent.addAll(rslts.getObjects());
    }
    String token = null;
    if (rslts != null && rslts.getToken() != null) {
      token = rslts.getToken();
    }
    while (token != null && !token.isEmpty()) {
      rslts = this.vimPort.continueRetrievePropertiesEx(propCollectorRef, token);
      token = null;
      if (rslts != null) {
        token = rslts.getToken();
        if (rslts.getObjects() != null && !rslts.getObjects().isEmpty()) {
          listobjcontent.addAll(rslts.getObjects());
        }
      }
    }
    return listobjcontent;
  }

}
