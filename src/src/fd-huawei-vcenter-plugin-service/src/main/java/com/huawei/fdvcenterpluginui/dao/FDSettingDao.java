package com.huawei.fdvcenterpluginui.dao;

import com.huawei.fdvcenterpluginui.entity.VCenterInfo;
import com.huawei.fdvcenterpluginui.utils.DaoUtils;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

public class FDSettingDao extends FDBaseDao {

  @Autowired
  private DataSource dataSource;

  @Autowired
  private JdbcTemplate jdbcTemplate;

  @Override
  public void initTables() throws SQLException {
    String createTableSql = "CREATE TABLE \"HW_FD_THUMBPRINT\" (\n"
        + "  \"THUMBPRINT\"  varchar(255) PRIMARY KEY\n"
        + ");";
    String createVcenterInfoTableSql = "CREATE TABLE \"HW_VCENTER_INFO\" (\n"
        + "\"HOST_IP\"  nvarchar(32),\n"
        + "\"HOST_PORT\"  integer,\n"
        + "\"USERNAME\"  nvarchar(128),\n"
        + "\"PASSWORD\"  nvarchar(255)\n"
        + ");";
    Connection connection = dataSource.getConnection();
    try {
      DaoUtils.checkExistAndCreateTable(connection, "HW_FD_THUMBPRINT", createTableSql);
      DaoUtils.checkExistAndCreateTable(connection, "HW_VCENTER_INFO", createVcenterInfoTableSql);
    } finally {
      connection.close();
    }
  }

  @Override
  public String[] getTables() {
    return new String[]{"HW_FD_THUMBPRINT", "HW_VCENTER_INFO"};
  }

  public String[] mergeSaveAndLoadAllThumbprints(String[] thumbprints) throws SQLException {
    if (thumbprints != null && thumbprints.length > 0) {
      Set<String> thumbprintSet = new HashSet<>(Arrays.asList(loadThumbprints()));
      thumbprintSet.addAll(Arrays.asList(thumbprints));
      jdbcTemplate.update("DELETE FROM HW_FD_THUMBPRINT");
      List<Object[]> argsList = new ArrayList<>();
      for (String thumbprint : thumbprintSet) {
        argsList.add(new Object[]{thumbprint});
      }
      jdbcTemplate.batchUpdate("INSERT INTO HW_FD_THUMBPRINT(THUMBPRINT) VALUES(?)", argsList);
      return thumbprintSet.toArray(new String[thumbprintSet.size()]);
    }
    return new String[0];
  }

  public String[] loadThumbprints() throws SQLException {
    List<String> thumbprints = jdbcTemplate
        .query("SELECT DISTINCT THUMBPRINT FROM HW_FD_THUMBPRINT", new RowMapper<String>() {
          @Override
          public String mapRow(ResultSet resultSet, int i) throws SQLException {
            return resultSet.getString("THUMBPRINT");
          }
        });
    return thumbprints.toArray(new String[thumbprints.size()]);
  }

  public VCenterInfo getVCenterInfo() {
    List<VCenterInfo> vCenterInfoList = jdbcTemplate
        .query("SELECT * FROM HW_VCENTER_INFO", new RowMapper<VCenterInfo>() {
          @Override
          public VCenterInfo mapRow(ResultSet resultSet, int i) throws SQLException {
            return map(resultSet);
          }
        });
    return (vCenterInfoList == null || vCenterInfoList.isEmpty()) ? null : vCenterInfoList.get(0);
  }

  public int updateVCenterInfo(VCenterInfo vCenterInfo) {
    if (jdbcTemplate
        .update("UPDATE HW_VCENTER_INFO SET HOST_IP=?,HOST_PORT=?,USERNAME=?,PASSWORD=?",
            vCenterInfo.getHostIp(), vCenterInfo.getHostPort(), vCenterInfo.getUsername(),
            vCenterInfo.getPassword()) > 0) {
      return 1;
    }
    return jdbcTemplate.update(
        "INSERT INTO HW_VCENTER_INFO(HOST_IP,HOST_PORT,USERNAME,PASSWORD) VALUES(?,?,?,?)",
        vCenterInfo.getHostIp(), vCenterInfo.getHostPort(), vCenterInfo.getUsername(),
        vCenterInfo.getPassword());
  }

  private VCenterInfo map(ResultSet resultSet) throws SQLException {
    VCenterInfo vCenterInfo = new VCenterInfo();
    vCenterInfo.setHostIp(resultSet.getString("HOST_IP"));
    vCenterInfo.setHostPort(resultSet.getInt("HOST_PORT"));
    vCenterInfo.setUsername(resultSet.getString("USERNAME"));
    vCenterInfo.setPassword(resultSet.getString("PASSWORD"));
    return vCenterInfo;
  }
}
