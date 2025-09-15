package com.ioinfo.info.entity;

import jakarta.persistence.*;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "admininfo")
public class AboutMe {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

	@Column(name = "name")
	private String name;

	@Lob
	@Column(columnDefinition = "TEXT")
	private String profilesummary;

	@Column(name = "education")
	private String education;

	@Column(name = "university")
	private String university;

	@Column(name = "achievements")
	private String achievements;

	@Column(name = "certifications")
	private String certifications;

	@Column(name = "experience")
	private String experience;

	@Column(name = "passingyear")
	private Integer passingyear;

	// Getters and Setters
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getProfileSummary() {
		return profilesummary;
	}

	public void setProfileSummary(String profileSummary) {
		this.profilesummary = profileSummary;
	}

	public String getEducation() {
		return education;
	}

	public void setEducation(String education) {
		this.education = education;
	}

	public String getUniversity() {
		return university;
	}

	public void setUniversity(String university) {
		this.university = university;
	}

	public String getAchievements() {
		return achievements;
	}

	public void setAchievements(String achievements) {
		this.achievements = achievements;
	}

	public String getCertifications() {
		return certifications;
	}

	public void setCertifications(String certifications) {
		this.certifications = certifications;
	}

	public String getExperience() {
		return experience;
	}

	public void setExperience(String experience) {
		this.experience = experience;
	}

	public Integer getPassingYear() {
		return passingyear;
	}

	public void setPassingYear(Integer passingYear) {
		this.passingyear = passingYear;
	}

	@Override
	public String toString() {
		return "AdminInfo{" + "id=" + id + ", name='" + name + '\'' + ", profileSummary='" + profilesummary + '\''
				+ ", education='" + education + '\'' + ", university='" + university + '\'' + ", achievements='"
				+ achievements + '\'' + ", certifications='" + certifications + '\'' + ", experience='" + experience
				+ '\'' + ", passingYear=" + passingyear + '}';
	}
}
