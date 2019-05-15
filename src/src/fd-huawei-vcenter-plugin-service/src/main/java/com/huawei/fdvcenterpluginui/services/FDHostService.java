package com.huawei.fdvcenterpluginui.services;

import com.huawei.fdvcenterpluginui.entity.FusionDirector;
import com.huawei.fdvcenterpluginui.utils.ConnectedVim;
import java.io.IOException;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutorService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartHttpServletRequest;

public interface FDHostService {

  List<FusionDirector> getFusionDirectorList(String ip, int pageNo, int pageSize, boolean maskPwd,
      boolean getVersion);

  int getFusionDirectorListCount(String ip);

  int addFusionDirector(FusionDirector fd);

  int updateFusionDirector(FusionDirector fd);

  int updateFusionDirectorAllPassword(FusionDirector fd);

  int deleteFusionDirector(Integer[] ids);

  int updateSubscribedId(String ip, Integer subscribedId);

  ResponseEntity<Map> connect(FusionDirector fd);

  ResponseEntity<Map> upload(FusionDirector fd, String serviceUrl, String methodType,
      MultipartHttpServletRequest request) throws IOException;

  ResponseEntity<Map> connect(FusionDirector fd, String serviceUrl, String methodType, String body);

  String getFDVersion(FusionDirector fd);

  String generateAlarmUsername();

  FusionDirector getFusionDirectorByIp(String ip);

  FusionDirector getFusionDirector(int id);

  FusionDirector getFusionDirector(String subscribedUsername);

  Collection<Map<String, Object>> getNodesMembers(FusionDirector fd);

  Collection<Map<String, Object>> getEnclosuresMembers(FusionDirector fd);

  void uninstall(ConnectedVim connectedVim, boolean removeData);

  boolean isSupportHA();

  ExecutorService getBackgroundExecutor();
}
