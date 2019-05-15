package com.huawei.fdvcenterpluginui.task;

import com.huawei.fdvcenterpluginui.services.FDSyncService;
import com.huawei.fdvcenterpluginui.utils.VCClientUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component("SyncServerJob")
public class SyncServerTask {

  private static final Log LOGGER = LogFactory.getLog(SyncServerTask.class);

  @Autowired
  private FDSyncService fdSyncService;

  @Scheduled(fixedDelay = 30 * 60 * 1000L)
  public void syncServers() {
    if (VCClientUtils.isHtml5Client()) {
      LOGGER.info("Do not sync servers on H5 version");
      return;
    }
    synchronized (RefreshKeyTask.class) {
      LOGGER.info("Sync servers...");
      fdSyncService.syncServers();
    }
  }
}
