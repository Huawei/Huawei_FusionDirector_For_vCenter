package com.huawei.fdvcenterpluginui.entity;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

public class FusionDirector implements Logable {

  private static final Log LOGGER = LogFactory.getLog(FusionDirector.class);

  private int id;
  private String hostIp;
  private String loginAccount;
  private String loginPwd;
  private int port;
  private String aliasName;
  private String lastModify;
  private String createTime;
  private int reservedInt1; // subscription id
  private int reservedInt2; // 0:all 1:critical and major
  private String reservedStr1; // subscription callback username
  private String reservedStr2; // subscription callback password

  // HA and Alarm
  private int haStatus; // 0:disabled 1:enabled
  private int alarmStatus; // 0:disabled 1:enabled
  private String fdVersion; // fd version

  public int getPort() {
    return port < 1 ? 443 : port;
  }

  public void setPort(int port) {
    this.port = port;
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getHostIp() {
    return hostIp;
  }

  public void setHostIp(String hostIp) {
    this.hostIp = hostIp;
  }

  public String getLoginAccount() {
    return loginAccount;
  }

  public void setLoginAccount(String loginAccount) {
    this.loginAccount = loginAccount;
  }

  public String getLoginPwd() {
    return loginPwd;
  }

  public void setLoginPwd(String loginPwd) {
    this.loginPwd = loginPwd;
  }

  public String getAliasName() {
    return aliasName;
  }

  public void setAliasName(String aliasName) {
    this.aliasName = aliasName;
  }

  public String getLastModify() {
    return lastModify;
  }

  public void setLastModify(String lastModify) {
    this.lastModify = lastModify;
  }

  public String getCreateTime() {
    return createTime;
  }

  public void setCreateTime(String createTime) {
    this.createTime = createTime;
  }

  public int getReservedInt1() {
    return reservedInt1;
  }

  public void setReservedInt1(int reservedInt1) {
    this.reservedInt1 = reservedInt1;
  }

  public int getReservedInt2() {
    return reservedInt2;
  }

  public void setReservedInt2(int reservedInt2) {
    this.reservedInt2 = reservedInt2;
  }

  public String getReservedStr1() {
    return reservedStr1;
  }

  public void setReservedStr1(String reservedStr1) {
    this.reservedStr1 = reservedStr1;
  }

  public String getReservedStr2() {
    return reservedStr2;
  }

  public void setReservedStr2(String reservedStr2) {
    this.reservedStr2 = reservedStr2;
  }

  public String getFdVersion() {
    return fdVersion;
  }

  public void setFdVersion(String fdVersion) {
    this.fdVersion = fdVersion;
  }

  public int getHaStatus() {
    return haStatus;
  }

  public void setHaStatus(int haStatus) {
    this.haStatus = haStatus;
  }

  public int getAlarmStatus() {
    return alarmStatus;
  }

  public void setAlarmStatus(int alarmStatus) {
    this.alarmStatus = alarmStatus;
  }

  public void setAlarmUsername(String alarmUsername) {
    this.reservedStr1 = alarmUsername;
  }

  public String getAlarmUsername() {
    return reservedStr1;
  }

  public void setAlarmPassword(String password) {
    this.reservedStr2 = password;
  }

  public String getAlarmPassword() {
    return reservedStr2;
  }

  public void setAlarmLevel(int alarmLevel) {
    this.reservedInt2 = alarmLevel;
  }

  public int getAlarmLevel() {
    return reservedInt2;
  }

  public void setSubscriptionId(int subscriptionId) {
    this.reservedInt1 = subscriptionId;
  }

  public int getSubscriptionId() {
    return reservedInt1;
  }

  @Override
  public void printLog() {
    LOGGER.info(toString());
  }

  @Override
  public String toString() {
    return "FusionDirector{" +
        "hostIp='" + hostIp + '\'' +
        '}';
  }
}
