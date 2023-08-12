package com.epayroll;

import org.springframework.boot.SpringApplication;


import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;


@ComponentScan({"com.epayroll.controller","com.epayroll.entity", "com.epayroll.repository"})
@SpringBootApplication
public class EmployeePayRollManagementApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmployeePayRollManagementApplication.class, args);
	}

}
