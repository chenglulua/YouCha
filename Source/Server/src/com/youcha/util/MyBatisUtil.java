package com.youcha.util;

import java.io.IOException;
import java.io.InputStream;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

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
			is = Resources.getResourceAsStream("web/mybatis.xml");
			sessionFactory = new SqlSessionFactoryBuilder().build(is);
		} catch (IOException e) {
            e.printStackTrace();
        }
	}
	
	public static SqlSession getSession() {
		return sessionFactory.openSession();
	}
}