package com.huawei.fdvcenterpluginui.utils;

import com.huawei.fdvcenterpluginui.entity.FusionDirector;
import com.huawei.fdvcenterpluginui.entity.Pair;
import java.io.IOException;
import org.springframework.http.HttpHeaders;
import sun.misc.BASE64Decoder;
import sun.misc.BASE64Encoder;

public class FDUtils {

  private static final String PROTOCOL = "https://";

  private static final String CONTEXT_VERSION = "/redfish/v1";

  private static final String BASIC_AUTH_HEAD_NAME = "Authorization";

  private static final String ALARM_USERNAME_PREFIX = "vCenterPlugin";

  private static final BASE64Encoder ENCODER = new BASE64Encoder();

  private static final BASE64Decoder DECODER = new BASE64Decoder();

  public static HttpHeaders buildAuthHeader(FusionDirector fd) {
    HttpHeaders httpHeaders = new HttpHeaders();
    httpHeaders
        .add(BASIC_AUTH_HEAD_NAME, buildBasicAuthString(fd.getLoginAccount(), fd.getLoginPwd()));
    return httpHeaders;
  }

  /**
   * @param serviceUrl start with /
   */
  public static String buildUrl(FusionDirector fd, String serviceUrl) {
    return PROTOCOL + fd.getHostIp() + ":" + fd.getPort() + (
        serviceUrl.startsWith(CONTEXT_VERSION) ? serviceUrl : (CONTEXT_VERSION + serviceUrl));
  }

  public static String formalizeUrl(String serviceUrl) {
    if (serviceUrl == null) {
      return null;
    }
    return serviceUrl.startsWith(CONTEXT_VERSION) ? serviceUrl.replace(CONTEXT_VERSION, "")
        : serviceUrl;
  }

  private static String buildBasicAuthString(String user, String password) {
    return "Basic " + ENCODER.encode((user + ":" + password).getBytes());
  }

  /**
   * Parse basic auth value
   */
  public static Pair<String, String> parseBasicAuth(String s) throws IOException {
    if (!s.startsWith("Basic ")) {
      return null;
    }
    s = s.replace("Basic ", "");
    String[] split = new String(DECODER.decodeBuffer(s)).split(":");
    return new Pair<>(split[0], split[1]);
  }

  public static String getAlarmUsernamePrefix() {
    return ALARM_USERNAME_PREFIX;
  }

  public static boolean isValidAlarmUsername(String alarmUserName) {
    return alarmUserName != null && alarmUserName.matches(ALARM_USERNAME_PREFIX + "\\d+");
  }

}
