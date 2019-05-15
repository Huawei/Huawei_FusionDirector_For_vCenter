package com.huawei.fdvcenterpluginui.services;

import com.huawei.fdvcenterpluginui.entity.AlarmEvent;
import com.huawei.fdvcenterpluginui.entity.FusionDirector;
import com.huawei.fdvcenterpluginui.utils.ConnectedVim;
import java.io.IOException;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import org.springframework.http.ResponseEntity;

public interface FDAlarmService {

  List<ResponseEntity<Map>> subscribe(Collection<FusionDirector> fds);

  List<ResponseEntity<Map>> unsubscribe(Collection<FusionDirector> fds);

  List<ResponseEntity<Map>> resubscribe(Collection<FusionDirector> fds);

  Collection<AlarmEvent> getAlarmEventsFromFD(FusionDirector fusionDirector);

  int deleteAlarmAndHADeviceId(int fdHostId, String deviceId);

  void handleEvent(String baseAuthString, String body) throws IOException;

  int removeAlarmEvents(ConnectedVim connectedVim);

  void cleanData();

  /**
   * synchronize alarm events to vCenter and DB
   */
  int syncAlarmEvents(FusionDirector fusionDirector);

  void syncAlarmEvents();

  void syncHistoricEvents(final String fdIp);

  void syncHistoricEvents(final String fdIp, final String deviceId);

  AlarmEvent getAlarmEvent(String alarmId, String eventCategory);

  void createProvider();

  void start();

}
