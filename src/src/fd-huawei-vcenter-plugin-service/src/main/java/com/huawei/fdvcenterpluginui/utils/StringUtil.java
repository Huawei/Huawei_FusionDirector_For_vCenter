package com.huawei.fdvcenterpluginui.utils;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

/**
 * Created by hyuan on 2017/7/4.
 */
public class StringUtil {

  public static boolean isSensitiveKey(String key) {
    if (key != null) {
      String lowerKey = key.toLowerCase(Locale.US);
      if (lowerKey.indexOf("pwd") != -1) {
        return true;
      } else if (lowerKey.indexOf("password") != -1) {
        return true;
      } else if (lowerKey.indexOf("pswd") != -1) {
        return true;
      } else if (lowerKey.indexOf("openid") != -1) {
        return true;
      } else if (lowerKey.indexOf("value") != -1) {
        return true;
      }
    }
    return false;
  }

  public static String maskValue(String value) {
    return value == null ? null : value.replaceAll(".", "*");
  }

  /**
   * compare 2 version strings in which separated by .
   * @param versionA
   * @param versionB
   * @return 1:a>b; 0:a=b; -1:a<b
   */
  public static int isVersionAGreaterThanB(String versionA, String versionB) {
    String[] targetVersionsSince = versionA.split("\\.");
    String[] currentVersions = versionB.split("\\.");
    for (int i = 0; i < Math.max(targetVersionsSince.length, currentVersions.length); i++) {
      String currentVersion = currentVersions.length - 1 < i ? "0" : currentVersions[i];
      String targetVersion = targetVersionsSince.length - 1 < i ? "0" : targetVersionsSince[i];
      if (Integer.parseInt(currentVersion) < Integer.parseInt(targetVersion)) {
        return 1;
      } else if (Integer.parseInt(currentVersion) > Integer.parseInt(targetVersion)) {
        return -1;
      }
    }
    return 0;
  }

  public static synchronized String convertTimestamp(Date date) {
    return new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(date);
  }

  public static String formatUUID(String uuid) {
    return uuid != null ? uuid.toLowerCase() : null;
  }

  public static String objToStr(Object obj) {
    return obj == null ? null : obj.toString();
  }

}
