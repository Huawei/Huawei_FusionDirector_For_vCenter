package com.huawei.fdvcenterpluginui.mvc;

import com.huawei.fdvcenterpluginui.entity.ResponseBodyBean;
import com.huawei.fdvcenterpluginui.entity.VCenterInfo;
import com.huawei.fdvcenterpluginui.services.FDSettingService;
import java.io.IOException;
import java.io.InputStream;
import java.net.Inet4Address;
import java.net.InetAddress;
import java.net.NetworkInterface;
import java.net.SocketException;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.Iterator;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;

@RequestMapping(value = "/services/settings")
public class FDSettingController extends BaseController {

  @Autowired
  private FDSettingService fdSettingService;

  @RequestMapping(value = "/cert", method = RequestMethod.POST)
  @ResponseBody
  public ResponseBodyBean importCert(HttpServletRequest request) {
    int result = 0;
    try {
      CommonsMultipartResolver multipartResolver = new CommonsMultipartResolver(
          request.getSession().getServletContext());
      if (multipartResolver.isMultipart(request)) {
        MultipartHttpServletRequest multiRequest = (MultipartHttpServletRequest) request;
        Iterator<String> it = multiRequest.getFileNames();
        while (it.hasNext()) {
          InputStream inputStream = null;
          try {
            inputStream = multiRequest.getFile(it.next()).getInputStream();
            result = fdSettingService.saveCrtThumbprints(inputStream);
          } finally {
            if (inputStream != null) {
              inputStream.close();
            }
          }
        }
        return new ResponseBodyBean(String.valueOf(result), null, null);
      }
    } catch (IOException e) {
      LOGGER.error("IO error", e);
    }
    return failure();
  }

  /**
   * IP list
   * @param request
   * @return
   * @throws SocketException
   */
  @RequestMapping(value = "/ips", method = RequestMethod.GET)
  @ResponseBody
  public ResponseBodyBean findLocalIps(HttpServletRequest request) throws SocketException {
    return success(getLocalIp());
  }

  @RequestMapping(method = RequestMethod.GET)
  @ResponseBody
  public ResponseBodyBean getVcenterInfo(HttpServletRequest request) {
    return success(fdSettingService.getVCenterInfo(true));
  }

  @RequestMapping(method = RequestMethod.PUT)
  @ResponseBody
  public ResponseBodyBean updateVcenterInfo(HttpServletRequest request,
      @RequestBody VCenterInfo vCenterInfo) {
    return success(fdSettingService.updateVCenterInfo(vCenterInfo, true, true));
  }

  private final List<String> getLocalIp() throws SocketException {
    Enumeration<NetworkInterface> allNetInterfaces = NetworkInterface.getNetworkInterfaces();
    InetAddress ip = null;
    List<String> ipList = new ArrayList();
    while (allNetInterfaces.hasMoreElements()) {
      NetworkInterface netInterface = (NetworkInterface) allNetInterfaces.nextElement();
      Enumeration<InetAddress> addresses = netInterface.getInetAddresses();
      while (addresses.hasMoreElements()) {
        ip = addresses.nextElement();
        if (ip != null && ip instanceof Inet4Address && !ip.getHostAddress().equals("127.0.0.1")) {
          ipList.add(ip.getHostAddress());
        }
      }
    }
    return ipList;
  }
}
