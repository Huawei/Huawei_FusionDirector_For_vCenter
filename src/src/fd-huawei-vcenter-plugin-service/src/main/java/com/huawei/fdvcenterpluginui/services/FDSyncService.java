package com.huawei.fdvcenterpluginui.services;

import com.huawei.fdvcenterpluginui.entity.FDSyncServer;
import java.util.List;

public interface FDSyncService {

  List<FDSyncServer> getSyncServers();

  void syncServers();

  List<FDSyncServer> loadSyncServer();

  FDSyncServer loadSyncServer(String hostSystem);

  /**
   * @param deviceId
   * @return deviceId matches deviceId or parentDeviceId
   */
  List<FDSyncServer> loadSyncServersByDeviceId(String deviceId);
}
