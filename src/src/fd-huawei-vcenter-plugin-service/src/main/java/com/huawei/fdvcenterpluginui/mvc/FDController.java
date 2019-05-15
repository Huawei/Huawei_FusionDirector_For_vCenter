package com.huawei.fdvcenterpluginui.mvc;

import com.huawei.fdvcenterpluginui.entity.FDSyncServer;
import com.huawei.fdvcenterpluginui.entity.FdServiceBean;
import com.huawei.fdvcenterpluginui.entity.FusionDirector;
import com.huawei.fdvcenterpluginui.entity.ResponseApiBean;
import com.huawei.fdvcenterpluginui.entity.ResponseApiListBean;
import com.huawei.fdvcenterpluginui.entity.ResponseBodyBean;
import com.huawei.fdvcenterpluginui.entity.ResponseListBean;
import com.huawei.fdvcenterpluginui.services.FDAlarmService;
import com.huawei.fdvcenterpluginui.services.FDHostService;
import com.huawei.fdvcenterpluginui.services.FDSyncService;
import com.huawei.fdvcenterpluginui.utils.ConnectedVim;
import com.huawei.fdvcenterpluginui.utils.JsonUtil;
import com.huawei.fdvcenterpluginui.utils.VersionUtils;
import com.vmware.connection.ConnectionException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartHttpServletRequest;

/**
 * Created by hyuan on 2018/10/31.
 */
@RequestMapping(value = "/services/fd")
public class FDController extends BaseController {

  private static final Log LOGGER = LogFactory.getLog(FDController.class);

  @Autowired
  private FDHostService fdHostService;

  @Autowired
  private FDAlarmService fdAlarmService;

  @Autowired
  private FDSyncService fdSyncService;

  @RequestMapping(value = "", method = RequestMethod.GET)
  @ResponseBody
  public ResponseListBean getFDs(HttpServletRequest request,
      @RequestParam(required = false) String ip, @RequestParam(required = false) Integer pageNo,
      @RequestParam(required = false) Integer pageSize) {
    return new ResponseListBean("0",
        fdHostService.getFusionDirectorList(ip, pageNo, pageSize, true, false), "",
        fdHostService.getFusionDirectorListCount(ip));
  }

  @RequestMapping(value = "", method = RequestMethod.POST)
  @ResponseBody
  public ResponseBodyBean saveFD(HttpServletRequest request, @RequestBody FusionDirector fd) {
    FusionDirector oldFD = fdHostService.getFusionDirectorByIp(fd.getHostIp());
    if (oldFD != null) {
      if (!StringUtils.hasText(fd.getLoginPwd())) {
        fd.setLoginPwd(oldFD.getLoginPwd());
      }
      if (!StringUtils.hasText(fd.getLoginAccount())) {
        fd.setLoginAccount(oldFD.getLoginAccount());
      }
      if (!StringUtils.hasText(fd.getAlarmUsername())) {
        fd.setAlarmUsername(oldFD.getAlarmUsername());
      }
      if (!StringUtils.hasText(fd.getAlarmPassword())) {
        fd.setAlarmPassword(oldFD.getAlarmPassword());
      }
    }

    ResponseEntity<Map> testResponse = fdHostService.connect(fd);
    int testStatus = testResponse.getStatusCode().value();
    if (testStatus != HttpStatus.OK.value()) {
      return failure(Integer.toString(testStatus), "", testResponse.getBody());
    }

    if (oldFD != null) {
      // update
      fd.setId(oldFD.getId());
      if (!StringUtils.hasLength(fd.getLoginPwd())) {
        fd.setLoginAccount(oldFD.getLoginAccount());
        fd.setLoginPwd(oldFD.getLoginPwd());
      }
      if (!StringUtils.hasLength(fd.getAlarmPassword())) {
        fd.setReservedStr1(oldFD.getReservedStr1());
        fd.setReservedStr2(oldFD.getReservedStr2());
      }
      fdHostService.updateFusionDirector(fd);
    } else {
      // new add
      fdHostService.addFusionDirector(fd);
    }
    return success();

  }

  @RequestMapping(value = "{ids}", method = RequestMethod.DELETE)
  @ResponseBody
  public ResponseBodyBean deleteFDs(HttpServletRequest request, @PathVariable Integer[] ids) {
    fdHostService.deleteFusionDirector(ids);
    return success();
  }

  @RequestMapping(value = "/test", method = RequestMethod.PUT)
  @ResponseBody
  public ResponseBodyBean testFD(HttpServletRequest request, @RequestBody FusionDirector fd) {
    return generateResult(fdHostService.connect(fd));
  }

  /**
   * get VCenter version
   */
  @RequestMapping(value = "/version", method = RequestMethod.GET)
  @ResponseBody
  public Map<String, Object> getVersion(HttpServletRequest request, HttpServletResponse response) {
    String rqHd = request.getHeader("Accept-Language");
    if (rqHd != null && rqHd.toLowerCase().startsWith("zh")) {
      response.addHeader("Accept-Language", Locale.CHINESE.toLanguageTag());
    }
    Map<String, Object> resultMap = new HashMap<>();
    resultMap.put("code", "0");
    resultMap.put("data", VersionUtils.getVersion());
    resultMap.put("description", null);
    resultMap.put("supportHA", fdHostService.isSupportHA());

    return resultMap;
  }

  @RequestMapping(value = "/upload", method = RequestMethod.POST)
  @ResponseBody
  public ResponseApiListBean postFdUpload(HttpServletRequest request,
      @RequestParam("ips") String[] ips, @RequestParam("httpMethod") String httpMethod,
      @RequestParam("endpoint") String endpoint)
      throws IOException {
    List<ResponseApiBean> responseApiBeans = new ArrayList<ResponseApiBean>();
    ResponseApiListBean responseApiListBean = new ResponseApiListBean();
    String code = "0";

    for (int i = 0; i < ips.length; i++) {
      String ip = ips[i];
      FusionDirector fd = fdHostService.getFusionDirectorByIp(ip);
      if (fd == null) {
        continue;
      }
      ResponseEntity<Map> result = fdHostService.upload(fd, endpoint, httpMethod,
          (MultipartHttpServletRequest) request);
      ResponseApiBean responseApiBean = generateApiResult(result, ip);
      responseApiBeans.add(responseApiBean);
      if ("0".equals(code) && ("4".equals(responseApiBean.getCode().substring(0, 1))
          || "5".equals(responseApiBean.getCode().substring(0, 1)))) {
        code = "-1";
      }
    }
    responseApiListBean.setCode(code);
    responseApiListBean.setData(responseApiBeans);
    return responseApiListBean;
  }

  @RequestMapping(value = "/api", method = RequestMethod.POST)
  @ResponseBody
  public ResponseApiListBean postFdApi(HttpServletRequest request,
      @RequestBody FdServiceBean fdBean) {
    Collection<String> ips = fdBean.getIps();
    request.setAttribute("ips", ips);
    List<ResponseApiBean> responseApiBeans = new ArrayList<ResponseApiBean>();
    ResponseApiListBean responseApiListBean = new ResponseApiListBean();
    String code = "0";

    String responseHeaderDate = null;
    Collection<String> tasks = null;
    Iterator<String> ipIterator = ips.iterator();
    while (ipIterator.hasNext()) {
      String ip = ipIterator.next();
      FusionDirector fd = fdHostService.getFusionDirectorByIp(ip);

      ResponseEntity<Map> result = fdHostService
          .connect(fd, fdBean.getEndpoint(), fdBean.getHttpMethod(),
              JsonUtil.GSON.toJson(fdBean.getData()));
      ResponseApiBean responseApiBean = generateApiResult(result, ip);
      HttpHeaders headers = result.getHeaders();
      if (responseHeaderDate == null) {
        List<String> dateList = headers.get("Date");
        if (dateList != null && !dateList.isEmpty()) {
          responseHeaderDate = dateList.get(0);
        }
      }
      if (tasks == null) {
        List<String> taskList = headers.get("Task");
        if (taskList != null && !taskList.isEmpty()) {
          tasks = taskList;
        }
      }
      responseApiBeans.add(responseApiBean);
      if ("0".equals(code) && ("4".equals(responseApiBean.getCode().substring(0, 1))
          || "5".equals(responseApiBean.getCode().substring(0, 1)))) {
        code = "-1";
      }
    }
    responseApiListBean.setCode(code);
    responseApiListBean.setData(responseApiBeans);
    if (responseHeaderDate != null) {
      responseApiListBean.setDescription(responseHeaderDate);
    }
    if (tasks != null) {
      responseApiListBean.getHeaders().put("task", tasks);
    }
    responseApiListBean.getIps().addAll(ips);
    return responseApiListBean;
  }

  @RequestMapping(value = "/event", method = RequestMethod.POST)
  @ResponseBody
  public ResponseBodyBean eventCallback(HttpServletRequest request, @RequestBody String body,
      @RequestHeader("Authorization") String authorization) throws IOException {
    if (body.length() > 5000) {
      return failure();
    }
    fdAlarmService.handleEvent(authorization, body);
    return success();
  }

  @RequestMapping(value = "/alarm/username", method = RequestMethod.GET)
  @ResponseBody
  public ResponseBodyBean generateAlarmUsername(HttpServletRequest request) {
    return success(fdHostService.generateAlarmUsername());
  }

  @RequestMapping(value = "/host/detail", method = RequestMethod.GET)
  @ResponseBody
  public ResponseBodyBean getHostServerDetail(HttpServletRequest request,
      @RequestParam String objectId) {
    // urn:vmomi:HostSystem:host-1473:5f0c44d4-fee6-4a3c-a50d-884c58258b34
    String host = objectId.split(":")[3];
    if (StringUtils.hasText(host)) {
      FDSyncServer fdSyncServer = fdSyncService.loadSyncServer(host);
      if (fdSyncServer != null) {
        // String endPoint = "/rich/Nodes/c9e5f1c0-10d3-4086-9dae-41933d9c5a75";
        String endPoint = "/rich/Nodes/" + fdSyncServer.getDeviceId();
        FusionDirector fd = fdHostService.getFusionDirector(fdSyncServer.getFdHostId());
        ResponseEntity<Map> responseEntity = fdHostService
            .connect(fd, endPoint, HttpMethod.GET.name(), null);
        return success(responseEntity.getBody(), fd.getHostIp());
      } else {
        LOGGER.info(host + " is not sync");
      }
    }
    return success();
  }

  @RequestMapping(value = "/uninstall", method = RequestMethod.POST)
  @ResponseBody
  public ResponseBodyBean uninstall(HttpServletRequest request,
      @RequestParam int vcenterPort,
      @RequestParam String vcenterUsername,
      @RequestParam String vcenterPassword,
      @RequestParam String removeData) {
    boolean connected = false;
    ConnectedVim connectedVim = new ConnectedVim("127.0.0.1", vcenterPort, vcenterUsername,
        vcenterPassword);
    try {
      connectedVim.connect(false);
      connected = true;

      fdHostService.uninstall(connectedVim, Boolean.valueOf(removeData));

      return success();
    } catch (ConnectionException e) {
      LOGGER.error("Cannot connect to vCenter", e);
      return failure();
    } catch (Exception e) {
      LOGGER.error("Unknown error", e);
      return failure();
    } finally {
      if (connected) {
        connectedVim.disconnect();
      }
    }
  }

}
