package com.ioinfo.info.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "users-registration")
@Getter
@Setter
public class UserRegistration {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String username;
	private String password;
	private Long mobileNo;
	private String emailId;
	
//	public Long getId() {
//		return id;
//	}
//	public void setId(Long id) {
//		this.id = id;
//	}
//	public String getUsername() {
//		return username;
//	}
//	public void setUsername(String username) {
//		this.username = username;
//	}
//	public String getPassword() {
//		return password;
//	}
//	public void setPassword(String password) {
//		this.password = password;
//	}
//	public Long getMobileNo() {
//		return mobileNo;
//	}
//	public void setMobileNo(Long mobileNo) {
//		this.mobileNo = mobileNo;
//	}
//	public String getEmailId() {
//		return emailId;
//	}
//	public void setEmailId(String emailId) {
//		this.emailId = emailId;
//	}
//
//
}
