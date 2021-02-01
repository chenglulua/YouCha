package com.youcha.dao.userDao;

import com.youcha.entity.User;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * @ClassName UserMapper
 * @Description User映射器接口
 * @Date 2021-01-10 14:17
 */
public interface UserMapper {

    /*获取所有用户信息*/
    public List<User> getAllUsers();

    /*根据电话查找用户*/
    public User getUserByPhone(String phone);

    /*根据用户Id查找用户*/
    public User getUserById(String userId);

    /*插入用户*/
    public boolean insertUser(User user);

    /*根据电话和密码查找用户*/
    public User getUserByPhoneAndPassword(
            @Param("phone") String phone, @Param("password") String password);
}