package com.first.question4.controller;

import com.first.question4.entity.Employee;
import com.first.question4.services.userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/user")
public class userController {
    @Autowired
    private userService userService;

    @GetMapping
    public List<Employee> getUser(){
        return userService.userList();

    }
}
