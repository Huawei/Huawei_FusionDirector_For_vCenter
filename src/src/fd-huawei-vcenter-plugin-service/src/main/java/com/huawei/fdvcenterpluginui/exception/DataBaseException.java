package com.huawei.fdvcenterpluginui.exception;

/**
 * Created by hyuan on 2018/10/31.
 */
public class DataBaseException extends VcenterException {

  public DataBaseException() {
    super();
  }

  public DataBaseException(String message) {

    super(message);

    setCode("-70001");
  }

  public DataBaseException(String code, String message) {

    super(message);

    setCode(code);
  }

}
