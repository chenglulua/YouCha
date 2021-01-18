package com.youcha.controller;

import com.youcha.entity.User;
import com.youcha.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

/**
 * @ClassName UserController
 * @Description User控制器类
 * @Author 程璐
 * @Date 2021-01-10 15:25
 */
@Controller
@RequestMapping("user")
public class UserController {

    @Resource
    private UserService userService;

    /**
     * @Description 后台获取所有用户信息
     * @Author 程璐
     * @Param []
     * @Return java.util.ArrayList<com.youcha.entity.User>
     */
    @ResponseBody
    @RequestMapping("getAllUsers")
    public List<User> getAllUsers(){
        List<User> userList = this.userService.getAllUsers();
        return userList;
    }

    @ResponseBody
    @RequestMapping("register")
    public String register(){
        return "";
    }
}