package com.huawei.fdvcenterpluginui.interceptor;

import com.huawei.fdvcenterpluginui.services.FDSettingService;
import com.huawei.fdvcenterpluginui.services.SessionService;
import com.huawei.fdvcenterpluginui.utils.ThumbprintsUtils;
import com.vmware.vise.usersession.ServerInfo;
import com.vmware.vise.usersession.UserSession;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.ApplicationContext;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.View;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;
import org.springframework.web.servlet.view.ContentNegotiatingViewResolver;

/**
 * Created by hyuan on 2018/10/31.
 */
public class SessionHandlerInterceptor extends HandlerInterceptorAdapter {

  protected SessionService sessionService;

  @Autowired
  private FDSettingService fdSettingService;

  private static final Log LOGGER = LogFactory.getLog(SessionHandlerInterceptor.class);

  private static boolean isViewResolverLoaded = false;

  private static boolean isVcenterThumbprintLoaded = false;

  @Autowired
  public SessionHandlerInterceptor(@Qualifier("sessionService") SessionService sessionService) {
    this.sessionService = sessionService;
  }

  public SessionHandlerInterceptor() {
    sessionService = null;
  }

  @Autowired
  private ApplicationContext applicationContext;

  private void initViewResolver() {
    LOGGER.info("Setting view resolver is started");
    isViewResolverLoaded = true;
    try {
      ContentNegotiatingViewResolver viewResolver = applicationContext
          .getBean(ContentNegotiatingViewResolver.class);
      if (viewResolver == null) {
        LOGGER.warn("No ContentNegotiatingViewResolver exists");
        return;
      }
      List<View> defaultViews = new ArrayList<>();

      View defaultView = null;
      try {
        defaultView = (View) Class
            .forName("org.springframework.web.servlet.view.json.MappingJacksonJsonView")
            .newInstance();
      } catch (Throwable throwable) {
        defaultView = (View) Class
            .forName("org.springframework.web.servlet.view.json.MappingJackson2JsonView")
            .newInstance();
      }
      defaultViews.add(defaultView);
      viewResolver.setDefaultViews(defaultViews);
      LOGGER.info("View resolver has been loaded");
    } catch (Throwable throwable) {
      LOGGER.warn(throwable.getMessage(), throwable);
    }
  }

  @Override
  public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
      throws IOException {
    if (!isViewResolverLoaded) {
      initViewResolver();
    }

    if (request.getRequestURI().endsWith("/services/fd/uninstall")
        && RequestMethod.POST.toString().equalsIgnoreCase(request.getMethod())) {
      return true;
    } else if (request.getRequestURI().endsWith("/services/fd/event")
        && RequestMethod.POST.toString().equalsIgnoreCase(request.getMethod())) {
      // base auth validation in service
      return true;
    } else if (sessionService.getUserSession() == null) {
      response.getWriter()
          .write("{\"code\":\"-90003\",\"data\":null,\"description\":\"Auth failed\"}");
      return false;
    } else {
      int endIndex = request.getRequestURL().length() - request.getPathInfo().length() + 1;
      String url = request.getRequestURL().substring(0, endIndex);
      LOGGER.info(
          "current user:" + sessionService.getUserSession().userName + "   current domain:" + url);
    }

    // add vCenter thumbprints
    if (!isVcenterThumbprintLoaded) {
      try {
        UserSession userSession = sessionService.getUserSession();
        if (userSession != null) {
          ServerInfo[] serverInfos = userSession.serversInfo;
          Set<String> newThumbprints = new HashSet<>();
          for (ServerInfo serverInfo : serverInfos) {
            String serverThumbprint = serverInfo.thumbprint.replaceAll(":", "").toLowerCase();
            if (serverInfo != null && !ThumbprintsUtils.getRuntimeThumbprints()
                .contains(serverThumbprint)) {
              newThumbprints.add(serverThumbprint);
            }
          }
          if (!newThumbprints.isEmpty()) {
            LOGGER.info("Saving server thumbprints, count: " + newThumbprints.size());
            fdSettingService
                .saveThumbprints(newThumbprints.toArray(new String[newThumbprints.size()]));
          }
          isVcenterThumbprintLoaded = true;
        }
      } catch (Exception e) {
        LOGGER.error("Failed to add vCenter thumbprints", e);
      }
    }
    return true;
  }

  @Override
  public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
      ModelAndView modelAndView) {
  }

  @Override
  public void afterCompletion(HttpServletRequest request, HttpServletResponse response,
      Object handler, Exception ex) {
  }

  public SessionService getSessionService() {
    return sessionService;
  }

  public void setSessionService(SessionService sessionService) {
    this.sessionService = sessionService;
  }

}