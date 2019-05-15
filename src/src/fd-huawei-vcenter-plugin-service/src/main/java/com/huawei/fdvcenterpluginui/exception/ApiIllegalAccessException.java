package com.huawei.fdvcenterpluginui.exception;

/**
 * Created by hyuan on 2018/10/31.
 */
public class ApiIllegalAccessException extends IgnorableException {

  private static final String RETURN_CODE = "-90009";

  public ApiIllegalAccessException(String method, String entrypoint) {
    super(RETURN_CODE, "Access denied, " + method + ": " + entrypoint);
  }

  public static String getReturnCode() {
    return RETURN_CODE;
  }

}
