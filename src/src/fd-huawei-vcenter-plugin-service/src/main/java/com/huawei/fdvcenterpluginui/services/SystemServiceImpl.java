package com.huawei.fdvcenterpluginui.services;

import com.huawei.fdvcenterpluginui.dao.DataLifeCycleDao;
import java.util.Collection;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;

/**
 * Created by hyuan on 2018/10/31.
 */
public class SystemServiceImpl implements SystemService {

  private static final Log LOGGER = LogFactory.getLog(SystemServiceImpl.class);

  @Autowired
  private ApplicationContext applicationContext;

  @Override
  public void initDB() {
    try {
      Collection<DataLifeCycleDao> initDBDao = applicationContext
          .getBeansOfType(DataLifeCycleDao.class).values();
      LOGGER.info("Init DB in " + initDBDao);
      for (DataLifeCycleDao dao : initDBDao) {
        dao.initTables();
      }
      LOGGER.info("Init DB complete");
    } catch (Exception e) {
      LOGGER.error(e.getMessage(), e);
    }
  }

}
