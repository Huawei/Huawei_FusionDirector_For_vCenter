package com.huawei.fdvcenterpluginui.services;

import com.huawei.fdvcenterpluginui.entity.FusionDirector;
import com.huawei.fdvcenterpluginui.utils.ThumbprintsUtils;
import com.huawei.fdvcenterpluginui.utils.VCClientUtils;
import java.util.List;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;

/**
 * Created by hyuan on 2018/10/31.
 */
public class InstantiationBeanServiceImpl implements
    ApplicationListener<ContextRefreshedEvent>, InstantiationBeanService {

  private static final Log LOGGER = LogFactory.getLog(InstantiationBeanServiceImpl.class);

  @Autowired
  private SystemService systemService;

  @Autowired
  private FDSettingService fdSettingService;

  @Autowired
  private FDAlarmService fdAlarmService;

  @Autowired
  private FDHostService fdHostService;

  @Override
  public void onApplicationEvent(ContextRefreshedEvent event) {
    init();
  }

  @Override
  public void init() {
    try {
      systemService.initDB();
      ThumbprintsUtils.updateContextTrustThumbprints(fdSettingService.getThumbprints());

      LOGGER.info("Current web client: " + VCClientUtils.getWebClient());
      LOGGER.info("Is HTML5 client: " + VCClientUtils.isHtml5Client());
      LOGGER.info("Is Flash client: " + VCClientUtils.isFlashClient());
      LOGGER.info("Is vCenter support HA: " + fdHostService.isSupportHA());

      // start alarm handling
      fdAlarmService.start();

      if (VCClientUtils.isFlashClient()) {
        List<FusionDirector> fdList = fdHostService.getFusionDirectorList(null, -1, -1, false, false);
        for (FusionDirector fusionDirector : fdList) {
          fdAlarmService.syncHistoricEvents(fusionDirector.getHostIp());
        }
      }
    } catch (Exception e) {
      LOGGER.warn(e);
    }
  }

}
