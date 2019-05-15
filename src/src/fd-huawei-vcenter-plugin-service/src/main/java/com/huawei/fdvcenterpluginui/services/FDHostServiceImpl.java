package com.huawei.fdvcenterpluginui.services;

import com.huawei.fdvcenterpluginui.config.FDEntrypointWhiteList;
import com.huawei.fdvcenterpluginui.dao.FDBaseDao;
import com.huawei.fdvcenterpluginui.dao.FDHostDao;
import com.huawei.fdvcenterpluginui.entity.FusionDirector;
import com.huawei.fdvcenterpluginui.entity.VCenterInfo;
import com.huawei.fdvcenterpluginui.exception.ApiIllegalAccessException;
import com.huawei.fdvcenterpluginui.exception.NoUploadFileException;
import com.huawei.fdvcenterpluginui.exception.VcenterException;
import com.huawei.fdvcenterpluginui.exception.VersionNotSupportException;
import com.huawei.fdvcenterpluginui.exception.WrongUserPwdException;
import com.huawei.fdvcenterpluginui.task.RefreshKeyTask;
import com.huawei.fdvcenterpluginui.utils.CipherUtils;
import com.huawei.fdvcenterpluginui.utils.ConnectedVim;
import com.huawei.fdvcenterpluginui.utils.FDUtils;
import com.huawei.fdvcenterpluginui.utils.FileUtils;
import com.huawei.fdvcenterpluginui.utils.HttpRequestUtil;
import com.huawei.fdvcenterpluginui.utils.StringUtil;
import java.io.IOException;
import java.io.InputStream;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

public class FDHostServiceImpl implements FDHostService {

  private static final Log LOGGER = LogFactory.getLog(FDHostServiceImpl.class);

  private static final String FD_LOGIN_SERVICE_URL = "/SessionService/Sessions";

  private Boolean supportHA;

  @Autowired
  private ApplicationContext applicationContext;

  @Autowired
  private FDHostDao fdHostDao;

  @Autowired
  private FDAlarmService fdAlarmService;

  @Autowired
  private FDSyncService fdSyncService;

  @Autowired
  private FDSettingService fdSettingService;

  private ExecutorService backgroundExecutor = Executors.newSingleThreadExecutor();

  @Override
  public List<FusionDirector> getFusionDirectorList(String ip, int pageNo, int pageSize,
      boolean maskPwd, boolean getVersion) {
    synchronized (RefreshKeyTask.class) {
      List<FusionDirector> fdList = fdHostDao.getFusionDirectorList(ip, pageNo, pageSize);
      for (FusionDirector fusionDirector : fdList) {
        try {
          decrypt(fusionDirector);
          if (getVersion) {
            // version
            fusionDirector.setFdVersion(getFDVersion(fusionDirector));
          }
        } catch (Exception e) {
          LOGGER.error("Cannot get version " + fusionDirector, e);
        }
        if (maskPwd) {
          fusionDirector.setLoginPwd("");
          fusionDirector.setReservedStr2("");
        }
      }
      return fdList;
    }
  }

  @Override
  public int getFusionDirectorListCount(String ip) {
    return fdHostDao.getFusionDirectorListCount(ip);
  }

  @Override
  public int addFusionDirector(final FusionDirector fd) {
    synchronized (RefreshKeyTask.class) {
      checkAlarmUsernameDuplication(fd);
      encrypt(fd);
      int result = fdHostDao.addFusionDirector(fd);
      fdSyncService.syncServers();
      if (isAlarmOrHAEnabled(fd)) {
        decrypt(fd);
        if (fd.getHaStatus() > 0) {
          fdAlarmService.createProvider();
        }
        fdAlarmService.subscribe(Collections.singletonList(fd));

        if (fd.getAlarmStatus() > 0) {
          fdAlarmService.syncAlarmEvents();
          fdAlarmService.syncHistoricEvents(fd.getHostIp());
        } else {
          fdAlarmService.syncHistoricEvents(fd.getHostIp());
        }
      }
      return result;
    }
  }

  @Override
  public int updateFusionDirector(final FusionDirector fd) {
    synchronized (RefreshKeyTask.class) {
      checkAlarmUsernameDuplication(fd);
      FusionDirector oldFD = getFusionDirectorByIp(fd.getHostIp());
      if (isSubscribed(oldFD)) {
        fdAlarmService.unsubscribe(Collections.singletonList(oldFD));
      }
      boolean isAlarmNewEnabled = false;
      boolean isHANewEnabled = false;
      boolean isNewEnabled = false;
      if (isAlarmOrHAEnabled(fd)) {
        if (fd.getAlarmStatus() > 0 && oldFD.getAlarmStatus() < 1) {
          isAlarmNewEnabled = true;
        }
        if (fd.getHaStatus() > 0 && oldFD.getHaStatus() < 1) {
          isHANewEnabled = true;
        }
        if (oldFD.getAlarmStatus() < 1 && oldFD.getHaStatus() < 1) {
          isNewEnabled = true;
        }
        if (!StringUtils.hasText(fd.getReservedStr2())) {
          fd.setReservedStr2(oldFD.getReservedStr2());
        }
        if (fd.getHaStatus() > 0) {
          fdAlarmService.createProvider();
        }
        fdAlarmService.subscribe(Collections.singletonList(fd));
      }
      encrypt(fd);
      int result = fdHostDao.updateFusionDirector(fd);
      if (isNewEnabled) {
        fdSyncService.syncServers();
      }
      if (isAlarmNewEnabled || isHANewEnabled) {
        fdAlarmService.syncHistoricEvents(fd.getHostIp());
      }
      if (isAlarmNewEnabled) {
        fdAlarmService.syncAlarmEvents();
      }
      return result;
    }
  }

  @Override
  public int updateFusionDirectorAllPassword(FusionDirector fd) {
    synchronized (RefreshKeyTask.class) {
      encrypt(fd);
      return fdHostDao.updateFusionDirectorAllPassword(fd);
    }
  }

  @Override
  public int deleteFusionDirector(Integer[] ids) {
    synchronized (RefreshKeyTask.class) {
      for (Integer id : ids) {
        FusionDirector fusionDirector = getFusionDirector(id);
        fdAlarmService.unsubscribe(Collections.singletonList(fusionDirector));
      }
      return fdHostDao.deleteFusionDirector(ids);
    }
  }

  @Override
  public int updateSubscribedId(String ip, Integer subscribedId) {
    return fdHostDao.updateSubscribedId(ip, subscribedId);
  }

  @Override
  public ResponseEntity<Map> connect(FusionDirector fd) {
    String url = FDUtils.buildUrl(fd, FD_LOGIN_SERVICE_URL);
    ResponseEntity<Map> mapResponseEntity = HttpRequestUtil
        .requestWithBody(url, HttpMethod.GET, FDUtils.buildAuthHeader(fd), (String) null,
            Map.class);
    if (mapResponseEntity.getStatusCode() == HttpStatus.FORBIDDEN) {
      throw new WrongUserPwdException();
    }
    return mapResponseEntity;
  }

  @Override
  public ResponseEntity<Map> upload(FusionDirector fd, String serviceUrl, String methodType,
      MultipartHttpServletRequest multiRequest) throws IOException {
    if (!FDEntrypointWhiteList.isEntrypointGranted(methodType, serviceUrl)) {
      throw new ApiIllegalAccessException(methodType, serviceUrl);
    }
    String url = FDUtils.buildUrl(fd, serviceUrl);

    HttpHeaders httpHeaders = FDUtils.buildAuthHeader(fd);
    httpHeaders.setContentType(MediaType.MULTIPART_FORM_DATA);

    Iterator<String> fileNameIter = multiRequest.getFileNames();
    if (fileNameIter.hasNext()) {
      InputStream inputStream = null;
      try {
        final MultipartFile multipartFile = multiRequest.getFile(fileNameIter.next());
        MultiValueMap<String, Object> body = new LinkedMultiValueMap();
        inputStream = multipartFile.getInputStream();
        body.add(multipartFile.getName(), new InputStreamResource(inputStream) {
          @Override
          public long contentLength() throws IOException {
            return multipartFile.getSize();
          }

          @Override
          public String getFilename() {
            return multipartFile.getOriginalFilename();
          }
        });
        LOGGER.info("Uploading " + multipartFile.getName() + ", filename: " + multipartFile
            .getOriginalFilename() + ", size: " + multipartFile.getSize());
        ResponseEntity<Map> result = HttpRequestUtil
            .requestWithBody(url, HttpMethod.valueOf(methodType.toUpperCase()), httpHeaders, body,
                Map.class, Integer.MAX_VALUE, Integer.MAX_VALUE);
        return result;
      } finally {
        if (inputStream != null) {
          inputStream.close();
        }
      }
    }
    throw new NoUploadFileException();
  }

  @Override
  public ResponseEntity<Map> connect(FusionDirector fd, String serviceUrl, String methodType,
      String body) {
    serviceUrl = FDUtils.formalizeUrl(serviceUrl);
    if (!FDEntrypointWhiteList.isEntrypointGranted(methodType, serviceUrl)) {
      throw new ApiIllegalAccessException(methodType, serviceUrl);
    }
    String url = FDUtils.buildUrl(fd, serviceUrl);
    HttpMethod httpMethod;
    HttpHeaders httpHeaders = FDUtils.buildAuthHeader(fd);
    // spring-web 3.1.14 doesn't support PATCH
    // 1. use HttpMethod.POST
    // 2. Request Header add x-http-method-override=PATCH
    if ("PATCH".equalsIgnoreCase(methodType)) {
      httpHeaders.add("x-http-method-override", "PATCH");
      MediaType type = MediaType.parseMediaType("text/plain;charset=UTF-8");
      httpHeaders.setContentType(type);
      httpMethod = HttpMethod.POST;
    } else {
      httpMethod = HttpMethod.valueOf(methodType.toUpperCase());
      if (httpMethod == HttpMethod.POST) {
        MediaType type = MediaType.parseMediaType("text/plain;charset=UTF-8");
        httpHeaders.setContentType(type);
      }
    }
    ResponseEntity<Map> responseEntity = HttpRequestUtil
        .requestWithBody(url, httpMethod, httpHeaders, body, Map.class);
    int status = responseEntity.getStatusCode().value();
    if (status >= 400) {
      LOGGER.info(
          "Failed to get result from: " + fd + ", " + methodType + ": " + serviceUrl
              + ". Error code: " + status + ", response: " + responseEntity.getBody());
      // LOGGER.info("Request Headers: " + new HashMap<>(httpHeaders));
    }
    return responseEntity;
  }

  @Override
  public String getFDVersion(FusionDirector fd) {
    Map<String, Object> body = connect(fd, "/rich/Appliance/Version", HttpMethod.GET.name(), null)
        .getBody();
    String currentVersion = StringUtil.objToStr(body.get("CurrentVersion"));
    if (!StringUtils.hasText(currentVersion)) {
      throw new VcenterException("Failed to get FD version " + fd);
    }
    return currentVersion;
  }

  @Override
  public String generateAlarmUsername() {
    // return FDUtils.getAlarmUsernamePrefix() + fdHostDao.getNextValOfSeq(SEQ_HW_ALARM_USERNAME);
    return fdHostDao.getAvailableAlarmUsername(FDUtils.getAlarmUsernamePrefix());
  }

  @Override
  public FusionDirector getFusionDirectorByIp(String ip) {
    synchronized (RefreshKeyTask.class) {
      FusionDirector fd = fdHostDao.getFusionDirectorByIp(ip);
      decrypt(fd);
      return fd;
    }
  }

  @Override
  public FusionDirector getFusionDirector(int id) {
    synchronized (RefreshKeyTask.class) {
      FusionDirector fd = fdHostDao.getFusionDirector(id);
      decrypt(fd);
      return fd;
    }
  }

  @Override
  public FusionDirector getFusionDirector(String subscribedUsername) {
    synchronized (RefreshKeyTask.class) {
      FusionDirector fd = fdHostDao.getFusionDirector(subscribedUsername);
      decrypt(fd);
      return fd;
    }
  }

  @Override
  public Collection<Map<String, Object>> getNodesMembers(FusionDirector fd) {
    return getTypeNodesOrEnclosuresMembers(fd, "Nodes");
  }

  @Override
  public Collection<Map<String, Object>> getEnclosuresMembers(FusionDirector fd) {
    return getTypeNodesOrEnclosuresMembers(fd, "Enclosures");
  }

  @Override
  public void uninstall(ConnectedVim connectedVim, boolean removeData) {
    synchronized (RefreshKeyTask.class) {
      // remove provider
      try {
        if (!connectedVim.removeProvider(false)) {
          LOGGER.error("Provider cannot be removed");
        }
      } catch (Exception e) {
        LOGGER.error("There is no provider or provider cannot be removed", e);
      }

      // remove alarm event definitions
      try {
        int removedSize = fdAlarmService.removeAlarmEvents(connectedVim);
        LOGGER.info("Removed alarm events, count: " + removedSize);
      } catch (Exception e) {
        LOGGER.error("Cannot delete alarm event", e);
      }

      // remove data from HW_ALARM_EVENT, HW_HA_COMPONENT, HW_ALARM_RECORD
      try {
        fdAlarmService.cleanData();
      } catch (Exception e) {
        LOGGER.error("Cannot delete alarm data", e);
      }

      // unsubscribe
      try {
        List<FusionDirector> fdList = getFusionDirectorList(null, -1, -1, false, false);
        for (FusionDirector fusionDirector : fdList) {
          if (fusionDirector.getSubscriptionId() > 0) {
            fdAlarmService.unsubscribe(Arrays.asList(fusionDirector));
            // Disable HA and Alarm
            if (fusionDirector.getHaStatus() > 0 || fusionDirector.getAlarmStatus() > 0) {
              fusionDirector.setHaStatus(0);
              fusionDirector.setAlarmStatus(0);
              updateFusionDirector(fusionDirector);
            }
          }
        }
      } catch (Exception e) {
        LOGGER.error("Cannot unsubscribe", e);
      }

      try {
        if (removeData) {
          Collection<FDBaseDao> cleanDBDao = applicationContext.getBeansOfType(FDBaseDao.class)
              .values();
          LOGGER.info("Clean DB in " + cleanDBDao);
          for (FDBaseDao dao : cleanDBDao) {
            dao.deleteData();
            dao.dropTables();
          }
          LOGGER.info("Clean DB complete");
        }
      } catch (Exception e) {
        LOGGER.error(e.getMessage(), e);
      }

      try {
        // remove DB file and key files
        if (removeData) {
          FileUtils.deleteDBFile();
          FileUtils.deleteKeyFiles();
        }
      } catch (Exception e) {
        LOGGER.error("Cannot remove DB file", e);
      }
    }
  }

  @Override
  public boolean isSupportHA() {
    if (supportHA != null) {
      return supportHA;
    }
    ConnectedVim connectedVim = null;
    try {
      VCenterInfo vCenterInfo = fdSettingService.getVCenterInfo(false);
      if (vCenterInfo != null) {
        connectedVim = new ConnectedVim(vCenterInfo);
        connectedVim.connect(false);
        String version = connectedVim.getVersion(false);
        LOGGER.info("Current vCenter version is: " + version);
        ConnectedVim.checkVersionCompatible(version);
        supportHA = true;
      }
    } catch (VersionNotSupportException e) {
      supportHA = false;
    } catch (Exception e) {
      LOGGER.warn("Cannot get version from vCenter", e);
    } finally {
      if (connectedVim != null) {
        connectedVim.disconnect();
      }
    }
    return true;

  }

  @Override
  public ExecutorService getBackgroundExecutor() {
    return backgroundExecutor;
  }

  private Collection<Map<String, Object>> getTypeNodesOrEnclosuresMembers(FusionDirector fd,
      String type) {
    String entryPoint;
    if ("Enclosures".equalsIgnoreCase(type)) {
      entryPoint = "/rich/Enclosures";
    } else if ("Nodes".equalsIgnoreCase(type)) {
      entryPoint = "/rich/Nodes";
    } else {
      throw new VcenterException("Invalid type to get FD API members: " + type);
    }
    Map<String, Object> body = connect(fd, entryPoint, HttpMethod.GET.name(), null)
        .getBody();
    Object members = body.get("Members");
    if (members == null || ((Collection) members).isEmpty()) {
      LOGGER.info("No members in " + type + ": " + fd);
      return Collections.EMPTY_LIST;
    }
    return (Collection<Map<String, Object>>) members;
  }

  private void checkAlarmUsernameDuplication(FusionDirector fd) {
    if (fd == null) {
      return;
    }
    if (StringUtils.hasText(fd.getReservedStr1())) {
      if (!FDUtils.isValidAlarmUsername(fd.getReservedStr1())) {
        throw new VcenterException("-90011", "Invalid username");
      }
      FusionDirector fusionDirector = fdHostDao.getFusionDirector(fd.getReservedStr1());
      if (fusionDirector != null && fd.getReservedStr1()
          .equalsIgnoreCase(fusionDirector.getReservedStr1()) && !fd.getHostIp()
          .equals(fusionDirector.getHostIp())) {
        throw new VcenterException("-90011", "Alarm username is duplicated");
      }
    }
  }

  private boolean isSubscribed(FusionDirector fd) {
    return fd != null && fd.getSubscriptionId() > 0;
  }

  private boolean isAlarmOrHAEnabled(FusionDirector fd) {
    return fd != null && (fd.getAlarmStatus() > 0 || fd.getHaStatus() > 0);
  }

  private void decrypt(FusionDirector fd) {
    if (fd != null) {
      fd.setLoginPwd(decryptPassword(fd.getLoginPwd()));
      fd.setReservedStr2(decryptPassword(fd.getReservedStr2()));
    }
  }

  private void encrypt(FusionDirector fd) {
    if (fd != null) {
      fd.setLoginPwd(encryptPassword(fd.getLoginPwd()));
      fd.setReservedStr2(encryptPassword(fd.getReservedStr2()));
    }
  }

  private String encryptPassword(String password) {
    if (StringUtils.hasLength(password)) {
      return CipherUtils.aesEncode(password);
    } else {
      return null;
    }
  }

  private String decryptPassword(String password) {
    if (StringUtils.hasLength(password)) {
      return CipherUtils.aesDncode(password);
    } else {
      return null;
    }
  }

  private void destroy() {
    LOGGER.info("release resources....");
    backgroundExecutor.shutdownNow();
    backgroundExecutor = null;
  }
}
