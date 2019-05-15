package com.vmware.ssl;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.cert.CertificateEncodingException;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;
import java.util.Set;
import java.util.concurrent.CopyOnWriteArraySet;
import javax.xml.bind.DatatypeConverter;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

/**
 * Trust manager by thumbprint.
 */
public class ThumbprintTrustManager implements javax.net.ssl.X509TrustManager {

  private static final String ERROR_MSG =
      "Server certificate chain is not trusted and thumbprint doesn't match";
  private static final Log _logger = LogFactory.getLog(ThumbprintTrustManager.class);
  private static final Set<String> _thumbprints = new CopyOnWriteArraySet<>();

  /**
   * Adds the specified thumbprint to a thumbprint collection of valid thumbprints The thumbprint is
   * added only if not already present.
   *
   * @param thumbprint the thumbprint to be added to the collection
   * @return true if the thumbprint collection did not already contain the specified element
   */
  public static boolean addThumbprint(String thumbprint) {
    return _thumbprints.add(thumbprint);
  }

  @Override
  public X509Certificate[] getAcceptedIssuers() {
    return null;
  }

  @Override
  public void checkServerTrusted(X509Certificate[] certs,
      String authType) throws CertificateException {
    for (X509Certificate cert : certs) {
      checkThumbprint(cert);
    }
  }

  @Override
  public void checkClientTrusted(X509Certificate[] certs, String authType)
      throws CertificateException {
    return;
  }

  /**
   * Extracts the thumbprint from the certificate and verifies that the thumbprint is part of the
   * known valid thumbprints
   *
   * @param cert the thumbprint to be verified
   * @throws CertificateException if the thumbrint is not part of the known thumbrints
   */
  public static void checkThumbprint(X509Certificate cert)
      throws CertificateException {
    String thumbprint = null;
    try {
      thumbprint = getThumbprint(cert);
    } catch (NoSuchAlgorithmException e) {
      throw new CertificateException(ERROR_MSG);
    }
    if (!_thumbprints.contains(thumbprint)) {
      _logger.error(ERROR_MSG);
      throw new CertificateException(ERROR_MSG);
    }
  }

  /**
   * Extracts the thumbprint from the certificate and verifies that the thumbprint is part of the
   * known valid thumbprints
   *
   * @param cert the thumbprint to be verified
   * @throws CertificateException if the thumbrint is not part of the known thumbrints
   */
  public static String getThumbprint(X509Certificate cert)
      throws NoSuchAlgorithmException, CertificateEncodingException {
    MessageDigest md = MessageDigest.getInstance("SHA-1");
    byte[] certBytes = cert.getEncoded();
    byte[] bytes = md.digest(certBytes);
    String thumbprint = DatatypeConverter.printHexBinary(bytes).toLowerCase();
    return thumbprint;
  }

  public static Set<String> getThumbprints() {
    return _thumbprints;
  }

}