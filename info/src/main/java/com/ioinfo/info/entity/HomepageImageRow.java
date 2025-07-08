package com.ioinfo.info.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "homepageimagerowcontainer")
public class HomepageImageRow {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "imagepath", length = 255)
    private String imagePath;

    @Column(name = "projectname", length = 100)
    private String projectName;

    @Column(name = "techstack", columnDefinition = "TEXT")
    private String techStack;

    @Column(name = "description", columnDefinition = "TEXT")
    private String description;

    // Constructors
    public HomepageImageRow() {}

    public HomepageImageRow(String imagePath, String projectName, String techStack, String description) {
        this.imagePath = imagePath;
        this.projectName = projectName;
        this.techStack = techStack;
        this.description = description;
    }

    // Getters and Setters
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getImagePath() {
        return imagePath;
    }

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public String getTechStack() {
        return techStack;
    }

    public void setTechStack(String techStack) {
        this.techStack = techStack;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
