package com.youcha.service;

import com.youcha.dao.userDao.UserMapper;
import com.youcha.entity.User;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;
import java.util.Random;

/**
 * @ClassName UserService
 * @Description User应用逻辑层
 * @Date 2021-01-10 15:25
 */
@Service
@Transactional(readOnly = false)
public class UserService {

    @Resource
    private UserMapper userMapper;

    /**
     * @Description 后台获取所有用户信息
     * @Param []
     * @Return java.util.ArrayList<com.youcha.entity.User>
     */
    public List<User> getAllUsers() {
        List<User> userList = this.userMapper.getAllUsers();
        System.out.println(userList);
		return userList;
    }

    /**
     * @Description 前端用户登录
     * @Param [phone, password]
     * @Return com.youcha.entity.User
     */
    public User login(String phone, String password) {
        User user = this.userMapper.getUserByPhoneAndPassword(phone, password);
        System.out.println(user);
        return user;
    }

    /**
     * @Description 前端用户注册
     * @Param [phone, password]
     * @Return java.lang.String
     */
    public boolean register(String phone, String password) {
        //1、判断手机号是否注册过
        User user1 = this.userMapper.getUserByPhone(phone);
        System.out.println("手机号是否注册过：" + user1);
        if (user1 == null){
            //2、没有注册过->分配存储
            //随机生成8位用户ID
            String userId;
            User user2 = new User();
            //3、判断分配的id是否已存在
            do {
                //4、存在->重新分配
                userId = getRandomUserId(8);
                user2 = this.userMapper.getUserById(userId);
            } while (user2 != null);
            //4、不存在->存储user
            User user = new User();
            user.setUserId(userId);
            user.setUName("用户" + userId);
            user.setPhone(phone);
            user.setPassword(password);
            boolean result = this.userMapper.insertUser(user);
            System.out.println(result);
            return result;
        } else {
            //2、注册过->返回false
            return false;
        }
    }

    /**
     * @Description 生成8位随机数
     * @Param [length]
     * @Return java.lang.String
     */
    private static String getRandomUserId(int length) {
        //定义变长字符串
        StringBuilder str = new StringBuilder();
        Random random = new Random();
        //随机生成数字，并添加到字符串
        for(int i = 0; i < length; i++){
            str.append(random.nextInt(10));
        }
        //将字符串转换为数字并输出
        System.out.println("新增用户id为：" + str.toString());
        return str.toString();
    }
}