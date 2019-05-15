package com.huawei.fdvcenterpluginui.task;

import com.huawei.fdvcenterpluginui.services.FDAlarmService;
import com.huawei.fdvcenterpluginui.utils.VCClientUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component("SyncAlarmEventJob")
public class SyncAlarmEventTask {

  private static final Log LOGGER = LogFactory.getLog(SyncAlarmEventTask.class);

  @Autowired
  private FDAlarmService fdAlarmService;

  @Scheduled(cron = "0 0 3 * * ?")
  public void job() {
    if (VCClientUtils.isHtml5Client()) {
      LOGGER.info("Do not sync alarm event on H5 version");
      return;
    }
    synchronized (RefreshKeyTask.class) {
      LOGGER.info("Sync alarm events...");
      fdAlarmService.syncAlarmEvents();
    }
  }
}
