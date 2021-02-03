package com.youcha;

import com.youcha.controller.*;
import com.youcha.dao.typeDao.TypeMapper;
import com.youcha.entity.Assessment;
import com.youcha.entity.Drink;
import com.youcha.entity.OrderTable;
import com.youcha.entity.Type;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.annotation.Resource;
import java.util.ArrayList;

/**
 * @Description 测试类
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath:web/WEB-INF/applicationContext.xml",
		"classpath:web/WEB-INF/mybatis.xml"})
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

	@Test
	public void main() {

		ArrayList<Type> types = typeController.getAllTypes();
		System.out.println(types);

//		Drink drink = new Drink();
//		drink.setDrinkId(100);
//		drink.setDName("fff");
//		drink.setTypeId(1);
//		drink.setDetails("");
//		drink.setPrice(1);
//		drink.setImg("");
//		drink.setBrix(false);
//		drink.setTemp(false);
//		drink.setExtra(false);
//		drink.setSize(false);
//		drink.setEvStar(2);

//		ApplicationContext ac = new ClassPathXmlApplicationContext(
//				"/web/WEB-INF/applicationContext.xml");
//		TypeMapper typeMapper = (TypeMapper) ac.getBean("typeMapper");
//		System.out.println(typeMapper);
	}
}