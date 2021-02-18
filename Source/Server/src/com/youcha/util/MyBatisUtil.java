package com.youcha.util;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import java.io.IOException;
import java.io.InputStream;

/**
 * @ClassName MyBatisUtil
 * @Description MyBatis工具类
 * @Date 2021-01-10 10:20
 */
public class MyBatisUtil {
	
	private static SqlSessionFactory sessionFactory;
	
	static {
		InputStream is;
		try {
			is = Resources.getResourceAsStream("config/mybatis1.xml");
			sessionFactory = new SqlSessionFactoryBuilder().build(is);
		} catch (IOException e) {
            e.printStackTrace();
        }
	}
	
	public static SqlSession getSession() {
		return sessionFactory.openSession();
	}
}