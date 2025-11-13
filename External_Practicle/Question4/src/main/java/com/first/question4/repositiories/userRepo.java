package com.first.question4.repositiories;

import com.first.question4.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface userRepo extends JpaRepository<Employee,Long> {


}
