package com.huawei.fdvcenterpluginui.dao;

import javax.sql.DataSource;
import org.springframework.jdbc.core.JdbcTemplate;

public abstract class FDBaseDao implements DataLifeCycleDao {

  protected DataSource dataSource;

  public abstract String[] getTables();

  @Override
  public void deleteData() {
    String[] tables = getTables();
    if (tables != null && tables.length > 0) {
      for (String table : tables) {
        new JdbcTemplate(dataSource).update("DELETE FROM " + table);
      }
    }
  }

  @Override
  public void dropTables() {
    String[] tables = getTables();
    if (tables != null && tables.length > 0) {
      for (String table : tables) {
        new JdbcTemplate(dataSource).update("DROP TABLE " + table);
      }
    }
  }

  public DataSource getDataSource() {
    return dataSource;
  }

  public void setDataSource(DataSource dataSource) {
    this.dataSource = dataSource;
  }
}
