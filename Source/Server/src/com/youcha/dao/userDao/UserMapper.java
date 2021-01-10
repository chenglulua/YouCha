package com.youcha.dao.userDao;

import com.youcha.entity.User;

import java.util.List;

/**
 * @ClassName UserMapper
 * @Description User映射器接口
 * @Author 程璐
 * @Date 2021-01-10 14:17
 */
public interface UserMapper {

    public List<User> selectAllUsers();

}