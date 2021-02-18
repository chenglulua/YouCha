package com.youcha;

import com.youcha.controller.*;
import com.youcha.entity.Type;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.annotation.Resource;
import java.util.ArrayList;

/**
 * @Description 测试类
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath:config/applicationContext1.xml",
		"classpath:config/mybatis1.xml"})
public class MyBatisTest {

	@Resource
	private AssessmentController assController;
	@Resource
	private DrinkController drinkController;
	@Resource
	private OrderController orderController;
	@Resource
	private TypeController typeController;
	@Resource
	private UserController userController;
	@Resource
	private SCartController sCartController;

	@Test
	public void main() {

		ArrayList<Type> types = typeController.getAllType();
		System.out.println(types);

//		ApplicationContext ac = new ClassPathXmlApplicationContext(
//				"/web/WEB-INF/applicationContext.xml");
//		TypeMapper typeMapper = (TypeMapper) ac.getBean("typeMapper");
//		System.out.println(typeMapper);
	}
}