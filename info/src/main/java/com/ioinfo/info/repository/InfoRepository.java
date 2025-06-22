package com.ioinfo.info.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ioinfo.info.entity.Employee;

public interface InfoRepository extends JpaRepository<Employee, Integer> {

//	Employee getEmployeedetailsById(int id);

}
