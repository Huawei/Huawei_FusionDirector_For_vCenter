package com.huawei.fdvcenterpluginui.task;

import com.huawei.fdvcenterpluginui.entity.FusionDirector;
import com.huawei.fdvcenterpluginui.services.FDAlarmService;
import com.huawei.fdvcenterpluginui.services.FDHostService;
import com.huawei.fdvcenterpluginui.utils.VCClientUtils;
import java.util.ArrayList;
import java.util.List;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component("SubscriptionKeepAliveJob")
public class SubscriptionKeepAliveTask {

  private static final Log LOGGER = LogFactory.getLog(SubscriptionKeepAliveTask.class);

  @Autowired
  private FDAlarmService fdAlarmService;

  @Autowired
  private FDHostService fdHostService;

  @Scheduled(fixedDelay = 15 * 60 * 1000L)
  public void resubscribe() {
    if (VCClientUtils.isHtml5Client()) {
      LOGGER.info("Do not resubscribing on H5 version");
      return;
    }
    synchronized (RefreshKeyTask.class) {
      List<FusionDirector> fusionDirectorList = fdHostService
          .getFusionDirectorList(null, -1, -1, false, false);
      LOGGER.info("Start to resubscribe event...");
      List<FusionDirector> fusionDirectors = new ArrayList<>();
      for (FusionDirector fusionDirector : fusionDirectorList) {
        if (fusionDirector.getHaStatus() > 0 || fusionDirector.getAlarmStatus() > 0) {
          fusionDirectors.add(fusionDirector);
        }
      }
      LOGGER.info("Resubscribe event for " + fusionDirectors.size() + " FDs...");
      if (!fusionDirectors.isEmpty()) {
        fdAlarmService.subscribe(fusionDirectors);
      }
    }
  }
}
