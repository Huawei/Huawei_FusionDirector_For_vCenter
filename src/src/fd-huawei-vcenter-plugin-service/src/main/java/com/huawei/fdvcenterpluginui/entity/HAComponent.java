package com.huawei.fdvcenterpluginui.entity;

import java.util.Date;

public class HAComponent {

  private int id;
  private int fdHostId;
  private String componentType;
  private String component;
  private String severity;
  private String deviceId;
  private Date createTime;
  private int sn;

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public int getFdHostId() {
    return fdHostId;
  }

  public void setFdHostId(int fdHostId) {
    this.fdHostId = fdHostId;
  }

  public String getComponentType() {
    return componentType;
  }

  public void setComponentType(String componentType) {
    this.componentType = componentType;
  }

  public String getSeverity() {
    return severity;
  }

  public void setSeverity(String severity) {
    this.severity = severity;
  }

  public String getDeviceId() {
    return deviceId;
  }

  public void setDeviceId(String deviceId) {
    this.deviceId = deviceId;
  }

  public Date getCreateTime() {
    return createTime;
  }

  public void setCreateTime(Date createTime) {
    this.createTime = createTime;
  }

  public String getComponent() {
    return component;
  }

  public void setComponent(String component) {
    this.component = component;
  }

  public int getSn() {
    return sn;
  }

  public void setSn(int sn) {
    this.sn = sn;
  }

  @Override
  public String toString() {
    return "HAComponent{" +
        "id=" + id +
        ", fdHostId=" + fdHostId +
        ", componentType='" + componentType + '\'' +
        ", component='" + component + '\'' +
        ", severity='" + severity + '\'' +
        ", deviceId='" + deviceId + '\'' +
        ", createTime=" + createTime +
        ", sn=" + sn +
        '}';
  }
}
