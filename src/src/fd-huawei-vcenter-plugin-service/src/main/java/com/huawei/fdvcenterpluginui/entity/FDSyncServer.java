package com.huawei.fdvcenterpluginui.entity;

import java.util.Date;

/**
 * Created by Horace on 2019/1/4.
 */
public class FDSyncServer implements Cloneable {
  private int id;
  private int fdHostId;
  private String uuid;
  private String deviceId;
  private String parentDeviceId;

  // vCenter HA
  private String haHostSystem;

  private Date createTime;

  public FDSyncServer() {
  }

  public FDSyncServer(int id, int fdHostId, String uuid, String deviceId,
      String parentDeviceId, String haHostSystem, Date createTime) {
    this.id = id;
    this.fdHostId = fdHostId;
    this.uuid = uuid;
    this.deviceId = deviceId;
    this.parentDeviceId = parentDeviceId;
    this.haHostSystem = haHostSystem;
    this.createTime = createTime;
  }

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

  public String getDeviceId() {
    return deviceId;
  }

  public void setDeviceId(String deviceId) {
    this.deviceId = deviceId;
  }

  public String getParentDeviceId() {
    return parentDeviceId;
  }

  public void setParentDeviceId(String parentDeviceId) {
    this.parentDeviceId = parentDeviceId;
  }

  public String getUuid() {
    return uuid;
  }

  public void setUuid(String uuid) {
    this.uuid = uuid;
  }

  public Date getCreateTime() {
    return createTime;
  }

  public void setCreateTime(Date createTime) {
    this.createTime = createTime;
  }

  public String getHaHostSystem() {
    return haHostSystem;
  }

  public void setHaHostSystem(String haHostSystem) {
    this.haHostSystem = haHostSystem;
  }

  @Override
  public String toString() {
    return "FDSyncServer{" +
        "id=" + id +
        ", fdHostId=" + fdHostId +
        ", uuid='" + uuid + '\'' +
        ", deviceId='" + deviceId + '\'' +
        ", haHostSystem='" + haHostSystem + '\'' +
        ", createTime=" + createTime +
        '}';
  }

  @Override
  public int hashCode() {
    return this.fdHostId + 31 * this.uuid.hashCode();
  }

  @Override
  public boolean equals(Object obj) {
    if (obj != null && obj instanceof FDSyncServer) {
      FDSyncServer newobj = (FDSyncServer) obj;
      return (newobj.getFdHostId() == fdHostId) && newobj.getUuid().equalsIgnoreCase(uuid);
    }
    return false;
  }

  @Override
  public FDSyncServer clone() {
    try {
      return (FDSyncServer) super.clone();
    } catch (CloneNotSupportedException e) {
      return new FDSyncServer(this.id, this.fdHostId, this.uuid, this.deviceId, this.parentDeviceId,
          this.haHostSystem, this.createTime);
    }
  }

}
