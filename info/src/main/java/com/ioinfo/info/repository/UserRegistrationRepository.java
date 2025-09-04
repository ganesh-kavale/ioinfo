package com.ioinfo.info.repository;

import com.ioinfo.info.entity.UserRegistration;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRegistrationRepository extends JpaRepository<UserRegistration,Long> {
}
