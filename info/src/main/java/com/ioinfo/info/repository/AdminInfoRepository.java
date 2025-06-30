package com.ioinfo.info.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ioinfo.info.entity.AboutMe;

public interface AdminInfoRepository extends JpaRepository<AboutMe, Integer> {

}
