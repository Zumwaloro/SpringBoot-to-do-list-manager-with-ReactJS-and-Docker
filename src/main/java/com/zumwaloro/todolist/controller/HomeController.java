package com.zumwaloro.todolist.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class HomeController {

    @RequestMapping("/")
    public String home() {
        return "High-tech to-do-list manager. Powered by React and goats in jammies.";
    }
}
