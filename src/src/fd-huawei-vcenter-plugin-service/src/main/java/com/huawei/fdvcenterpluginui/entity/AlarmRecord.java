package com.huawei.fdvcenterpluginui.entity;

import java.util.Date;

public class AlarmRecord {

  private int id;
  private int fdHostId;
  private String eventId;
  private int sn;
  private Date createTime;
  private String deviceId;

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

  public String getEventId() {
    return eventId;
  }

  public void setEventId(String eventId) {
    this.eventId = eventId;
  }

  public int getSn() {
    return sn;
  }

  public void setSn(int sn) {
    this.sn = sn;
  }

  public Date getCreateTime() {
    return createTime;
  }

  public void setCreateTime(Date createTime) {
    this.createTime = createTime;
  }

  public String getDeviceId() {
    return deviceId;
  }

  public void setDeviceId(String deviceId) {
    this.deviceId = deviceId;
  }

  @Override
  public String toString() {
    return "AlarmRecord{" +
        "id=" + id +
        ", fdHostId=" + fdHostId +
        ", eventId='" + eventId + '\'' +
        ", sn=" + sn +
        ", createTime=" + createTime +
        ", deviceId='" + deviceId + '\'' +
        '}';
  }
}
