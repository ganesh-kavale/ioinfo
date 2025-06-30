package com.ioinfo.info.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ioinfo.info.entity.NavigationNodes;

public interface CustomDataRepository extends JpaRepository<NavigationNodes, Integer> {


//    @Query("SELECT n FROM NavigationNodes e WHERE e.department = :department AND e.salary > :salary")
//    List<Employee> findByDepartmentAndSalary(@Param("department") String department, @Param("salary") double salary);
    
//    @Query("SELECT * FROM NavigationNodes")
//    List<NavigationNodes> findAll();
    
}
