package com.huawei.fdvcenterpluginui.exception;

/**
 * Created by hyuan on 2018/11/22.
 */
public class NoUploadFileException extends IgnorableException {

  public NoUploadFileException() {
    super("-90007", "no upload file");
  }
}
