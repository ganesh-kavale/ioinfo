package com.ioinfo.info.repository;


import com.ioinfo.info.entity.PersonalBlogs;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BlogRepository extends JpaRepository<PersonalBlogs, Long> {
}
