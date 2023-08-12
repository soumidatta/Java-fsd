package com.epayroll.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.epayroll.entity.Attendance;

public interface AttendanceRepository extends JpaRepository<Attendance, Integer>{
	
	List<Attendance> findAllByEmployeeId(int employeeId);

}
