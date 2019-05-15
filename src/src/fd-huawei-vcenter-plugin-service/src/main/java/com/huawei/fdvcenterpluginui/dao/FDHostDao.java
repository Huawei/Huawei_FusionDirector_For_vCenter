package com.huawei.fdvcenterpluginui.dao;

import com.huawei.fdvcenterpluginui.entity.FusionDirector;
import com.huawei.fdvcenterpluginui.utils.DaoUtils;
import com.huawei.fdvcenterpluginui.utils.StringUtil;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import javax.sql.DataSource;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.util.StringUtils;

public class FDHostDao extends FDBaseDao {

  private static final Log LOGGER = LogFactory.getLog(FDHostDao.class);

  @Autowired
  private DataSource dataSource;

  @Autowired
  private JdbcTemplate jdbcTemplate;

  @Autowired
  private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

  @Override
  public void initTables() throws SQLException {
    String createTableSql = "CREATE TABLE \"HW_FD_HOST\" (\n"
        + "\"ID\"  integer PRIMARY KEY AUTO_INCREMENT NOT NULL,\n"
        + "\"HOST_IP\"  nvarchar(255),\n"
        + "\"ALIAS_NAME\"  nvarchar(255),\n"
        + "\"LOGIN_ACCOUNT\"  nvarchar(255),\n"
        + "\"LOGIN_PWD\"  nvarchar(255),\n"
        + "\"RESERVED_INT1\"  int,\n"
        + "\"RESERVED_INT2\"  int,\n"
        + "\"RESERVED_STR1\"  nvarchar(255),\n"
        + "\"RESERVED_STR2\"  nvarchar(255),\n"
        + "\"LAST_MODIFY_TIME\"  datetime,\n"
        + "\"CREATE_TIME\"  datetime NOT NULL"
        + ");";
    String addHAEnabled = "ALTER TABLE HW_FD_HOST ADD HA_STATUS int;";
    String addAlarmEnabled = "ALTER TABLE HW_FD_HOST ADD ALARM_STATUS int;";
    String addHostPort = "ALTER TABLE HW_FD_HOST ADD PORT int default 443;";
    Connection connection = dataSource.getConnection();
    try {
      // create table
      DaoUtils.checkExistAndCreateTable(connection, "HW_FD_HOST", createTableSql);
      // add columns
      DaoUtils.checkNotExistTableColumnAnd(connection, "HW_FD_HOST", "HA_STATUS", addHAEnabled);
      DaoUtils
          .checkNotExistTableColumnAnd(connection, "HW_FD_HOST", "ALARM_STATUS", addAlarmEnabled);
      DaoUtils.checkNotExistTableColumnAnd(connection, "HW_FD_HOST", "PORT", addHostPort);
    } finally {
      connection.close();
    }
  }

  @Override
  public String[] getTables() {
    return new String[]{"HW_FD_HOST"};
  }

//  public void initDBSeq(String... names) {
//    for (String name : names) {
//      if (StringUtils.hasText(name)) {
//        jdbcTemplate.execute("CREATE SEQUENCE IF NOT EXISTS " + name + " START WITH 1");
//      }
//    }
//  }
//
//  public int getCurrValOfSeq(String seqName) {
//    return jdbcTemplate.queryForObject("SELECT CURRVAL(?)", new Object[]{seqName}, Integer.class);
//  }
//
//  public int getNextValOfSeq(String seqName) {
//    return jdbcTemplate.queryForObject("SELECT NEXTVAL(?)", new Object[]{seqName}, Integer.class);
//  }

  public List<FusionDirector> getFusionDirectorList(String ip, int pageNo, int pageSize) {
    if (isValidFDIP(ip)) {
      StringBuilder sql = new StringBuilder("SELECT * FROM HW_FD_HOST");
      if (StringUtils.hasLength(ip)) {
        sql.append(" WHERE HOST_IP LIKE ?");
      }
      sql.append(" ORDER BY last_modify_time DESC");
      if (pageSize > 0) {
        sql.append(" LIMIT ").append(pageSize).append(" OFFSET ").append((pageNo - 1) * pageSize);
      }

      if (StringUtils.hasLength(ip)) {
        return jdbcTemplate
            .query(sql.toString(), new String[]{"%" + ip + "%"}, new RowMapper<FusionDirector>() {
              @Override
              public FusionDirector mapRow(ResultSet resultSet, int i) throws SQLException {
                return map(resultSet);
              }
            });
      } else {
        return jdbcTemplate
            .query(sql.toString(), new RowMapper<FusionDirector>() {
              @Override
              public FusionDirector mapRow(ResultSet resultSet, int i) throws SQLException {
                return map(resultSet);
              }
            });
      }
    } else {
      LOGGER.info("Invalid IP search criteria: " + ip);
      return Collections.EMPTY_LIST;
    }
  }

  public int getFusionDirectorListCount(String ip) {
    if (isValidFDIP(ip)) {
      if (StringUtils.hasLength(ip)) {
        return jdbcTemplate.queryForObject("SELECT count(1) FROM HW_FD_HOST WHERE HOST_IP LIKE ?",
            new String[]{"%" + ip + "%"}, Integer.class);
      } else {
        return jdbcTemplate.queryForObject("SELECT count(1) FROM HW_FD_HOST", Integer.class);
      }
    } else {
      return 0;
    }
  }

  private static boolean isValidFDIP(String ip) {
    String ipRegex = "[0-9\\.]*";
    String notHostRegex = ".*[!$^*();:'\"?]+.*";
    return ip == null || ip.matches(ipRegex) || !ip.matches(notHostRegex);
  }

  public int addFusionDirector(FusionDirector fd) {
    return jdbcTemplate.update(
        "INSERT INTO HW_FD_HOST(HOST_IP,ALIAS_NAME,LOGIN_ACCOUNT,LOGIN_PWD,"
            + "RESERVED_INT1,RESERVED_INT2,RESERVED_STR1,RESERVED_STR2,"
            + "CREATE_TIME,LAST_MODIFY_TIME,HA_STATUS,ALARM_STATUS,PORT) "
            + "VALUES (?,?,?,?,?,?,?,?,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,?,?,?)",
        fd.getHostIp(), fd.getAliasName(), fd.getLoginAccount(), fd.getLoginPwd(),
        fd.getReservedInt1(), fd.getReservedInt2(), fd.getReservedStr1(), fd.getReservedStr2(),
        fd.getHaStatus(), fd.getAlarmStatus(), fd.getPort());
  }

  public int updateFusionDirector(FusionDirector fd) {
    return jdbcTemplate.update(
        "UPDATE HW_FD_HOST SET HOST_IP=?,ALIAS_NAME=?,LOGIN_ACCOUNT=?,LOGIN_PWD=?,"
            + "LAST_MODIFY_TIME=CURRENT_TIMESTAMP,RESERVED_INT2=?,RESERVED_STR1=?,"
            + "RESERVED_STR2=?,HA_STATUS=?,ALARM_STATUS=?,PORT=? WHERE ID=?",
        fd.getHostIp(), fd.getAliasName(), fd.getLoginAccount(), fd.getLoginPwd(),
        fd.getReservedInt2(), fd.getReservedStr1(), fd.getReservedStr2(),
        fd.getHaStatus(), fd.getAlarmStatus(), fd.getPort(), fd.getId());
  }

  public int updateSubscribedId(String ip, Integer subscribedId) {
    return jdbcTemplate
        .update("UPDATE HW_FD_HOST SET RESERVED_INT1=? WHERE HOST_IP=?", subscribedId, ip);
  }

  public int deleteFusionDirector(Integer[] ids) {
    if (ids == null || ids.length == 0) {
      return 0;
    }
    String sql = "DELETE FROM HW_FD_HOST WHERE ID IN (:ids)";
    return namedParameterJdbcTemplate
        .update(sql, Collections.singletonMap("ids", Arrays.asList(ids)));
  }

  public int updateFusionDirectorAllPassword(FusionDirector fd) {
    if (fd == null) {
      return 0;
    }
    return jdbcTemplate.update("UPDATE HW_FD_HOST SET LOGIN_PWD=?,RESERVED_STR2=? WHERE HOST_IP=?",
        fd.getLoginPwd(), fd.getReservedStr2(), fd.getHostIp());
  }

  public FusionDirector getFusionDirector(int id) {
    List<FusionDirector> fusionDirectorList = jdbcTemplate
        .query("SELECT * FROM HW_FD_HOST WHERE ID=?", new RowMapper<FusionDirector>() {
          @Override
          public FusionDirector mapRow(ResultSet resultSet, int i) throws SQLException {
            return map(resultSet);
          }
        }, id);
    return (fusionDirectorList == null || fusionDirectorList.isEmpty()) ? null
        : fusionDirectorList.get(0);
  }

  public FusionDirector getFusionDirector(String subscribedUsername) {
    if (!StringUtils.hasText(subscribedUsername)) {
      return null;
    }
    List<FusionDirector> fusionDirectorList = jdbcTemplate.query(
        "SELECT * FROM HW_FD_HOST WHERE RESERVED_STR1=?", new RowMapper<FusionDirector>() {
          @Override
          public FusionDirector mapRow(ResultSet resultSet, int i) throws SQLException {
            return map(resultSet);
          }
        }, subscribedUsername);
    return (fusionDirectorList == null || fusionDirectorList.isEmpty()) ? null
        : fusionDirectorList.get(0);
  }

  public FusionDirector getFusionDirectorByIp(String ip) {
    List<FusionDirector> list = jdbcTemplate
        .query("SELECT * FROM HW_FD_HOST WHERE HOST_IP=?", new RowMapper<FusionDirector>() {
          @Override
          public FusionDirector mapRow(ResultSet resultSet, int i) throws SQLException {
            return map(resultSet);
          }
        }, ip);
    return list.isEmpty() ? null : list.get(0);
  }

  public String getAvailableAlarmUsername(String alarmUsernamePrefix) {
    return jdbcTemplate.queryForObject("SELECT concat(?,x) FROM SYSTEM_RANGE(1, 10) "
            + "WHERE concat(?,x) NOT IN (SELECT RESERVED_STR1 FROM HW_FD_HOST) LIMIT 1",
        new Object[]{alarmUsernamePrefix, alarmUsernamePrefix}, String.class);
  }

  private FusionDirector map(ResultSet rs) throws SQLException {
    FusionDirector fd = new FusionDirector();
    fd.setId(rs.getInt("id"));
    fd.setHostIp(rs.getString("host_ip"));
    fd.setAliasName(rs.getString("alias_name"));
    fd.setLoginAccount(rs.getString("login_account"));
    fd.setLoginPwd(rs.getString("login_pwd"));
    fd.setReservedInt1(rs.getInt("reserved_int1"));
    fd.setReservedInt2(rs.getInt("reserved_int2"));
    fd.setReservedStr1(rs.getString("reserved_str1"));
    fd.setReservedStr2(rs.getString("reserved_str2"));
    fd.setLastModify(StringUtil.convertTimestamp(rs.getTimestamp("last_modify_time")));
    fd.setCreateTime(StringUtil.convertTimestamp(rs.getTimestamp("create_time")));
    fd.setHaStatus(rs.getInt("ha_status"));
    fd.setAlarmStatus(rs.getInt("alarm_status"));
    fd.setPort(rs.getInt("port"));
    return fd;
  }

}
