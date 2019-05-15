package com.huawei.fdvcenterpluginui.entity;

/**
 * Alarm event from FD
 */
public class AlarmEvent {

  private int id;

  // following field values are gotten from FD
  private String eventId;
  private String eventName;
  private String eventCategory;
  private String severity;
  private String description;

  // following field values are used in vCenter
  private String morValue;
  private String eventType = "vim.event.EventEx";

  public AlarmEvent(int id, String eventId, String eventName, String eventCategory,
      String severity, String description, String morValue) {
    this.id = id;
    this.eventId = eventId;
    this.eventName = eventName;
    this.eventCategory = eventCategory;
    this.severity = severity;
    this.description = description;
    this.morValue = morValue;
  }

  public String getVcEventId() {
    return categoryPrefix() + eventName;
  }

  public String getVcResumeEventId() {
    return getVcEventId() + "-resume";
  }

  public String getVcEventName() {
    return categoryPrefix() + eventName;
  }

  private String categoryPrefix() {
    switch (eventCategory.toLowerCase()) {
      case "enclosure":
        return "hmm-";
      case "bmc":
        return "ibmc-";
      default:
        return "";
    }
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getEventId() {
    return eventId;
  }

  public void setEventId(String eventId) {
    this.eventId = eventId;
  }

  public String getEventName() {
    return eventName;
  }

  public void setEventName(String eventName) {
    this.eventName = eventName;
  }

  public String getEventCategory() {
    return eventCategory;
  }

  public void setEventCategory(String eventCategory) {
    this.eventCategory = eventCategory;
  }

  public String getSeverity() {
    return severity;
  }

  public void setSeverity(String severity) {
    this.severity = severity;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public String getMorValue() {
    return morValue;
  }

  public void setMorValue(String morValue) {
    this.morValue = morValue;
  }

  public String getEventType() {
    return eventType;
  }
}
