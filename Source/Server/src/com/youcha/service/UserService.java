package com.youcha.service;

import com.mysql.fabric.xmlrpc.base.Array;
import com.youcha.dao.drinkDao.DrinkMapper;
import com.youcha.dao.userDao.UserMapper;
import com.youcha.entity.User;
import com.youcha.util.MyBatisUtil;
import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

/**
 * @ClassName UserService
 * @Description User应用逻辑层
 * @Author 程璐
 * @Date 2021-01-10 15:25
 */
@Service
@Transactional(readOnly = true)
public class UserService {

    @Resource
    private UserMapper userMapper;

    /**
     * @Description 后台获取所有用户信息
     * @Author 程璐
     * @Param []
     * @Return java.util.ArrayList<com.youcha.entity.User>
     */
    public List<User> getAllUsers() {
        SqlSession session = MyBatisUtil.getSession();
		userMapper = session.getMapper(UserMapper.class);
		List<User> userList = userMapper.getAllUsers();
		for(User u : userList) {
			System.out.println(u);
		}
		session.close();
		return userList;
    }
}