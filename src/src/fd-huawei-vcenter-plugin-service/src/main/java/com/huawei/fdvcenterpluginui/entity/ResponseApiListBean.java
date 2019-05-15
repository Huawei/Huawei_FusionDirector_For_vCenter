package com.huawei.fdvcenterpluginui.entity;

import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

public class ResponseApiListBean implements Logable {

  private static final Log LOGGER = LogFactory.getLog(ResponseApiListBean.class);

  private String code;
  private List<ResponseApiBean> data;
  private String description;
  private Map<String, Object> headers = new HashMap<>();
  private Collection<String> ips = new HashSet<>();

  public String getCode() {
    return code;
  }

  public void setCode(String code) {
    this.code = code;
  }

  public List<ResponseApiBean> getData() {
    return data;
  }

  public void setData(List<ResponseApiBean> data) {
    this.data = data;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public Map<String, Object> getHeaders() {
    return headers;
  }

  public void setHeaders(Map<String, Object> headers) {
    this.headers = headers;
  }

  public Collection<String> getIps() {
    return ips;
  }

  @Override
  public String toString() {
    return "ResponseApiListBean{" + "code='" + code + '\'' + ", data='" + data + '\''
        + ", description='" + description + '\'' + '}';
  }

  @Override
  public void printLog() {
    LOGGER.info(toString());
  }
}
