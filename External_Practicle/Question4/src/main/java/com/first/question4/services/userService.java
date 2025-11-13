package com.first.question4.services;

import com.first.question4.entity.Employee;
import com.first.question4.repositiories.userRepo;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class userService {
    @Autowired
    private userRepo userRepo;

    public List<Employee> userList(){
        return userRepo.findAll();
    }
}
