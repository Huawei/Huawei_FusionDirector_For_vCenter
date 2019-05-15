package com.huawei.fdvcenterpluginui.utils;

import com.vmware.ssl.ThumbprintTrustManager;
import java.io.InputStream;
import java.security.NoSuchAlgorithmException;
import java.security.cert.CertificateException;
import java.util.Set;
import sun.security.x509.X509CertImpl;

public class ThumbprintsUtils {

  /**
   * update thumbprints server context
   * @param thumbprints
   */
  public static void updateContextTrustThumbprints(String[] thumbprints) {
    HttpRequestUtil.updateContextTrustThumbprints(thumbprints);
  }

  public static String getThumbprintFromCrt(InputStream inputStream)
      throws CertificateException, NoSuchAlgorithmException {
    return ThumbprintTrustManager.getThumbprint(new X509CertImpl(inputStream));
  }

  public static Set<String> getRuntimeThumbprints() {
    return ThumbprintTrustManager.getThumbprints();
  }

}
