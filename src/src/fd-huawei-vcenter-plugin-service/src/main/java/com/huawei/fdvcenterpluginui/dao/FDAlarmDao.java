package com.huawei.fdvcenterpluginui.dao;

import com.huawei.fdvcenterpluginui.entity.AlarmEvent;
import com.huawei.fdvcenterpluginui.entity.AlarmRecord;
import com.huawei.fdvcenterpluginui.entity.HAComponent;
import com.huawei.fdvcenterpluginui.utils.DaoUtils;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.UUID;
import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

public class FDAlarmDao extends FDBaseDao {

  @Autowired
  private DataSource dataSource;

  @Autowired
  private JdbcTemplate jdbcTemplate;

  @Override
  public void initTables() throws SQLException {
    String createAlarmTableSql = "CREATE TABLE \"HW_ALARM_EVENT\" (\n"
        + "  \"ID\"  integer PRIMARY KEY AUTO_INCREMENT NOT NULL,\n"
        + "  \"EVENT_ID\"  nvarchar(64),\n"
        + "  \"EVENT_NAME\"  nvarchar(255),\n"
        + "  \"EVENT_CATEGORY\"  nvarchar(64),\n"
        + "  \"SEVERITY\"  nvarchar(64),\n"
        + "  \"DESCRIPTION\"  nvarchar(255),\n"
        + "  \"MOR_VALUE\"  nvarchar(32)\n"
        + ");";
    String createHAComponentTableSql = "CREATE TABLE \"HW_HA_COMPONENT\" (\n"
        + "  \"ID\"  integer PRIMARY KEY AUTO_INCREMENT NOT NULL,\n"
        + "  \"FD_HOST_ID\"  int,\n"
        + "  \"COMPONENT_TYPE\"  nvarchar(16),\n"
        + "  \"COMPONENT\"  nvarchar(64),\n"
        + "  \"SEVERITY\"  nvarchar(8),\n"
        + "  \"DEVICE_ID\"  nvarchar(64),\n"
        + "  \"CREATE_TIME\"  datetime NOT NULL,\n"
        + "  FOREIGN KEY (FD_HOST_ID) REFERENCES HW_FD_HOST (ID) ON DELETE CASCADE\n"
        + ");";
    String createAlarmRecordTableSql = "CREATE TABLE \"HW_ALARM_RECORD\" (\n"
        + "  \"ID\"  integer PRIMARY KEY AUTO_INCREMENT NOT NULL,\n"
        + "  \"FD_HOST_ID\"  int,\n"
        + "  \"EVENT_ID\"  nvarchar(64),\n"
        + "  \"SN\"  int,\n"
        + "  \"CREATE_TIME\"  datetime NOT NULL,\n"
        + "  FOREIGN KEY (FD_HOST_ID) REFERENCES HW_FD_HOST (ID) ON DELETE CASCADE\n"
        + ");";
    String addSN = "ALTER TABLE HW_HA_COMPONENT ADD SN int;";
    String addDeviceId = "ALTER TABLE HW_ALARM_RECORD ADD DEVICE_ID nvarchar(64);";
    Connection connection = dataSource.getConnection();
    try {
      DaoUtils.checkExistAndCreateTable(connection, "HW_ALARM_EVENT", createAlarmTableSql);
      DaoUtils.checkExistAndCreateTable(connection, "HW_HA_COMPONENT", createHAComponentTableSql);
      // update table: remove column COMPONENT_SERIAL, add column COMPONENT
      DaoUtils.checkExistTableColumnAnd(connection, "HW_HA_COMPONENT", "COMPONENT_SERIAL",
          "DROP TABLE HW_HA_COMPONENT");
      DaoUtils.checkExistAndCreateTable(connection, "HW_HA_COMPONENT", createHAComponentTableSql);
      DaoUtils.checkNotExistTableColumnAnd(connection, "HW_HA_COMPONENT", "SN", addSN);
      DaoUtils.checkExistAndCreateTable(connection, "HW_ALARM_RECORD", createAlarmRecordTableSql);
      DaoUtils.checkNotExistTableColumnAnd(connection, "HW_ALARM_RECORD", "DEVICE_ID", addDeviceId);
    } finally {
      connection.close();
    }
  }

  @Override
  public String[] getTables() {
    return new String[]{"HW_ALARM_EVENT", "HW_HA_COMPONENT", "HW_ALARM_RECORD"};
  }

  public AlarmRecord getAlarmRecord(int fdHostId, int sn, String deviceId) {
    List<AlarmRecord> alarmRecords = jdbcTemplate
        .query("SELECT * FROM HW_ALARM_RECORD WHERE FD_HOST_ID=? AND SN=? AND DEVICE_ID=?",
            new RowMapper<AlarmRecord>() {
              @Override
              public AlarmRecord mapRow(ResultSet resultSet, int i) throws SQLException {
                AlarmRecord alarmRecord = new AlarmRecord();
                alarmRecord.setId(resultSet.getInt("ID"));
                alarmRecord.setFdHostId(resultSet.getInt("FD_HOST_ID"));
                alarmRecord.setEventId(resultSet.getString("EVENT_ID"));
                alarmRecord.setSn(resultSet.getInt("SN"));
                alarmRecord.setCreateTime(resultSet.getTimestamp("CREATE_TIME"));
                alarmRecord.setDeviceId(resultSet.getString("DEVICE_ID"));
                return alarmRecord;
              }
            }, fdHostId, sn, deviceId);
    return alarmRecords.isEmpty() ? null : alarmRecords.get(0);
  }

  public int addAlarmRecord(AlarmRecord alarmRecord) {
    if (alarmRecord == null) {
      return 0;
    }
    return jdbcTemplate
        .update("INSERT INTO HW_ALARM_RECORD(FD_HOST_ID,EVENT_ID,SN,CREATE_TIME,DEVICE_ID) VALUES(?,?,?,?,?)",
            alarmRecord.getFdHostId(), alarmRecord.getEventId(), alarmRecord.getSn(),
            alarmRecord.getCreateTime(), alarmRecord.getDeviceId());
  }

  public int deleteAlarmRecord(AlarmRecord alarmRecord) {
    if (alarmRecord == null) {
      return 0;
    }
    return jdbcTemplate.update("DELETE FROM HW_ALARM_RECORD WHERE FD_HOST_ID=? AND SN=? AND DEVICE_ID=?",
        alarmRecord.getFdHostId(), alarmRecord.getSn(), alarmRecord.getDeviceId());
  }

  public int deleteAlarmRecord(int fdHostId, String deviceId) {
    return jdbcTemplate.update("DELETE FROM HW_ALARM_RECORD WHERE FD_HOST_ID=? AND DEVICE_ID=?",
        fdHostId, deviceId);
  }

  public int getAlarmRecordEventIdCount(AlarmRecord alarmRecord) {
    return jdbcTemplate
        .queryForObject(
            "SELECT COUNT(ID) FROM HW_ALARM_RECORD WHERE FD_HOST_ID=? AND EVENT_ID=? AND DEVICE_ID=?",
            Integer.class, alarmRecord.getFdHostId(), alarmRecord.getEventId(),
            alarmRecord.getDeviceId());
  }

  public List<HAComponent> getHAComponents(HAComponent haComponent) {
    if (haComponent != null) {
      return jdbcTemplate.query("SELECT * FROM HW_HA_COMPONENT WHERE FD_HOST_ID=? AND SN=? AND DEVICE_ID=?",
          new RowMapper<HAComponent>() {
            @Override
            public HAComponent mapRow(ResultSet resultSet, int i) throws SQLException {
              HAComponent hc = new HAComponent();
              hc.setId(resultSet.getInt("ID"));
              hc.setFdHostId(resultSet.getInt("FD_HOST_ID"));
              hc.setComponentType(resultSet.getString("COMPONENT_TYPE"));
              hc.setComponent(resultSet.getString("COMPONENT"));
              hc.setSeverity(resultSet.getString("SEVERITY"));
              hc.setDeviceId(resultSet.getString("DEVICE_ID"));
              hc.setCreateTime(resultSet.getTimestamp("CREATE_TIME"));
              hc.setSn(resultSet.getInt("SN"));
              return hc;
            }
          }, haComponent.getFdHostId(), haComponent.getSn(), haComponent.getDeviceId());
    }
    return Collections.EMPTY_LIST;
  }

  public int addHAComponents(HAComponent haComponent) {
    if (haComponent == null) {
      return 0;
    }
    return jdbcTemplate.update(
        "INSERT INTO HW_HA_COMPONENT(FD_HOST_ID,COMPONENT_TYPE,COMPONENT,SEVERITY,DEVICE_ID,CREATE_TIME,SN) "
            + "VALUES(?,?,?,?,?,?,?)", haComponent.getFdHostId(), haComponent.getComponentType(),
        haComponent.getComponent(), haComponent.getSeverity(), haComponent.getDeviceId(),
        haComponent.getCreateTime(), haComponent.getSn());
  }

  public int deleteHAComponent(HAComponent haComponent) {
    if (haComponent == null) {
      return 0;
    }
    return jdbcTemplate.update("DELETE FROM HW_HA_COMPONENT WHERE FD_HOST_ID=? AND SN=? AND DEVICE_ID=?",
        haComponent.getFdHostId(), haComponent.getSn(), haComponent.getDeviceId());
  }

  public int deleteHAComponent(int fdHostId, String deviceId) {
    return jdbcTemplate.update("DELETE FROM HW_HA_COMPONENT WHERE FD_HOST_ID=? AND DEVICE_ID=?",
        fdHostId, deviceId);
  }

  public int getComponentTypeCount(HAComponent haComponent) {
    return jdbcTemplate.queryForObject(
        "SELECT COUNT(ID) FROM HW_HA_COMPONENT WHERE FD_HOST_ID=? AND DEVICE_ID=? AND COMPONENT_TYPE=?",
        new Object[]{haComponent.getFdHostId(), haComponent.getDeviceId(),
            haComponent.getComponentType()}, Integer.class);
  }

  public AlarmEvent getAlarmEvent(String eventId, String eventCategory) {
    List<AlarmEvent> alarmEventList = jdbcTemplate
        .query("SELECT * FROM HW_ALARM_EVENT WHERE EVENT_ID=? AND EVENT_CATEGORY=?",
            new RowMapper<AlarmEvent>() {
              @Override
              public AlarmEvent mapRow(ResultSet resultSet, int i) throws SQLException {
                return map(resultSet);
              }
            }, eventId, eventCategory);
    return alarmEventList.isEmpty() ? null : alarmEventList.get(0);
  }

  public void saveAlarmEvents(List<AlarmEvent> alarmEventList) {
    if (alarmEventList == null || alarmEventList.isEmpty()) {
      return;
    }
    List<Object[]> paramList = new ArrayList<>();
    for (AlarmEvent alarmEvent : alarmEventList) {
      paramList.add(new String[]{alarmEvent.getEventId(), alarmEvent.getEventName(),
          alarmEvent.getEventCategory(), alarmEvent.getSeverity(), alarmEvent.getDescription(),
          alarmEvent.getMorValue()});
    }
    jdbcTemplate.batchUpdate(
        "INSERT INTO HW_ALARM_EVENT(EVENT_ID,EVENT_NAME,EVENT_CATEGORY,SEVERITY,DESCRIPTION,MOR_VALUE) VALUES(?,?,?,?,?,?)",
        paramList);
  }

  public List<AlarmEvent> getAlarmEvents() {
    return jdbcTemplate.query("SELECT * FROM HW_ALARM_EVENT", new RowMapper<AlarmEvent>() {
      @Override
      public AlarmEvent mapRow(ResultSet resultSet, int i) throws SQLException {
        return map(resultSet);
      }
    });
  }

  public String createAlarmEventTempTable() {
    String tmpTableName = getTempTableName();
    jdbcTemplate
        .execute("CREATE TABLE " + tmpTableName + " AS SELECT * FROM HW_ALARM_EVENT WHERE 1=0");
    return tmpTableName;
  }

  public void addAlarmEventToTempTable(String tmpTableName, Collection<AlarmEvent> alarmEventList) {
    if (alarmEventList == null || alarmEventList.isEmpty()) {
      return;
    }
    String sql = "INSERT INTO " + tmpTableName
        + "(EVENT_ID,EVENT_NAME,EVENT_CATEGORY,SEVERITY,DESCRIPTION) VALUES(?,?,?,?,?)";
    List<Object[]> sql2Params = new ArrayList<>();
    for (AlarmEvent alarmEvent : alarmEventList) {
      sql2Params.add(new Object[]{alarmEvent.getEventId(), alarmEvent.getEventName(),
          alarmEvent.getEventCategory(), alarmEvent.getSeverity(), alarmEvent.getDescription()});
    }
    jdbcTemplate.batchUpdate(sql, sql2Params);
  }

  public List<String> getUpdatedMorVal(String tmpTableName) {
    String sql = "SELECT MOR_VALUE "
        + "FROM HW_ALARM_EVENT old WHERE EXISTS(SELECT 1 FROM "
        + tmpTableName
        + " new WHERE old.EVENT_ID = new.EVENT_ID "
        + "AND old.EVENT_CATEGORY = new.EVENT_CATEGORY "
        + "AND (old.EVENT_NAME <> new.EVENT_NAME "
        + "OR old.SEVERITY <> new.SEVERITY "
        + "OR old.DESCRIPTION <> new.DESCRIPTION))";
    return jdbcTemplate.query(sql, new RowMapper<String>() {
      @Override
      public String mapRow(ResultSet resultSet, int i) throws SQLException {
        return resultSet.getString("MOR_VALUE");
      }
    });
  }

  public int deleteByMorVal(String morVal) {
    return jdbcTemplate.update("DELETE FROM HW_ALARM_EVENT WHERE MOR_VALUE=?", morVal);
  }

  public List<AlarmEvent> getNewAlarmEvents(String tmpTableName) {
    String sql3 =
        "SELECT * FROM " + tmpTableName + " new WHERE NOT EXISTS(SELECT 1 FROM HW_ALARM_EVENT "
            + "old WHERE old.EVENT_ID=new.EVENT_ID AND old.EVENT_CATEGORY=new.EVENT_CATEGORY)";
    return jdbcTemplate.query(sql3, new RowMapper<AlarmEvent>() {
      @Override
      public AlarmEvent mapRow(ResultSet resultSet, int i) throws SQLException {
        return map(resultSet);
      }
    });
  }

  public void dropTempTable(String tmpTableName) {
    if (tmpTableName.startsWith("TMP_")) {
      jdbcTemplate.execute("DROP TABLE " + tmpTableName);
    }
  }

  private AlarmEvent map(ResultSet rs) throws SQLException {
    return new AlarmEvent(rs.getInt("ID"), rs.getString("EVENT_ID"), rs.getString("EVENT_NAME"),
        rs.getString("EVENT_CATEGORY"), rs.getString("SEVERITY"), rs.getString("DESCRIPTION"),
        rs.getString("MOR_VALUE"));
  }

  private String getTempTableName() {
    return String.format("TMP_%s", UUID.randomUUID().toString().replaceAll("-", "_"));
  }

}
