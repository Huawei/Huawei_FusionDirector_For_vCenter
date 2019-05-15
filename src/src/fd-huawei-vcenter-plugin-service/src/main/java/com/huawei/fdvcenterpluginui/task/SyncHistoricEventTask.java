package com.huawei.fdvcenterpluginui.task;

import com.huawei.fdvcenterpluginui.entity.FusionDirector;
import com.huawei.fdvcenterpluginui.services.FDAlarmService;
import com.huawei.fdvcenterpluginui.services.FDHostService;
import com.huawei.fdvcenterpluginui.utils.VCClientUtils;
import java.util.List;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component("SyncHistoricEventTask")
public class SyncHistoricEventTask {

  private static final Log LOGGER = LogFactory.getLog(SyncHistoricEventTask.class);

  @Autowired
  private FDHostService fdHostService;

  @Autowired
  private FDAlarmService fdAlarmService;

  @Scheduled(cron = "0 0 0/4 * * ?")
  public void job() {
    if (VCClientUtils.isHtml5Client()) {
      LOGGER.info("Do not sync historical events on H5 version");
      return;
    }
    synchronized (RefreshKeyTask.class) {
      LOGGER.info("Sync historic events...");
      List<FusionDirector> fdList = fdHostService.getFusionDirectorList(null, -1, -1, false, false);
      for (FusionDirector fusionDirector : fdList) {
        fdAlarmService.syncHistoricEvents(fusionDirector.getHostIp());
      }
    }
  }
}
