package com.huawei.fdvcenterpluginui.utils;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

/**
 * Created by hyuan on 2018/10/31.
 */
public class DaoUtils {

  private static final Log LOGGER = LogFactory.getLog(DaoUtils.class);

  /**
   * create table in h2
   */
//  public static void createTable(Connection con, String sqlFile) throws SQLException {
//    PreparedStatement ps = null;
//    try {
//      ps = con.prepareStatement(sqlFile);
//      ps.executeUpdate();
//    } catch (SQLException e) {
//      throw e;
//    } finally {
//      if (ps != null) {
//        ps.close();
//      }
//    }
//  }

//  public static boolean checkTable(Connection con, String sqlFile) throws SQLException {
//    ResultSet rs = null;
//    boolean tableExist;
//    try {
//      rs = con.getMetaData().getTables(null, null, sqlFile, null);
//      tableExist = rs.next();
//    } catch (SQLException e) {
//      throw e;
//    } finally {
//      if (rs != null) {
//        rs.close();
//      }
//    }
//    return tableExist;
//  }

  /**
   * create table if table doesn't exist
   */
  public static void checkExistAndCreateTable(Connection con, String tableName,
      String createTableSQL) throws SQLException {
    PreparedStatement ps = null;
    ResultSet rs = null;
    try {
      rs = con.getMetaData().getTables(null, null, tableName, null);
      if (!rs.next()) {
        ps = con.prepareStatement(createTableSQL);
        ps.executeUpdate();
      }
    } catch (SQLException e) {
      throw e;
    } finally {
      if (rs != null) {
        try {
          rs.close();
        } catch (SQLException e) {
          LOGGER.warn("Cannot close resource: " + e.getMessage());
        }
      }
      if (ps != null) {
        try {
          ps.close();
        } catch (SQLException e) {
          LOGGER.warn("Cannot close resource: " + e.getMessage());
        }
      }
    }
  }

  /**
   * get h2 DB file path from URL
   */
//  public static String getDBFileFromURL(String url) {
//    return url.replaceAll("jdbc:h2:", "");
//  }

  /**
   * load file content from resources/db folder
   */
//  public static String getDBScript(String sqlFile) throws IOException {
//    InputStream inputStream = null;
//    try {
//      inputStream = Thread.currentThread().getContextClassLoader()
//          .getResourceAsStream("db/" + sqlFile);
//      byte[] buff = new byte[inputStream.available()];
//      if (inputStream.read(buff) != -1) {
//        return new String(buff, "utf-8");
//      }
//    } finally {
//      if (inputStream != null) {
//        inputStream.close();
//      }
//    }
//    return null;
//  }

  public static void checkExistTableColumnAnd(Connection con, String tableName, String columnName,
      String alterSql) throws SQLException {
    PreparedStatement ps1 = null;
    PreparedStatement ps2 = null;
    ResultSet rs = null;
    try {
      String sql = "SELECT * FROM " + tableName + " LIMIT 1";
      ps1 = con.prepareStatement(sql);
      rs = ps1.executeQuery();
      ResultSetMetaData resultSetMetaData = rs.getMetaData();
      for (int i = 0; i < resultSetMetaData.getColumnCount(); i++) {
        if (resultSetMetaData.getColumnName(i + 1).equalsIgnoreCase(columnName)) {
          ps2 = con.prepareStatement(alterSql);
          ps2.executeUpdate();
          break;
        }
      }
    } finally {
      if (ps2 != null) {
        ps2.close();
      }
      if (ps1 != null) {
        ps1.close();
      }
      if (rs != null) {
        rs.close();
      }
    }
  }

  public static void checkNotExistTableColumnAnd(Connection con, String tableName, String columnName,
      String alterSql) throws SQLException {
    PreparedStatement ps1 = null;
    PreparedStatement ps2 = null;
    ResultSet rs = null;
    try {
      String sql = "SELECT * FROM " + tableName + " LIMIT 1";
      ps1 = con.prepareStatement(sql);
      rs = ps1.executeQuery();
      ResultSetMetaData resultSetMetaData = rs.getMetaData();
      for (int i = 0; i < resultSetMetaData.getColumnCount(); i++) {
        if (resultSetMetaData.getColumnName(i + 1).equalsIgnoreCase(columnName)) {
          return;
        }
      }
      ps2 = con.prepareStatement(alterSql);
      ps2.executeUpdate();
    } finally {
      if (ps2 != null) {
        ps2.close();
      }
      if (ps1 != null) {
        ps1.close();
      }
      if (rs != null) {
        rs.close();
      }
    }
  }
}
