package com.huawei.fdvcenterpluginui.services;

import com.huawei.fdvcenterpluginui.entity.Logable;
import com.huawei.fdvcenterpluginui.entity.RequestLoggable;
import com.huawei.fdvcenterpluginui.entity.ResponseApiListBean;
import java.util.Arrays;
import javax.servlet.http.HttpServletRequest;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.aspectj.lang.JoinPoint;

/**
 * Created by hyuan on 2018/10/31.
 */
public class LogAspect {

  private static final Log LOGGER = LogFactory.getLog(LogAspect.class);
  private static final String UNKNOWN = "UNKNOWN";

  public void logRequest(JoinPoint joinPoint) {
    try {
      String requestFrom = UNKNOWN;
      if (joinPoint.getArgs() != null) {
        for (Object param : joinPoint.getArgs()) {
          if (param instanceof HttpServletRequest) {
            requestFrom = ((HttpServletRequest) param).getRemoteAddr();
            break;
          }
        }
      }

      if ("FDController.postFdApi(..)".equalsIgnoreCase(joinPoint.getSignature().toShortString())
          || "FDController.postFdUpload(..)"
          .equalsIgnoreCase(joinPoint.getSignature().toShortString())) {
        StringBuilder argsBuff = new StringBuilder();
        for (Object arg : joinPoint.getArgs()) {
          if (arg instanceof String) {
            argsBuff.append(arg).append(" ");
          } else if (arg instanceof String[]) {
            argsBuff.append(Arrays.asList((String[]) arg));
          } else if (arg instanceof RequestLoggable) {
            argsBuff.append(((RequestLoggable) arg).getMessage());
          }
        }
        LOGGER
            .info("Request from " + requestFrom + ": " + joinPoint.getSignature().toShortString()
                + ", " + argsBuff.toString());
      } else {
        LOGGER
            .info("Request from " + requestFrom + ": " + joinPoint.getSignature().toShortString());
      }
    } catch (Exception e) {
      LOGGER.warn(e);
    }
  }

  public void logFailureResult(JoinPoint joinPoint, Object result) {
    if (result instanceof ResponseApiListBean) {
      String responseCode = ((ResponseApiListBean) result).getCode();
      if (responseCode != null && responseCode.equals("-1")) {
        Object[] args = joinPoint.getArgs();
        for (Object arg : args) {
          if (arg instanceof Logable) {
            ((Logable) arg).printLog();
          }
        }
        if (result instanceof Logable) {
          ((Logable) result).printLog();
        }
      }
    }
  }

  public void logException(JoinPoint joinPoint) {
    Object[] args = joinPoint.getArgs();
    for (Object arg : args) {
      if (arg instanceof Logable) {
        ((Logable) arg).printLog();
      }
    }
  }

}
