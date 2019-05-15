package com.huawei.fdvcenterpluginui.dao;

import com.huawei.fdvcenterpluginui.entity.FDSyncServer;
import com.huawei.fdvcenterpluginui.utils.DaoUtils;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.util.StringUtils;

public class FDSyncDao extends FDBaseDao {

  @Autowired
  private DataSource dataSource;

  @Autowired
  private JdbcTemplate jdbcTemplate;

  @Override
  public void initTables() throws SQLException {
    String createTableSql = "CREATE TABLE \"HW_FD_SYNC_SERVER\" (\n"
        + "\"ID\"  integer PRIMARY KEY AUTO_INCREMENT NOT NULL,\n"
        + "\"FD_HOST_ID\"  int,\n"
        + "\"UUID\"  nvarchar(64) NOT NULL,\n"
        + "\"DEVICE_ID\"  nvarchar(64),\n"
        + "\"PARENT_DEVICE_ID\"  nvarchar(64),\n"
        + "\"HA_HOST_SYSTEM\"  nvarchar(255),\n"
        + "\"CREATE_TIME\"  datetime NOT NULL,\n"
        + "FOREIGN KEY (FD_HOST_ID)\n"
        + "        REFERENCES HW_FD_HOST (ID)\n"
        + "        ON DELETE CASCADE\n"
        + ");";
    Connection connection = dataSource.getConnection();
    try {
      // create table
      DaoUtils.checkExistAndCreateTable(connection, "HW_FD_SYNC_SERVER", createTableSql);
    } finally {
      connection.close();
    }
  }

  @Override
  public String[] getTables() {
    return new String[]{"HW_FD_SYNC_SERVER"};
  }

  public void updateFDSyncServer(Collection<FDSyncServer> fdSyncServers) {
    String sql1 = "DELETE FROM HW_FD_SYNC_SERVER";
    jdbcTemplate.update(sql1);
    if (fdSyncServers == null || fdSyncServers.isEmpty()) {
      return;
    }
    String sql2 =
        "INSERT INTO HW_FD_SYNC_SERVER(FD_HOST_ID,UUID,DEVICE_ID,PARENT_DEVICE_ID,HA_HOST_SYSTEM,CREATE_TIME) "
            + "VALUES (?,?,?,?,?,?)";
    List<Object[]> params = new ArrayList<>();
    for (FDSyncServer fdSyncServer : fdSyncServers) {
      params.add(new Object[]{fdSyncServer.getFdHostId(), fdSyncServer.getUuid(),
          fdSyncServer.getDeviceId(), fdSyncServer.getParentDeviceId(),
          fdSyncServer.getHaHostSystem(), fdSyncServer.getCreateTime()});
    }
    jdbcTemplate.batchUpdate(sql2, params);
  }

  public List<FDSyncServer> loadFDSyncServer() {
    return jdbcTemplate.query("SELECT * FROM HW_FD_SYNC_SERVER", new RowMapper<FDSyncServer>() {
      @Override
      public FDSyncServer mapRow(ResultSet resultSet, int i) throws SQLException {
        return map(resultSet);
      }
    });
  }

  public FDSyncServer loadFDSyncServer(String hostSystem) {
    List<FDSyncServer> fdSyncServerList = jdbcTemplate
        .query("SELECT * FROM HW_FD_SYNC_SERVER WHERE HA_HOST_SYSTEM=?", defaultRowMapper(),
            hostSystem);
    return fdSyncServerList.isEmpty() ? null : fdSyncServerList.get(0);
  }

  public List<FDSyncServer> loadSyncServersByDeviceId(String deviceId) {
    if (!StringUtils.hasText(deviceId)) {
      return Collections.EMPTY_LIST;
    }
    return jdbcTemplate.query(
        "SELECT * FROM HW_FD_SYNC_SERVER WHERE DEVICE_ID=? OR PARENT_DEVICE_ID=?",
        defaultRowMapper(), deviceId, deviceId);
  }

  private RowMapper defaultRowMapper() {
    return new RowMapper<FDSyncServer>() {
      @Override
      public FDSyncServer mapRow(ResultSet resultSet, int i) throws SQLException {
        return map(resultSet);
      }
    };
  }

  private FDSyncServer map(ResultSet rs) throws SQLException {
    FDSyncServer fdSyncServer = new FDSyncServer();
    fdSyncServer.setId(rs.getInt("ID"));
    fdSyncServer.setFdHostId(rs.getInt("FD_HOST_ID"));
    fdSyncServer.setUuid(rs.getString("UUID"));
    fdSyncServer.setDeviceId(rs.getString("DEVICE_ID"));
    fdSyncServer.setParentDeviceId(rs.getString("PARENT_DEVICE_ID"));
    fdSyncServer.setHaHostSystem(rs.getString("HA_HOST_SYSTEM"));
    fdSyncServer.setCreateTime(rs.getTimestamp("CREATE_TIME"));
    return fdSyncServer;
  }

}
