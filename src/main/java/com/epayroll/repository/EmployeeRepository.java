package com.epayroll.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.epayroll.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer>{

}
