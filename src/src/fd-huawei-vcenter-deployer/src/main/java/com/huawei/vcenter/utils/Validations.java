package com.huawei.vcenter.utils;

import com.huawei.vcenter.Constants;
import java.io.File;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.json.JacksonJsonParser;
import org.springframework.boot.json.JsonParser;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;

/**
 * Created by hyuan on 2017/7/5.
 */
public class Validations {

  protected static final Logger LOGGER = LoggerFactory.getLogger(Validations.class);

  private static final String RESTURL_UNINSTALL = "https://%s/vsphere-client/fdvcenterpluginui/rest/services/fd/uninstall";

  private static final HttpHeaders HEADERS = new HttpHeaders();

  private static final JsonParser JSON_PARSER = new JacksonJsonParser();

  private static final String ERROR_CODE = "-99999";

  static {
    HEADERS.add("Content-Type", "application/x-www-form-urlencoded");
  }

//  public static Map onSubmit(String packageUrl, String vcenterUsername, String vcenterPassword,
//      String vcenterIP, String vcenterPort) {
//    String version = getPackageVersion();
//    if ((version == null) || (version.trim().equals(""))) {
//      return Collections.singletonMap("error", "E001");
//    }
//    return onSubmit(packageUrl, vcenterUsername, vcenterPassword, vcenterIP, vcenterPort, version);
//  }

  public static Map onSubmit(String packageUrl, String vcenterUsername, String vcenterPassword,
      String vcenterIP, String vcenterPort, String version) {
    if (!packageUrl.startsWith("https://")) {
      return Collections.singletonMap("error", "E002");
    }
    if ((vcenterIP == null) || (vcenterIP.isEmpty())) {
      return Collections.singletonMap("error", "E003");
    }
    if ((vcenterPort == null) || (vcenterPort.isEmpty())) {
      return Collections.singletonMap("error", "E004");
    }
    String serverThumbprint;
    try {
      serverThumbprint = KeytookUtil.getKeystoreServerThumbprint();
    } catch (IOException e) {
      e.printStackTrace();
      return Collections.singletonMap("error", "E005");
    }
    String pluginKey = "com.huawei.fdvcenterpluginui";
    String url;
    try {
      url = encodeUrlFileName(packageUrl);
    } catch (UnsupportedEncodingException e) {
      url = packageUrl;
    }
    VcenterRegisterRunner
        .run(version, url, serverThumbprint, vcenterIP, vcenterPort, vcenterUsername,
            vcenterPassword, pluginKey);
    return Collections.singletonMap("info", "check log");
  }

  private static String encodeUrlFileName(String url) throws UnsupportedEncodingException {
    String path = url.substring(0, url.indexOf("/package/") + "/package/".length());
    String file = URLEncoder.encode(url.substring(path.length()), "UTF-8").replaceAll("\\+", "%20");
    return path + file;
  }

  public static Map unRegister(String packageUrl, String vcenterUsername, String vcenterPassword,
      String vcenterIP, String vcenterPort, String keepData) {
    if ((vcenterIP == null) || (vcenterIP.isEmpty())) {
      return Collections.singletonMap("error", "E003");
    }
    if ((vcenterPort == null) || (vcenterPort.isEmpty())) {
      return Collections.singletonMap("error", "E004");
    }

    LOGGER.info("After the plugin is uninstalled, please restart the vSphere Web Client service manually");

    // remove DB files
    boolean removeData = false;
    LOGGER.info("Please wait patiently...");
    if (keepData != null && !"1".equals(keepData)) {
      removeData = true;
    }
    String response = uninstall(vcenterIP, vcenterPort, vcenterUsername, vcenterPassword,
        "uninstall", removeData);
    LOGGER.debug(response);

    String pluginKey = "com.huawei.fdvcenterpluginui";
    VcenterRegisterRunner.unRegister(vcenterIP, vcenterPort, vcenterUsername,
        vcenterPassword, pluginKey);

    return Collections.singletonMap("info", "check log");
  }

  public static String uninstall(String vcenterIP, String vcenterPort, String vcenterUsername,
      String vcenterPassword, String action, boolean removeData) {
    String result = null;
    try {
      Map<String, String> bodyParamMap = new HashMap<String, String>();
      bodyParamMap.put("vcenterUsername", vcenterUsername);
      bodyParamMap.put("vcenterPassword", vcenterPassword);
      bodyParamMap.put("vcenterPort", vcenterPort);
      bodyParamMap.put("action", action);
      bodyParamMap.put("removeData", removeData ? "true" : "false");
      String body = HttpRequestUtil.concatParamAndEncode(bodyParamMap);

      result = HttpRequestUtil
          .requestWithBody(String.format(RESTURL_UNINSTALL, vcenterIP + ":" + vcenterPort),
              HttpMethod.POST, HEADERS, body, String.class).getBody();
    } catch (Exception e) {
      LOGGER.debug(e.getMessage(), e);
    }
    return result;
  }

  public static Map onloadChecker(HttpServletRequest request) {
    Map<String, Object> returnMap = new HashMap<>();

    File keyFile = new File(Constants.KEYSTORE_FILE);
    if (!keyFile.exists()) {
      return Collections.singletonMap("error", "E006");
    }

    List<String> packageNameList = new ArrayList<>();
    List<String> versionList = new ArrayList<>();

    // check file
    File rootFile = new File("./");
    File[] fileList = rootFile.listFiles();
    if (fileList != null) {
      for (File file : fileList) {
        if (file.getName().lastIndexOf(".zip") >= 0) {
          // check version
          String version = getPackageVersion(file.getName());
          if ((version == null) || (version.trim().equals(""))) {
            continue;
          }
          packageNameList.add(file.getName());
          versionList.add(version);
        }
      }
    }

    if (packageNameList.isEmpty()) {
      return Collections.singletonMap("error", "E007");
    }

    returnMap.put("packageNameList", packageNameList);
    returnMap.put("versionList", versionList);
    returnMap.put("key", keyFile.getAbsolutePath());
    returnMap.put("path",
        "https://" + request.getServerName() + ":" + request.getServerPort() + "/package/");
    return returnMap;
  }

//  private static String getPackageVersion() {
//    String version = null;
//    try {
//      version = ZipUtils.getVersionFromPackage(Constants.UPDATE_FILE);
//    } catch (Exception e) {
//      e.printStackTrace();
//    }
//    return version;
//  }

  private static String getPackageVersion(String file) {
    String version = null;
    try {
      version = ZipUtils.getVersionFromPackage(file);
    } catch (Exception e) {
      e.printStackTrace();
    }
    return version;
  }
}
