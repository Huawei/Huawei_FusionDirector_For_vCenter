package com.huawei.fdvcenterpluginui.utils;

import com.huawei.fdvcenterpluginui.entity.HAEventDef;
import java.io.IOException;
import java.io.InputStream;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

public class HAEventHelper {

  public final static Log LOGGER = LogFactory.getLog(HAEventHelper.class);

  private static final Map<String, HAEventDef> EVENT_DEF_MAP = new HashMap<>();

  private static final HAEventHelper INSTANCE = new HAEventHelper();

  private HAEventHelper() {
    InputStream resourceAsStream = null;
    try {
      resourceAsStream = this.getClass().getResourceAsStream("/eventsForHA.json");
      byte[] buff = new byte[resourceAsStream.available()];
      resourceAsStream.read(buff);
      Collection<Map<String, Object>> events = (Collection<Map<String, Object>>) JsonUtil
          .readAsMap(new String(buff, "UTF-8")).get("events");
      for (Map<String, Object> eventMap : events) {
        String eventId = eventMap.get("eventId").toString();
        String severity = eventMap.get("severity").toString();
        String eventComponent = eventMap.get("eventComponent").toString();
        EVENT_DEF_MAP.put(eventId, new HAEventDef(eventId, severity, eventComponent));
      }
    } catch (IOException e) {
      LOGGER.info("Cannot parse eventsForHA.json", e);
    } finally {
      if (resourceAsStream != null) {
        try {
          resourceAsStream.close();
        } catch (IOException e) {
          LOGGER.info("Cannot close resource");
        }
      }
    }
  }

  public static HAEventHelper getInstance() {
    return INSTANCE;
  }

  public HAEventDef getHaEventDef(String eventId) {
    if (eventId == null) {
      return null;
    }
    if (eventId.startsWith("0x")) {
      eventId = eventId.replace("0x", "");
    }
    return EVENT_DEF_MAP.get(eventId);
  }

}
