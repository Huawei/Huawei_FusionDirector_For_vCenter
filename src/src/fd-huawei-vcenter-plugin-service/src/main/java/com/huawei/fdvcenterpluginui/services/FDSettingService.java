package com.huawei.fdvcenterpluginui.services;

import com.huawei.fdvcenterpluginui.entity.VCenterInfo;
import java.io.InputStream;
import java.sql.SQLException;

public interface FDSettingService {

  int saveCrtThumbprints(InputStream inputStream);

  void saveThumbprints(String[] thumbprints);

  String[] getThumbprints() throws SQLException;

  VCenterInfo getVCenterInfo(boolean maskPwd);

  int updateVCenterInfo(VCenterInfo vCenterInfo, boolean syncServer, boolean testConnection);

//  void setConnectedVimContext();

}
