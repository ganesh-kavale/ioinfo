package com.ioinfo.info.dto;

public class LetsConnectDTO {

    private Long id;
    private String body;
    private String emailId;
    private String name;
    private String mobileNo;
    private String subject;

    // getters & setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getBody() { return body; }
    public void setBody(String body) { this.body = body; }

    public String getEmailId() { return emailId; }
    public void setEmailId(String emailId) { this.emailId = emailId; }

    public String getMobileNo() { return mobileNo; }
    public void setMobileNo(String mobileNo) { this.mobileNo = mobileNo; }

    public String getSubject() { return subject; }
    public void setSubject(String subject) { this.subject = subject; }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
