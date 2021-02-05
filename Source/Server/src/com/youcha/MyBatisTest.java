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

		OrderTable o1 = new OrderTable();
		o1.setUserId("12846059");
		o1.setTime("time");
		o1.setDrinkId(2);
		o1.setOBrix("half");
		o1.setOTemp("hot");
		o1.setOSize("middle");
		o1.setNum(1);
		o1.setTPrice(12);
		o1.setStatus(false);
//		System.out.println(o1);

		OrderTable o2 = new OrderTable();
		o2.setUserId("12846059");
		o2.setTime("time");
		o2.setDrinkId(8);
		o2.setOBrix("total");
		o2.setOTemp("normal");
		o2.setOSize("large");
		o2.setNum(1);
		o2.setTPrice(24);
		o2.setStatus(false);
//		System.out.println(o2);

		ArrayList<OrderTable> os = new ArrayList<>();
		os.add(o1);
		os.add(o2);
//		System.out.println(os);

		boolean result = this.orderController.addOrder(os);
//		System.out.println(result);

//		ArrayList<Type> types = typeController.getAllType();
//		System.out.println(types);

//		ApplicationContext ac = new ClassPathXmlApplicationContext(
//				"/web/WEB-INF/applicationContext.xml");
//		TypeMapper typeMapper = (TypeMapper) ac.getBean("typeMapper");
//		System.out.println(typeMapper);
	}
}