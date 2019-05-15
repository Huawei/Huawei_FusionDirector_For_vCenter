package com.huawei.fdvcenterpluginui.entity;

/**
 * Created by hyuan on 2017/5/26.
 */
public class ResponseListBean extends ResponseBodyBean {

  private int totalNum;

  public ResponseListBean() {
  }

  public ResponseListBean(String code, Object data, String description, int totalNum) {
    super(code, data, description);
    this.totalNum = totalNum;
  }

  public int getTotalNum() {
    return totalNum;
  }

  public void setTotalNum(int totalNum) {
    this.totalNum = totalNum;
  }

  @Override
  public String toString() {
    return "ResponseListBean{" +
        "totalNum=" + totalNum +
        '}';
  }
}
