package com.huawei.fdvcenterpluginui.utils;

import com.huawei.fdvcenterpluginui.config.BeanConfig;
import com.huawei.fdvcenterpluginui.exception.VcenterException;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FilenameFilter;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.nio.file.FileSystem;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.attribute.AclEntry;
import java.nio.file.attribute.AclEntry.Builder;
import java.nio.file.attribute.AclEntryPermission;
import java.nio.file.attribute.AclEntryType;
import java.nio.file.attribute.AclFileAttributeView;
import java.nio.file.attribute.PosixFilePermission;
import java.nio.file.attribute.UserPrincipal;
import java.nio.file.attribute.UserPrincipalLookupService;
import java.util.Collection;
import java.util.EnumSet;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Locale;
import java.util.Set;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.util.StringUtils;

/**
 * Created by hyuan on 2018/10/31.
 */
public class FileUtils {

  private static final Log LOGGER = LogFactory.getLog(FileUtils.class);

  private static final String OS = System.getProperty("os.name") == null ? ""
      : System.getProperty("os.name").toLowerCase(Locale.US);

  private static final String VMWARE_LINUX60_DIR = "/home/vsphere-client/base";

  private static final String VMWARE_LINUX60_DB_DIR = "/home/vsphere-client";

  private static final String VMWARE_LINUX_PATH_SYS_PROP = "VMWARE_VCHA_SMALLFILES_DIR";

  private static final String VMWARE_WINDOWS_DIR = "C:/ProgramData/VMware/vCenterServer/runtime/base";

  public static final String BASE_FILE_NAME = "fd_baseV3.txt";

  public static final String WORK_FILE_NAME = "fd_workV3.txt";

  private static String PATH = null;

  public static String getKey(String fileName) {
    File file = new File(getPath() + File.separator + fileName);
    createFile(file);
    if (file.length() > 0) {
      FileInputStream fis = null;
      byte[] buff = new byte[128];
      try {
        fis = new FileInputStream(file);
        int len = fis.read(buff);
        return new String(buff, 0, len);
      } catch (IOException e) {
        LOGGER.error(e.getMessage());
      } finally {
        if (fis != null) {
          try {
            fis.close();
          } catch (IOException e) {
            LOGGER.warn("Cannot close resource", e);
          }
        }
      }
    }
    return null;
  }

  public static void saveKey(String key, String fileName) {
    File file = new File(getPath() + File.separator + fileName);
    createFile(file);
    FileOutputStream f = null;
    OutputStreamWriter out = null;
    BufferedWriter bw = null;
    try {
      f = new FileOutputStream(file, false);
      out = new OutputStreamWriter(f, "utf-8");
      bw = new BufferedWriter(out);
      bw.write(key);
    } catch (IOException e) {
      LOGGER.error(e.getMessage() + " save key have an error:" + key);
    } finally {
      if (bw != null) {
        try {
          bw.close();
        } catch (IOException e) {
          LOGGER.error(e.getMessage());
        }
      }
      if (out != null) {
        try {
          out.close();
        } catch (IOException e) {
          LOGGER.error(e.getMessage());
        }
      }
      if (f != null) {
        try {
          f.close();
        } catch (IOException e) {
          LOGGER.error(e.getMessage());
        }
      }
    }
  }

  private static void createFile(File file) {
    // check if file exists
    if (!file.exists()) {
      LOGGER.info("key file not exists, create it ...");
      try {
        createDir(getPath());
        boolean re = file.createNewFile();
        if (re) {
          setFilePermission(file);
        } else {
          LOGGER.info("create file failed");
        }
      } catch (IOException e) {
        LOGGER.error(e.getMessage());
      }
    }
  }

  private static void setFilePermission(File file) throws IOException {
    if (isWindows()) {
      setWindowsFilePermission(file);
    } else {
      setLinuxFilePermission(file);
    }
  }

  public static void setWindowsFilePermission(File file) throws IOException {
    Path path = Paths.get(file.getAbsolutePath());

    // Read Acl
    AclFileAttributeView view = Files.getFileAttributeView(path, AclFileAttributeView.class);
    List<AclEntry> acl = view.getAcl();
//    for (AclEntry ace : acl) {
//      StringBuffer permsStr = new StringBuffer();
//      for (AclEntryPermission perm : ace.permissions()) {
//        permsStr.append(perm.name() + " ");
//      }
//      LOGGER.info("Ace Permissions: " + permsStr.toString().trim());
//    }
    acl.clear();
    // Add Acl
    // Get user
    FileSystem fileSystem = path.getFileSystem();
    if (fileSystem != null) {
      UserPrincipalLookupService userPrincipalLookupService = fileSystem
          .getUserPrincipalLookupService();
      if (userPrincipalLookupService != null) {
        Collection<String> users = new LinkedHashSet<>();
        users.add(System.getProperty("user.name")); // current user
        users.add(VCClientUtils.getFlashClientValue()); // default flash user
        users.add(VCClientUtils.getHtml5ClientValue()); // default h5 user
        for (String userName : users) {
          try {
            UserPrincipal user = userPrincipalLookupService
                .lookupPrincipalByName(userName);
            AclEntry ae = buildUserAclEntry(user);
            if (ae != null) {
              acl.add(0, ae); // insert before any DENY entries
            }
          } catch (Exception e) {
            LOGGER.warn("Cannot set file permission on user: " + userName, e);
          }
        }
      }
    }
    view.setAcl(acl);
  }

  private static AclEntry buildUserAclEntry(UserPrincipal user) {
    try {
      return defaultPermissionAEBuilder().setPrincipal(user).build();
    } catch (Exception e) {
      LOGGER.warn("Cannot set AclEntry on " + user, e);
      return null;
    }
  }

  private static Builder defaultPermissionAEBuilder() {
    return AclEntry.newBuilder().setPermissions(EnumSet.of(
        AclEntryPermission.READ_NAMED_ATTRS,
        AclEntryPermission.WRITE_NAMED_ATTRS,
        AclEntryPermission.APPEND_DATA,
        AclEntryPermission.READ_ACL,
        AclEntryPermission.WRITE_OWNER,
        AclEntryPermission.DELETE_CHILD,
        AclEntryPermission.SYNCHRONIZE,
        AclEntryPermission.WRITE_DATA,
        AclEntryPermission.WRITE_ATTRIBUTES,
        AclEntryPermission.READ_DATA,
        AclEntryPermission.DELETE,
        AclEntryPermission.WRITE_ACL,
        AclEntryPermission.READ_ATTRIBUTES,
        AclEntryPermission.EXECUTE
    )).setType(AclEntryType.ALLOW);
  }

  public static void setLinuxFilePermission(File file) throws IOException {
    Set<PosixFilePermission> perms = new HashSet<PosixFilePermission>();
    perms.add(PosixFilePermission.OWNER_READ);
    perms.add(PosixFilePermission.OWNER_WRITE);
    perms.add(PosixFilePermission.GROUP_READ);
    perms.add(PosixFilePermission.GROUP_WRITE);
    perms.remove(PosixFilePermission.OTHERS_READ);
    perms.remove(PosixFilePermission.OTHERS_WRITE);
    perms.remove(PosixFilePermission.OTHERS_EXECUTE);
    try {
      Path path = Paths.get(file.getAbsolutePath());
      Files.setPosixFilePermissions(path, perms);
    } catch (Exception e) {
      LOGGER.error("Change folder " + file.getAbsolutePath() + " permission failed.", e);
    }
  }

  private static Boolean isWindows() {
    return OS.indexOf("windows") >= 0;
  }

  public static String getPath(boolean isDBPath) {
    if (isWindows()) {
      return VMWARE_WINDOWS_DIR;
    } else {
      // /etc/vmware/service-state
      String huaweiParentDir = System.getenv().get(VMWARE_LINUX_PATH_SYS_PROP);
      LOGGER.info(VMWARE_LINUX_PATH_SYS_PROP + ": " + huaweiParentDir);
      // if environment exists
      String linuxDir;
      if (StringUtils.hasText(huaweiParentDir)) {
        try {
          Set<PosixFilePermission> posixFilePermissions = Files
              .getPosixFilePermissions(Paths.get(huaweiParentDir));
          if (posixFilePermissions.contains(PosixFilePermission.GROUP_READ) && posixFilePermissions
              .contains(PosixFilePermission.GROUP_WRITE)) {
            linuxDir = huaweiParentDir + "/huawei";
            createDir(linuxDir);
          } else {
            throw new VcenterException("No appropriate group permission: " + huaweiParentDir);
          }
        } catch (IOException e) {
          LOGGER.error("Cannot get path permission " + huaweiParentDir, e);
          throw new VcenterException("Cannot get path permission " + huaweiParentDir);
        }
      } else {
        // 6.0 doesn't support H5, so return flash version path
        linuxDir = (isDBPath ? VMWARE_LINUX60_DB_DIR : VMWARE_LINUX60_DIR);
      }
      LOGGER.debug("Linux file path: " + linuxDir);
      return linuxDir;
    }
  }

  public static String getPath() {
    if (!StringUtils.hasText(PATH)) {
      PATH = getPath(false);
    }
    return PATH;
  }

  public static boolean createDir(String destDirName) {
    File dir = new File(destDirName);
    if (dir.exists()) {
      LOGGER.info("Cannot create folder because it exists already");
      return false;
    }
    if (!destDirName.endsWith(File.separator)) {
      destDirName = destDirName + File.separator;
    }
    if (dir.mkdirs()) {
      LOGGER.info("folder has been created！" + destDirName);
      if (!isWindows()) {
        try {
          LOGGER.info("Setting default permission on folder " + destDirName);
          Runtime.getRuntime().exec("setfacl -d -m group:users:rw " + destDirName);
        } catch (IOException e) {
          LOGGER.error("Cannot set default permission on folder " + destDirName, e);
        }
      }
      return true;
    } else {
      LOGGER.error("folder cannot be created！");
      return false;
    }
  }

  public static void deleteDBFile() {
    String fileFolder = BeanConfig.getDbFileFolder();
    LOGGER.info("Deleting file " + BeanConfig.getDbFile());
    File folder = new File(fileFolder);
    if (folder.isDirectory()) {
      File[] files = folder.listFiles(new FilenameFilter() {
        @Override
        public boolean accept(File dir, String name) {
          return name.startsWith(BeanConfig.getDbFile());
        }
      });
      if (files != null) {
        for (File file : files) {
          file.delete();
        }
      }
    }
  }

  public static void deleteKeyFiles() {
    String keyFilesFolder = getPath() + File.separator;
    LOGGER.info("Deleting key from folder...");
    new File(keyFilesFolder + BASE_FILE_NAME).delete();
    new File(keyFilesFolder + WORK_FILE_NAME).delete();
  }

}
