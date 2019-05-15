package com.huawei.fdvcenterpluginui.entity;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

/**
 * Created by hyuan on 2018/10/31.
 */
public class ResponseBodyBean implements Logable {

  private static final Log LOGGER = LogFactory.getLog(ResponseBodyBean.class);

  private String code;
  private Object data;
  private String description;

  public ResponseBodyBean() {
  }

  public ResponseBodyBean(String code, Object data, String description) {
    this.code = code;
    this.data = data;
    this.description = description;
  }

  public Object getData() {
    return data;
  }

  public void setData(Object data) {
    this.data = data;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public String getCode() {
    return code;
  }

  public void setCode(String code) {
    this.code = code;
  }

  @Override
  public String toString() {
    return "ResponseBodyBean{" +
        "code='" + code + '\'' +
        ", data='" + data + '\'' +
        ", description='" + description + '\'' +
        '}';
  }

  @Override
  public void printLog() {
    LOGGER.info(toString());
  }
}
