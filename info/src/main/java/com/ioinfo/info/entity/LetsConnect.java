package com.ioinfo.info.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;


@Entity
@Table(name = "lets-connect-user")
@Getter
@Setter
public class LetsConnect {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String body;
    private String emailId;
    private String name;
    private String mobileNo;
    private String subject;
    private String filePath;

}
