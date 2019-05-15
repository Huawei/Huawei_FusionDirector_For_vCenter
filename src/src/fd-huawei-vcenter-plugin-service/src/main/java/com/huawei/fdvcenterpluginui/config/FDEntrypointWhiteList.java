package com.huawei.fdvcenterpluginui.config;

import java.util.Collection;
import java.util.Collections;
import java.util.HashSet;

public class FDEntrypointWhiteList {

  private static final Collection<String> GET_EP = new HashSet<>(); // fully match
  private static final Collection<String> POST_EP = new HashSet<>();
  private static final Collection<String> DELETE_EP = new HashSet<>();
  private static final Collection<String> PATCH_EP = new HashSet<>();

  private static final Collection<String> GET_EPP = new HashSet<>(); // regex match
  private static final Collection<String> POST_EPP = new HashSet<>();
  private static final Collection<String> DELETE_EPP = new HashSet<>();
  private static final Collection<String> PATCH_EPP = new HashSet<>();

  static {
    GET_EP.add("/rich/ServerProfiles");
    GET_EP.add("/rich/ServerHardwareModels");
    GET_EP.add("/rich/ServerProfiles/Actions/Device.Query");
    GET_EP.add("/rich/DeployModels");
    GET_EP.add("/rich/Images");
    GET_EP.add("/rich/DeployService/Actions/QueryOption.Enums");
    GET_EP.add("/rich/Tasks");
    GET_EP.add("/rich/Groups");
    GET_EP.add("/rich/Nodes");
    GET_EP.add("/rich/Enclosures");
    GET_EP.add("/rich/EventService/Alarms");
    GET_EP.add("/rich/Appliance/Version");
    GET_EP.add("/rich/NodeGroups");
    GET_EP.add("/rich/EventService/Events");
    GET_EP.add("/rich/UpgradeService/BaseLine");
    GET_EP.add("/rich/UpgradeService/Repository");
    GET_EP.add("/rich/UpgradeService/UpgradePlan");
    GET_EP.add("/rich/UpgradeService/Actions/UpgradeService.UpgradeableDeviceInfo");
    GET_EP.add("/rich/UpgradeService/DeviceVersion/RackDevices");
    GET_EP.add("/rich/UpgradeService/ProductType");
    GET_EP.add("/rich/UpgradeService/DeviceVersion/EnclosureDevices");
    GET_EP.add("/rich/UpgradeService/Network");

    GET_EPP.add("/rich/ServerProfiles/[a-zA-Z0-9\\-]+");
    GET_EPP.add("/rich/ServerHardwareModels/[a-zA-Z0-9\\-]+");
    GET_EPP.add("/rich/DeployModels/[a-zA-Z0-9\\-]+");
    GET_EPP.add("/rich/DeployModels/[a-zA-Z0-9\\-]+/Devices");
    GET_EPP.add("/rich/Images/[a-zA-Z0-9\\-]+");
    GET_EPP.add("/rich/Tasks/[a-zA-Z0-9\\-]+");
    GET_EPP.add("/rich/Tasks/[a-zA-Z0-9\\-]+/SubTasks");
    GET_EPP.add("/rich/Nodes/[a-zA-Z0-9\\-]+");
    GET_EPP.add("/rich/Enclosures/[a-zA-Z0-9\\-]+");
    GET_EPP.add("/rich/Nodes/[a-zA-Z0-9\\-]+/Processor");
    GET_EPP.add("/rich/Nodes/[a-zA-Z0-9\\-]+/Memory");
    GET_EPP.add("/rich/Nodes/[a-zA-Z0-9\\-]+/Power");
    GET_EPP.add("/rich/Nodes/[a-zA-Z0-9\\-]+/Thermal");
    GET_EPP.add("/rich/Nodes/[a-zA-Z0-9\\-]+/Storage/Drive");
    GET_EPP.add("/rich/Nodes/[a-zA-Z0-9\\-]+/Storage/Drive/[a-zA-Z0-9\\-]+");
    GET_EPP.add("/rich/Nodes/[a-zA-Z0-9\\-]+/NetworkAdapter");
    GET_EPP.add("/rich/Nodes/[a-zA-Z0-9\\-]+/PCIe");
    GET_EPP.add("/rich/Nodes/[a-zA-Z0-9\\-]+/Storage/RaidCard");
    GET_EPP.add("/rich/Nodes/[a-zA-Z0-9\\-]+/Storage/RaidCard/[a-zA-Z0-9\\-]+");
    GET_EPP.add("/rich/SwitchNodes/[a-zA-Z0-9\\-]+");
    GET_EPP.add("/rich/Nodes/[a-zA-Z0-9\\-]+/Catalogue");
    GET_EPP.add("/rich/UpgradeService/UpgradePlan/[a-zA-Z0-9\\-]+");

    POST_EP.add("/rich/ServerProfiles/Actions/Device.Query");
    POST_EP.add("/rich/ServerProfiles/Actions/ServerProfile.BatchDelete");
    POST_EP.add("/rich/Nodes/Actions/Profile.Binding");
    POST_EP.add("/rich/Nodes/Actions/Profile.Unbinding");
    POST_EP.add("/rich/ServerProfiles/Actions/ServerProfile.Deploy");
    POST_EP.add("/rich/ServerProfiles");
    POST_EP.add("/rich/DeployModels/Actions/DeployModel.Query");
    POST_EP.add("/rich/DeployService/Actions/QueryOption.OsInfo");
    POST_EP.add("/rich/Images/Actions/Image.Query");
    POST_EP.add("/rich/DeployModels");
    POST_EP.add("/rich/DeployModels/Actions/DeployModel.Deploy");
    POST_EP.add("/rich/DeployService/Actions/QueryOption.OsInfo");
    POST_EP.add("/rich/Images");
    POST_EP.add("/rich/Nodes/Actions/ComputerSystem.Reset");
    POST_EP.add("/EventService/Subscriptions");
    POST_EP.add("/rich/Images/Actions/Image.Import");
    POST_EP.add("/rich/UpgradeService/Repository/Check");
    POST_EP.add("/rich/UpgradeService/Action/ImportFile");
    POST_EP.add("/rich/UpgradeService/BaseLine");
    POST_EP.add("/rich/UpgradeService/Actions/Package.Import");
    POST_EP.add("/rich/UpgradeService/UpgradePlan");
    POST_EP.add("/rich/UpgradeService/UpgradePlan/CheckName");
    POST_EP.add("/rich/UpgradeService/UpgradePlan/Actions/UpgradePlan.CheckGroup");
    POST_EP.add("/rich/UpgradeService/Actions/UpgradeService.UpgradeableDeviceInfo");
    POST_EP.add("/rich/UpgradeService/DeviceVersion/Actions/UpgradeService.ActiveFireware");
    POST_EP.add("/rich/UpgradeService/Actions/UpgradeService.UpgradeableEnclosureInfo");
    POST_EP.add("/rich/UpgradeService/Actions/UpgradeService.DeviceFirmwareInfo");
    POST_EPP.add("/rich/UpgradeService/UpgradePlan/[a-zA-Z0-9\\-]+/Actions/UpgradePlan.Enable");

    DELETE_EPP.add("/rich/ServerProfiles/[a-zA-Z0-9\\-]+");
    DELETE_EPP.add("/rich/DeployModels/[a-zA-Z0-9\\-]+");
    DELETE_EPP.add("/rich/Images/[a-zA-Z0-9\\-]+");
    DELETE_EPP.add("/rich/Tasks/[a-zA-Z0-9\\-]+");
    DELETE_EPP.add("/EventService/Subscriptions/\\d+");
    DELETE_EPP.add("/rich/UpgradeService/BaseLine/[a-zA-Z0-9\\-]+");
    DELETE_EPP.add("/rich/UpgradeService/Repository/[a-zA-Z0-9\\-]+");
    DELETE_EPP.add("/rich/UpgradeService/UpgradePlan/[a-zA-Z0-9\\-]+");

    PATCH_EP.add("/rich/UpgradeService/Network");

    PATCH_EPP.add("/rich/ServerProfiles/[a-zA-Z0-9\\-]+");
    PATCH_EPP.add("/rich/DeployModels/[a-zA-Z0-9\\-]+");
    PATCH_EPP.add("/rich/Images/[a-zA-Z0-9\\-]+");
    PATCH_EPP.add("/EventService/Subscriptions/\\d+");
    PATCH_EPP.add("/rich/UpgradeService/BaseLine/[a-zA-Z0-9\\-]+");
    PATCH_EPP.add("/rich/UpgradeService/UpgradePlan/[a-zA-Z0-9\\-]+");
  }

  public static boolean isEntrypointGranted(String method, String entrypoint) {
    entrypoint = stripParam(entrypoint);
    if (getEps(method).contains(entrypoint)) {
      return true;
    }
    Collection<String> epps = getEpps(method);
    for (String epp : epps) {
      if (entrypoint.matches(epp)) {
        return true;
      }
    }
    return false;
  }

  private static String stripParam(String entrypoint) {
    if (entrypoint.contains("?")) {
      entrypoint = entrypoint.substring(0, entrypoint.indexOf("?"));
    }
    return entrypoint;
  }

  private static Collection<String> getEps(String method) {
    switch (method.toUpperCase()) {
      case "GET":
        return GET_EP;
      case "POST":
        return POST_EP;
      case "DELETE":
        return DELETE_EP;
      case "PATCH":
        return PATCH_EP;
      default:
        return Collections.EMPTY_LIST;
    }
  }

  private static Collection<String> getEpps(String method) {
    switch (method.toUpperCase()) {
      case "GET":
        return GET_EPP;
      case "POST":
        return POST_EPP;
      case "DELETE":
        return DELETE_EPP;
      case "PATCH":
        return PATCH_EPP;
      default:
        return Collections.EMPTY_LIST;
    }
  }

}
