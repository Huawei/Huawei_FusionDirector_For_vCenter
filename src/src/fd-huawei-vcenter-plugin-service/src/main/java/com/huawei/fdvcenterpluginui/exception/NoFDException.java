package com.huawei.fdvcenterpluginui.exception;

/**
 * Created by hyuan on 2018/10/31.
 */
public class NoFDException extends IgnorableException {

  public NoFDException() {
    super("-90002", "no FD in DB");
  }
}
