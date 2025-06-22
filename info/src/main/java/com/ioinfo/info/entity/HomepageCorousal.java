package com.ioinfo.info.entity;


import jakarta.persistence.*;

@Entity
@Table(name = "homepagecorousal")
public class HomepageCorousal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "name", nullable = false, length = 255)
    private String name;

    // Default constructor
    public HomepageCorousal() {}

    // Parameterized constructor
    public HomepageCorousal(String name) {
        this.name = name;
    }

    // Getters and Setters
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    // toString method
    @Override
    public String toString() {
        return "HomepageCorousal{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
}

