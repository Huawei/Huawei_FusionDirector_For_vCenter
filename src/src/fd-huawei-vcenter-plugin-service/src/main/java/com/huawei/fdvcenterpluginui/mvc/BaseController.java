package com.huawei.fdvcenterpluginui.mvc;

import com.huawei.fdvcenterpluginui.entity.ResponseApiBean;
import com.huawei.fdvcenterpluginui.entity.ResponseBodyBean;
import com.huawei.fdvcenterpluginui.exception.IgnorableException;
import com.huawei.fdvcenterpluginui.exception.VcenterException;
import java.net.ConnectException;
import java.security.cert.CertificateException;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.client.RestClientException;

/**
 * Created by hyuan on 2017/5/23.
 */
@Controller
public class BaseController {

  protected static final Log LOGGER = LogFactory.getLog(BaseController.class);

  protected static final String CODE_SUCCESS = "0";

  protected static final String CODE_NOTALL_FAILURE = "-100000";

  private static final String CODE_FAILURE = "-99999";

  private static final String CODE_CONN_EXCEPTION = "-81001";

  private static final String CODE_CERT_EXCEPTION = "-80002";

  private static final String CODE_DB_EXCEPTION = "-70001";

  private static final String PREFIX = "-50";

  private static final String FIELD_CODE = "code";

  private static final String FIELD_DESCRIPTION = "description";

  private static final String FIELD_DATA = "data";

  private static final String FIELD_IPS = "ips";

  private static final ResponseBodyBean FAILURE_BEAN =
      new ResponseBodyBean(CODE_FAILURE, null, null);

  private static final ResponseBodyBean SUCCESS_BEAN =
      new ResponseBodyBean(CODE_SUCCESS, null, null);

  @ExceptionHandler(SQLException.class)
  @ResponseStatus(HttpStatus.OK)
  protected Map<String, Object> handleException(HttpServletRequest request,
      SQLException exception) {
    LOGGER.error("DB Exception!" + exception.getMessage());
    return generateError(CODE_DB_EXCEPTION, exception.getMessage(), null,
        request.getAttribute(FIELD_IPS));
  }

  @ExceptionHandler(DataAccessException.class)
  @ResponseStatus(HttpStatus.OK)
  protected Map<String, Object> handleException(HttpServletRequest request,
      DataAccessException exception) {
    LOGGER.error("DB Exception!" + exception.getMessage());
    return generateError(CODE_DB_EXCEPTION, exception.getMessage(), null,
        request.getAttribute(FIELD_IPS));
  }

  @ExceptionHandler(RestClientException.class)
  @ResponseStatus(HttpStatus.OK)
  protected Map<String, Object> handleException(HttpServletRequest request,
      RestClientException exception) {
    LOGGER.error("Rest client Exception!" + exception.getMessage());
    Throwable rootCause = exception.getRootCause();
    if (rootCause instanceof CertificateException) {
      return generateError(CODE_CERT_EXCEPTION, exception.getMessage(), null,
          request.getAttribute(FIELD_IPS));
    }
    return generateError(CODE_CONN_EXCEPTION, exception.getMessage(), null,
        request.getAttribute(FIELD_IPS));
  }

  @ExceptionHandler(ConnectException.class)
  @ResponseStatus(HttpStatus.OK)
  protected Map<String, Object> handleException(HttpServletRequest request,
      ConnectException exception) {
    LOGGER.error("Connect Exception!" + exception.getMessage());
    return generateError(CODE_CONN_EXCEPTION, exception.getMessage(), null,
        request.getAttribute(FIELD_IPS));
  }

  @ExceptionHandler(IgnorableException.class)
  @ResponseStatus(HttpStatus.OK)
  protected Map<String, Object> handleException(HttpServletRequest request,
      IgnorableException exception) {
    LOGGER.error("Ignorable Exception!" + exception.getMessage());
    return generateError(exception.getCode(), exception.getMessage(), null,
        request.getAttribute(FIELD_IPS));
  }

  @ExceptionHandler(VcenterException.class)
  @ResponseStatus(HttpStatus.OK)
  protected Map<String, Object> handleException(HttpServletRequest request,
      VcenterException exception) {
    LOGGER.error("Plugin Exception!" + exception.getMessage());
    return generateError(exception.getCode(), exception.getMessage(), null,
        request.getAttribute(FIELD_IPS));
  }

  @ExceptionHandler(Exception.class)
  @ResponseStatus(HttpStatus.OK)
  protected Map<String, Object> handleException(HttpServletRequest request, Exception exception) {
    LOGGER.error("System Exception!" + exception.getMessage());
    return generateError(CODE_FAILURE, exception.getMessage(), null,
        request.getAttribute(FIELD_IPS));
  }

  private Map<String, Object> generateError(String code, String message, Object data, Object ips) {
    Map<String, Object> errorMap = new HashMap<>();
    errorMap.put(FIELD_CODE, code);
    errorMap.put(FIELD_DESCRIPTION, message);
    errorMap.put(FIELD_DATA, data);
    if (ips != null) {
      errorMap.put(FIELD_IPS, ips);
    }
    return errorMap;
  }

  protected ResponseBodyBean success() {
    return SUCCESS_BEAN;
  }

  protected ResponseBodyBean success(Object data) {
    return success(data, null);
  }

  protected ResponseBodyBean success(Object data, String description) {
    ResponseBodyBean bodyBean = null;
    bodyBean = new ResponseBodyBean(CODE_SUCCESS, null, null);
    bodyBean.setData(data);
    bodyBean.setDescription(description);
    return bodyBean;
  }

  protected ResponseBodyBean failure() {
    return FAILURE_BEAN;
  }

  protected ResponseBodyBean failure(String description) {
    return failure(CODE_FAILURE, description);
  }

  protected ResponseBodyBean failure(String code, String description) {
    ResponseBodyBean bodyBean = null;
    bodyBean = new ResponseBodyBean(CODE_FAILURE, null, null);
    bodyBean.setDescription(description);
    bodyBean.setCode(code);
    return bodyBean;
  }

  protected ResponseBodyBean failure(String code, String description, Object data) {
    ResponseBodyBean bodyBean = null;
    bodyBean = new ResponseBodyBean(CODE_FAILURE, null, null);
    bodyBean.setDescription(description);
    bodyBean.setCode(code);
    bodyBean.setData(data);

    return bodyBean;
  }

  protected ResponseBodyBean generateResult(ResponseEntity responseEntity) {
    String code = responseEntity.getStatusCode().toString();
    Object data = responseEntity.getBody();
    return new ResponseBodyBean(code, data, "");
  }

  protected ResponseApiBean generateApiResult(ResponseEntity responseEntity, String ip) {
    String code = responseEntity.getStatusCode().toString();
    Object data = responseEntity.getBody();
    HttpHeaders headers = responseEntity.getHeaders();
    return new ResponseApiBean(ip, code, data, headers);
  }

}
