package com.huawei.fdvcenterpluginui.utils;

import com.huawei.fdvcenterpluginui.exception.VcenterException;
import com.vmware.ssl.ThumbprintTrustManager;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.Proxy;
import java.net.URL;
import java.net.URLEncoder;
import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;
import java.security.cert.X509Certificate;
import java.util.Map;
import javax.net.ssl.HostnameVerifier;
import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLSession;
import javax.net.ssl.SSLSocketFactory;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.client.ClientHttpRequestFactory;
import org.springframework.http.client.SimpleClientHttpRequestFactory;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.DefaultResponseErrorHandler;
import org.springframework.web.client.RestTemplate;

public class HttpRequestUtil {

  private static RestTemplate restTemplate;

  private static final Log LOGGER = LogFactory.getLog(HttpRequestUtil.class);

  private static final int REQUEST_TIMEOUT = 30000; // millis

  private static final ThumbprintTrustManager[] TRUST_MANAGERS = new ThumbprintTrustManager[]{
      new ThumbprintTrustManager()};

  static {
    restTemplate = createDefaultRestTemplate();
  }

  private static RestTemplate createDefaultRestTemplate() {
    final HostnameVerifier PROMISCUOUS_VERIFIER = new HostnameVerifier() {
      public boolean verify(String s, SSLSession sslSession) {
        return true;
      }
    };

    RestTemplate restTpl = new RestTemplate();
    restTpl.setErrorHandler(new DefaultResponseErrorHandler() {
      @Override
      protected boolean hasError(HttpStatus statusCode) {
        return false;
      }
    });

    SimpleClientHttpRequestFactory simpleRequestFactory = new SimpleClientHttpRequestFactory() {
      @Override
      protected void prepareConnection(HttpURLConnection connection, String httpMethod)
          throws IOException {

        if (connection instanceof HttpsURLConnection) {
          ((HttpsURLConnection) connection).setHostnameVerifier(PROMISCUOUS_VERIFIER);
        }
        super.prepareConnection(connection, httpMethod);
      }

      @Override
      protected HttpURLConnection openConnection(URL url, Proxy proxy) throws IOException {
        System.setProperty("https.protocols", "TLSv1.2,TLSv1.1,TLSv1");
        HttpURLConnection httpURLConnection = super.openConnection(url, proxy);
        if (httpURLConnection instanceof HttpsURLConnection) {
          try {
            SSLContext sslContext = SSLContext.getInstance("SSL");
            sslContext.init(null, TRUST_MANAGERS, new java.security.SecureRandom());
            SSLSocketFactory ssf = sslContext.getSocketFactory();
            ((HttpsURLConnection) httpURLConnection).setHostnameVerifier(PROMISCUOUS_VERIFIER);
            ((HttpsURLConnection) httpURLConnection).setSSLSocketFactory(ssf);
          } catch (Exception e) {
            LOGGER.error("Cannot set SSL context", e);
          }
        }
        return httpURLConnection;
      }
    };

    simpleRequestFactory.setConnectTimeout(REQUEST_TIMEOUT);
    simpleRequestFactory.setReadTimeout(REQUEST_TIMEOUT);

    restTpl.setRequestFactory(simpleRequestFactory);
//    List<HttpMessageConverter<?>> list = new ArrayList<HttpMessageConverter<?>>();
//    list.add(new GsonHttpMessageConverter());
//    list.add(new FormHttpMessageConverter());
//    list.add(new SourceHttpMessageConverter());
//    list.add(new StringHttpMessageConverter());
//    restTpl.setMessageConverters(list);
    return restTpl;
  }

  public static void turnOffSslChecking() {
    try {
      SSLUtil.turnOffSslChecking();
    } catch (Exception e) {
      LOGGER.info("Cannot turn off ssl checking", e);
    }
  }

  /**
   *
   * @param url
   * @param method
   * @param headers
   * @param body
   * @param responseType
   * @param <T>
   * @return
   */
  public static <T> ResponseEntity<T> requestWithBody(String url, HttpMethod method,
      MultiValueMap<String, String> headers, String body, Class<T> responseType) {
    if (url == null || method == null) {
      return null;
    }
    HttpEntity<String> requestEntity = new HttpEntity<String>(body, headers);
//    LOGGER.info("Request url: " + url);
//    LOGGER.info("Request method: " + method.toString());
//    LOGGER.info("Request header: " + new HashMap<>(headers));
//    LOGGER.info("Request body: " + body);
    return restTemplate.exchange(url, method, requestEntity, responseType);
  }

  public static <T> ResponseEntity<T> requestWithBody(String url, HttpMethod method,
      MultiValueMap<String, String> headers, MultiValueMap<String, Object> body,
      Class<T> responseType, int connectTimeout, int readTimeout) {
    if (url == null || method == null) {
      return null;
    }
    HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(body, headers);
    RestTemplate tpl = createDefaultRestTemplate();
    ClientHttpRequestFactory requestFactory = tpl.getRequestFactory();
    try {
      requestFactory.getClass().getMethod("setConnectTimeout", int.class)
          .invoke(requestFactory, connectTimeout);
      requestFactory.getClass().getMethod("setReadTimeout", int.class)
          .invoke(requestFactory, readTimeout);
      requestFactory.getClass().getMethod("setBufferRequestBody", boolean.class)
          .invoke(requestFactory, false);
    } catch (Exception e) {
      LOGGER.warn("Cannot invoke method", e);
    }
    return tpl.exchange(url, method, requestEntity, responseType);
  }

  /**
   * Return key=value param concat by &, value is encoded
   */
  public static String concatParamAndEncode(Map<String, String> paramMap) {
    if (paramMap == null || paramMap.isEmpty()) {
      return "";
    }
    StringBuilder buff = new StringBuilder();
    for (Map.Entry<String, String> entry : paramMap.entrySet()) {
      if (buff.length() > 0) {
        buff.append("&");
      }
      buff.append(entry.getKey()).append("=").append(encode(entry.getValue()));
    }
    return buff.toString();
  }

  /**
   * Return key=value param concat by &
   */
  public static String concatParam(Map<String, String> paramMap) {
    if (paramMap == null || paramMap.isEmpty()) {
      return "";
    }
    StringBuilder buff = new StringBuilder();
    for (Map.Entry<String, String> entry : paramMap.entrySet()) {
      if (buff.length() > 0) {
        buff.append("&");
      }
      buff.append(entry.getKey()).append("=").append(entry.getValue());
    }
    return buff.toString();
  }

  private static String encode(String str) {
    try {
      return URLEncoder.encode(str, "UTF-8");
    } catch (UnsupportedEncodingException e) {
      throw new VcenterException("FD URL Encode error");
    }
  }

  public static void updateContextTrustThumbprints(String[] thumbprints) {
    for (String thumbprint : thumbprints) {
      TRUST_MANAGERS[0].addThumbprint(thumbprint);
    }
  }

  static class SSLUtil {

    private static final TrustManager[] UNQUESTIONING_TRUST_MANAGER = new TrustManager[]{
        new X509TrustManager() {
          public X509Certificate[] getAcceptedIssuers() {
            return new X509Certificate[0];
          }

          public void checkClientTrusted(X509Certificate[] certs, String authType) {
          }

          public void checkServerTrusted(X509Certificate[] certs, String authType) {
          }
        }
    };

    public static void turnOffSslChecking()
        throws NoSuchAlgorithmException, KeyManagementException {
      // Install the all-trusting trust manager
      final SSLContext sc = SSLContext.getInstance("SSL");
      sc.init(null, UNQUESTIONING_TRUST_MANAGER, null);
      HttpsURLConnection.setDefaultSSLSocketFactory(sc.getSocketFactory());
    }

    public static void turnOnSslChecking() throws KeyManagementException, NoSuchAlgorithmException {
      // Return it to the initial state (discovered by reflection, now hardcoded)
      SSLContext.getInstance("SSL").init(null, null, null);
    }

    private SSLUtil() {
      throw new UnsupportedOperationException("Do not instantiate libraries.");
    }
  }

}

