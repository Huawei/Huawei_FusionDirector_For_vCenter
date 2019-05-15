package com.huawei.fdvcenterpluginui.exception;

/**
 * Created by hyuan on 2018/10/31.
 */
public class VersionNotSupportException extends IgnorableException {

  private static final String RETURN_CODE = "-90006";

  public VersionNotSupportException(String currentVersion) {
    super(RETURN_CODE, "Version doesn't support: " + currentVersion);
  }

  public static String getReturnCode() {
    return RETURN_CODE;
  }

}
