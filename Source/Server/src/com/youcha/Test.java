package com.youcha;

import java.util.List;

import com.youcha.dao.userDao.UserMapper;
import com.youcha.entity.User;
import com.youcha.util.MyBatisUtil;
import org.apache.ibatis.session.SqlSession;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * @Description 测试类
 * @Author 程璐
 * @Param
 * @Return
 */
public class Test {

	public static void main(String[] args) {

		/*SqlSession session = MyBatisUtil.getSession();
		UserMapper userMapper = session.getMapper(UserMapper.class);
		List<User> users = userMapper.selectAllUsers();
		for(User u : users) {
		    System.out.println(u);
		}
		session.close();*/
		ApplicationContext ac = new ClassPathXmlApplicationContext("applicationContext.xml");
		User user = (User)ac.getBean("User");
		System.out.println(user);
	}
}