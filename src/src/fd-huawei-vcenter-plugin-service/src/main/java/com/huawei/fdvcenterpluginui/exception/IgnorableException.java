package com.huawei.fdvcenterpluginui.exception;

/**
 * Created by hyuan on 2018/10/31.
 */
public class IgnorableException extends VcenterException {

  public IgnorableException() {
    super();
  }

  public IgnorableException(String message) {
    super(message);
  }

  public IgnorableException(String code, String message) {
    super(code, message);
  }
}
