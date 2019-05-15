package com.huawei.fdvcenterpluginui.exception;

public class WrongUserPwdException extends IgnorableException {

  public WrongUserPwdException() {
    super("-90005", "Wrong username or password");
  }
}