package com.youcha.controller;

import com.youcha.service.UserService;
import org.springframework.stereotype.Controller;

import javax.annotation.Resource;


/**
 * @ClassName DrinkController
 * @Description User控制器类
 * @Author 程璐
 * @Date 2021-01-10 15:25
 */
@Controller
public class DrinkController {

    @Resource
    private UserService userService;

}