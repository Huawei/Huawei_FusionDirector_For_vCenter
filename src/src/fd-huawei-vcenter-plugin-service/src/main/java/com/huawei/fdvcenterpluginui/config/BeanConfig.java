package com.huawei.fdvcenterpluginui.config;

import com.huawei.fdvcenterpluginui.utils.FileUtils;
import java.io.File;
import java.util.Locale;
import javax.sql.DataSource;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.h2.Driver;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.SimpleDriverDataSource;
import org.springframework.util.StringUtils;

@Configuration
public class BeanConfig {

  private static final Log LOGGER = LogFactory.getLog(BeanConfig.class);

  private static final String VMWARE_RUNTIME_DATA_DIR = "VMWARE_RUNTIME_DATA_DIR";

  private static final String OS = System.getProperty("os.name") == null ? ""
      : System.getProperty("os.name").toLowerCase(Locale.US);

  private static final String URL_PREFIX = "jdbc:h2:";

  private static final String DB_FILE = "fd-huawei-vcenter-plugin-data";

  private static String dbFileFolder;

  @Value("${h2.url}")
  private String url;

  @Bean(name = {"dataSource"})
  public DataSource dataSource() {
    return new SimpleDriverDataSource(new Driver(), jdbcUrl(this.url), "sa", "");
  }

  public String getUrl() {
    return url;
  }

  public static String getDbFile() {
    return DB_FILE;
  }

  public static String getDbFileFolder() {
    return dbFileFolder;
  }

  private static String getVmwareRuntimeDataDir() {
    String vmwareRuntimeDataDir = System.getenv(VMWARE_RUNTIME_DATA_DIR);
    if (StringUtils.hasLength(vmwareRuntimeDataDir)) {
      return vmwareRuntimeDataDir;
    } else {
      LOGGER.error("Cannot get VMWARE_RUNTIME_DATA_DIR from system environment.");
      return null;
    }
  }

  private static Boolean isWindows() {
    return OS.indexOf("windows") >= 0;
  }

  private String jdbcUrl(String url) {
//    if (1 == 1) {
//      return url + DB_FILE;
//    }
    String vmwareDataPath = getVmwareRuntimeDataDir();
    if (vmwareDataPath != null && !"".equals(vmwareDataPath)) {
      if (isWindows()) {
        dbFileFolder = vmwareDataPath;
        return URL_PREFIX + "//" + dbFileFolder + File.separator + DB_FILE;
      } else {
        dbFileFolder = FileUtils.getPath(true);
        return URL_PREFIX + dbFileFolder + File.separator + DB_FILE;
      }
    } else {
      if (isWindows()) {
        dbFileFolder = url.replace("jdbc:h2://", "");
        return url + File.separator + DB_FILE;
      } else {
        dbFileFolder = FileUtils.getPath(true);
        return URL_PREFIX + dbFileFolder + File.separator + DB_FILE;
      }
    }
  }

}
