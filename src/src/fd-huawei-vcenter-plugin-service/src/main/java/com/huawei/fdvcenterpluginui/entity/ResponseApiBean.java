package com.huawei.fdvcenterpluginui.entity;

import java.util.Map;

public class ResponseApiBean {

  private String ip;
  private String code;
  private Object data;
  private Map<String, ? extends Object> headers;

  public ResponseApiBean(String ip, String code, Object data, Map<String, ? extends Object> headers) {
    this.ip = ip;
    this.code = code;
    this.data = data;
    this.headers = headers;
  }

  public String getIp() {
    return ip;
  }

  public void setIp(String ip) {
    this.ip = ip;
  }

  public String getCode() {
    return code;
  }

  public void setCode(String code) {
    this.code = code;
  }

  public Object getData() {
    return data;
  }

  public void setData(Object data) {
    this.data = data;
  }

  public Map<String, ? extends Object> getHeaders() {
    return headers;
  }

  public void setHeaders(Map<String, Object> headers) {
    this.headers = headers;
  }

  @Override
  public String toString() {
    return "ResponseApiBean{" +
        "ip='" + ip + '\'' +
        ", code='" + code + '\'' +
        ", data=" + data +
        ", headers=" + headers +
        '}';
  }
}
