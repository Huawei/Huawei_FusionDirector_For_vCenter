package com.huawei.fdvcenterpluginui.services;

import com.huawei.fdvcenterpluginui.dao.FDSettingDao;
import com.huawei.fdvcenterpluginui.entity.VCenterInfo;
import com.huawei.fdvcenterpluginui.exception.IgnorableException;
import com.huawei.fdvcenterpluginui.task.RefreshKeyTask;
import com.huawei.fdvcenterpluginui.utils.CipherUtils;
import com.huawei.fdvcenterpluginui.utils.ConnectedVim;
import com.huawei.fdvcenterpluginui.utils.ThumbprintsUtils;
import com.vmware.connection.ConnectionException;
import java.io.InputStream;
import java.security.cert.CertificateException;
import java.sql.SQLException;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;

public class FDSettingServiceImpl implements FDSettingService {

  private static final Log LOGGER = LogFactory.getLog(FDSettingServiceImpl.class);

  protected static final int RESULT_READ_CERT_ERROR = -90008;

  protected static final int RESULT_FAIL_CODE = -99999;

  protected static final int RESULT_SUCCESS_CODE = 0;

  @Autowired
  private FDSettingDao fdSettingDao;

  @Autowired
  private FDSyncService fdSyncService;

  @Override
  public int saveCrtThumbprints(InputStream inputStream) {
    try {
      String[] thumbprints = new String[]{ThumbprintsUtils.getThumbprintFromCrt(inputStream)};
      String[] tp = fdSettingDao.mergeSaveAndLoadAllThumbprints(thumbprints);
      LOGGER.info("Thumbprints have been saved, new list size is: " + tp.length);
      ThumbprintsUtils.updateContextTrustThumbprints(tp);
      return RESULT_SUCCESS_CODE;
    } catch (CertificateException e) {
      LOGGER.warn("Cannot get thumbprints", e);
      return RESULT_READ_CERT_ERROR;
    } catch (Exception e) {
      LOGGER.error("Cannot get/save thumbprints", e);
      return RESULT_FAIL_CODE;
    }
  }

  @Override
  public void saveThumbprints(String[] thumbprints) {
    try {
      String[] tp = fdSettingDao.mergeSaveAndLoadAllThumbprints(thumbprints);
      LOGGER.info("Thumbprints have been saved, new list size is: " + +tp.length);
      ThumbprintsUtils.updateContextTrustThumbprints(tp);
    } catch (Exception e) {
      LOGGER.warn("Cannot save thumbprints", e);
    }
  }

  @Override
  public String[] getThumbprints() throws SQLException {
    return fdSettingDao.loadThumbprints();
  }

  @Override
  public VCenterInfo getVCenterInfo(boolean maskPwd) {
    synchronized (RefreshKeyTask.class) {
      VCenterInfo vCenterInfo = fdSettingDao.getVCenterInfo();
      if (vCenterInfo != null) {
        vCenterInfo.setPassword(maskPwd ? "" : decryptPassword(vCenterInfo.getPassword()));
      }
      return vCenterInfo;
    }
  }

  @Override
  public int updateVCenterInfo(VCenterInfo vCenterInfo, boolean syncServer,
      boolean testConnection) {
    synchronized (RefreshKeyTask.class) {
      if (vCenterInfo == null) {
        return 0;
      }
      if (testConnection) {
        try {
          ConnectedVim connectedVim = new ConnectedVim(vCenterInfo);
          boolean connected = connectedVim.connect(true);
          if (!connected) {
            throw new IgnorableException("-90010", "Cannot connect to vCenter");
          }
//          this.connectedVim.setVCenterInfo(vCenterInfo);
        } catch (ConnectionException e) {
          throw new IgnorableException("-90010", "Cannot connect to vCenter");
        }
      }
      vCenterInfo.setPassword(encryptPassword(vCenterInfo.getPassword()));
      int result = fdSettingDao.updateVCenterInfo(vCenterInfo);
//      setConnectedVimContext();
      if (syncServer) {
        fdSyncService.syncServers();
      }
      return result;
    }
  }

//  @Override
//  public void setConnectedVimContext() {
//    boolean connected = this.connectedVim.isConnected();
//    LOGGER.info("ConnectedVim status: " + (connected ? "connected" : "not connected"));
//    if (!connected) {
//      VCenterInfo vCenterInfo = getVCenterInfo(false);
//      if (vCenterInfo == null) {
//        LOGGER.info("No vCenter settings, Do not set connectedVim");
//      } else {
//        try {
//          this.connectedVim.setVCenterInfo(vCenterInfo);
//          this.connectedVim.connect(false);
//          LOGGER.info("ConnectedVim is connected");
//        } catch (Exception e) {
//          LOGGER.error("ConnectedVim cannot connect to vCenter", e);
//        }
//      }
//    }
//  }

  private String encryptPassword(String password) {
    return CipherUtils.aesEncode(password);
  }

  private String decryptPassword(String password) {
    return CipherUtils.aesDncode(password);
  }
}
