package com.huawei.fdvcenterpluginui.services;

import com.vmware.vise.usersession.UserSession;
import com.vmware.vise.usersession.UserSessionService;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * Created by hyuan on 2018/10/31.
 */
public class SessionServiceImpl implements SessionService {

  @Autowired
  private UserSessionService userSessionService;

  @Override
  public UserSession getUserSession() {
    return userSessionService.getUserSession();
  }

  public void setUserSessionService(UserSessionService userSessionService) {
    this.userSessionService = userSessionService;
  }
}
