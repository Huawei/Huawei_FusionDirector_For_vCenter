package com.huawei.fdvcenterpluginui.entity;

import java.util.ArrayList;
import java.util.Set;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

public class FdServiceBean implements Logable, RequestLoggable {

  private static final Log LOGGER = LogFactory.getLog(FdServiceBean.class);

  private Set<String> ips;
  private String httpMethod;
  private String endpoint;
  private Object data;

  public Set<String> getIps() {
    return ips;
  }

  public void setIps(Set<String> ips) {
    this.ips = ips;
  }

  public String getHttpMethod() {
    return httpMethod;
  }

  public void setHttpMethod(String httpMethod) {
    this.httpMethod = httpMethod;
  }

  public String getEndpoint() {
    return endpoint;
  }

  public void setEndpoint(String endpoint) {
    this.endpoint = endpoint;
  }

  public Object getData() {
    return data;
  }

  public void setData(Object data) {
    this.data = data;
  }

  @Override
  public void printLog() {
    LOGGER.info(getMessage());
    // LOGGER.info(httpMethod + ips + ", endpoint: " + endpoint + ", data: " + data);
  }

  @Override
  public String getMessage() {
    return httpMethod + ips + endpoint;
  }

}
