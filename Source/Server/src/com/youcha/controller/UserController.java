package com.youcha.controller;

import com.youcha.entity.User;
import com.youcha.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.List;

/**
 * @ClassName UserController
 * @Description User控制器类
 * @Date 2021-01-10 15:25
 */
@Controller
@RequestMapping("user")
public class UserController {

    @Resource
    private UserService userService;

    /**
     * @Description 前端用户注册
     * @Param [phone, password]
     * @Return java.lang.String
     */
    @ResponseBody
    @RequestMapping("register")
    public boolean register(@RequestParam("phone") String phone,
                           @RequestParam("password") String password){
        return this.userService.register(phone, password);
    }

    /**
     * @Description 前端用户登录
     * @Param [phone, password]
     * @Return com.youcha.entity.User
     */
    @ResponseBody
    @RequestMapping("login")
    public User login(@RequestParam("phone") String phone,
                      @RequestParam("password") String password){
        return this.userService.login(phone, password);
    }

    /**
     * @Description 后台获取所有用户信息
     * @Param []
     * @Return java.util.ArrayList<com.youcha.entity.User>
     */
    @ResponseBody
    @RequestMapping("getAllUser")
    public List<User> getAllUser(){
        return this.userService.getAllUsers();
    }

    /**
     * @Description 后台根据userId获取用户信息
     * @Param [userId]
     * @Return com.youcha.entity.User
     */
    @ResponseBody
    @RequestMapping("getUserByUserId")
    public User getUserByUserId(@RequestParam("userId") String userId){
        return this.userService.getUserByUserId(userId);
    }
}