package com.huawei.fdvcenterpluginui.task;

import com.huawei.fdvcenterpluginui.entity.FusionDirector;
import com.huawei.fdvcenterpluginui.entity.VCenterInfo;
import com.huawei.fdvcenterpluginui.services.FDHostService;
import com.huawei.fdvcenterpluginui.services.FDSettingService;
import com.huawei.fdvcenterpluginui.utils.CipherUtils;
import com.huawei.fdvcenterpluginui.utils.FileUtils;
import com.huawei.fdvcenterpluginui.utils.VCClientUtils;
import java.util.List;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component("RefreshKeyJob")
public class RefreshKeyTask {

  private static final Log LOGGER = LogFactory.getLog(RefreshKeyTask.class);

  @Autowired
  private FDHostService fdHostService;

  @Autowired
  private FDSettingService fdSettingService;

  //  @Scheduled(cron = "0 0 0/1 * * ?")
//  @Scheduled(cron = "0 0/5 * * * ?")
  @Scheduled(cron = "0 0 0 1 * ?")
  public void job1() {
    if (VCClientUtils.isHtml5Client()) {
      LOGGER.info("Do not refresh keys on H5 version");
      return;
    }
    synchronized (RefreshKeyTask.class) {
      LOGGER.info("Refresh the key...");
      try {
        VCenterInfo vCenterInfo = fdSettingService.getVCenterInfo(false);
        if (vCenterInfo == null) {
          LOGGER.info("No vCenter settings");
          return;
        }
        List<FusionDirector> fdList = fdHostService
            .getFusionDirectorList(null, -1, -1, false, false);
        String randomKey = CipherUtils.getSafeRandomToString(CipherUtils.KEY_SIZE);
        String workKey = CipherUtils.aesEncode(randomKey, CipherUtils.getBaseKey());
        FileUtils.saveKey(workKey, FileUtils.WORK_FILE_NAME);
        fdSettingService.updateVCenterInfo(vCenterInfo, false, false);
        LOGGER.info("FDs: " + fdList);
        for (FusionDirector fusionDirector : fdList) {
          fdHostService.updateFusionDirectorAllPassword(fusionDirector);
        }
      } catch (Exception e) {
        LOGGER.error(e.getMessage(), e);
      }
    }
  }

}
