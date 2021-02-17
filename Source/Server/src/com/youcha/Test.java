package com.youcha;

import com.youcha.controller.TypeController;
import com.youcha.entity.Type;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.util.ArrayList;

/**
 * @Description 测试类
 */
public class Test {

    public static void main(String[] args){
        ApplicationContext ctx =
                new ClassPathXmlApplicationContext("applicationContext.xml");
        TypeController typeController = (TypeController) ctx.getBean("typeController");

        ArrayList<Type> types = typeController.getAllType();
        System.out.println(types);
    }
}