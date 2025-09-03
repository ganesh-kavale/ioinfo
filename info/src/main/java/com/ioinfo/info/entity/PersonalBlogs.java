package com.ioinfo.info.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "blogs")
public class PersonalBlogs {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @Column(name = "image_path")
    private String imagePath;

    @Lob
    private String details; // LONGTEXT maps to @Lob

    @Column(name = "story_timeline")
    private LocalDateTime storyTimeline;

    private int likes;
    private int loves;
    private int shares;
    private int supports;

    @Column(name = "created_at", updatable = false, insertable = false)
    private LocalDateTime createdAt;

    // ✅ Getters & Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getImagePath() { return imagePath; }
    public void setImagePath(String imagePath) { this.imagePath = imagePath; }

    public String getDetails() { return details; }
    public void setDetails(String details) { this.details = details; }

    public LocalDateTime getStoryTimeline() { return storyTimeline; }
    public void setStoryTimeline(LocalDateTime storyTimeline) { this.storyTimeline = storyTimeline; }

    public int getLikes() { return likes; }
    public void setLikes(int likes) { this.likes = likes; }

    public int getLoves() { return loves; }
    public void setLoves(int loves) { this.loves = loves; }

    public int getShares() { return shares; }
    public void setShares(int shares) { this.shares = shares; }

    public int getSupports() { return supports; }
    public void setSupports(int supports) { this.supports = supports; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
