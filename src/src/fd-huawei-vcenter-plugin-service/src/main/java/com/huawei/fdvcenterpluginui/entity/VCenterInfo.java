package com.huawei.fdvcenterpluginui.entity;

/**
 * Created by Horace on 2019/1/2.
 */
public class VCenterInfo {

  private String hostIp;
  private int hostPort;
  private String username;
  private String password;

  public VCenterInfo() {
  }

  public VCenterInfo(String hostIp, int hostPort, String username, String password) {
    this.hostIp = hostIp;
    this.hostPort = hostPort;
    this.username = username;
    this.password = password;
  }

  public String getHostIp() {
    return hostIp;
  }

  public void setHostIp(String hostIp) {
    this.hostIp = hostIp;
  }

  public int getHostPort() {
    return hostPort;
  }

  public void setHostPort(int hostPort) {
    this.hostPort = hostPort;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }
}
