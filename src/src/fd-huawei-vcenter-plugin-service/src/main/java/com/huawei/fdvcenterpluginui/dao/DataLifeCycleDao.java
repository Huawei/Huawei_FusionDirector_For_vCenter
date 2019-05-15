package com.huawei.fdvcenterpluginui.dao;

import java.sql.SQLException;

public interface DataLifeCycleDao {

  void initTables() throws SQLException;

  void deleteData();

  void dropTables();
}
