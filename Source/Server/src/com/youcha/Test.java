package com.youcha;

import com.youcha.controller.*;
import com.youcha.entity.Drink;
import com.youcha.entity.OrderTable;
import com.youcha.entity.Type;
import com.youcha.service.DrinkService;

import java.util.ArrayList;

/**
 * @Description 测试类
 */
public class Test {

	public static void main(String[] args) {

		AssessmentController assController = new AssessmentController();
		DrinkController drinkController = new DrinkController();
		OrderController orderController = new OrderController();
		TypeController typeController = new TypeController();
		UserController userController = new UserController();

		ArrayList<Type> types = typeController.getAllTypes();
		System.out.println(types);
	}
}