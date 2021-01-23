package com.youcha;

import java.util.ArrayList;

import com.youcha.dao.orderDao.OrderMapper;
import com.youcha.dao.typeDao.TypeMapper;
import com.youcha.entity.OrderTable;
import com.youcha.entity.Type;
import com.youcha.util.MyBatisUtil;
import org.apache.ibatis.session.SqlSession;

/**
 * @Description 测试类
 */
public class Test {

	public static void main(String[] args) {

		/*获取所有饮品类型*/
//		getType();

		/*根据用户获取订单信息*/
//		getOrder();

	}

	private static void getOrder() {
		int userId = 18469875;
		SqlSession session = MyBatisUtil.getSession();
		OrderMapper orderMapper = session.getMapper(OrderMapper.class);
		ArrayList<OrderTable> orderList = new ArrayList<>();
		orderList = orderMapper.getOrderByUserId(userId);
		System.out.println(orderList);
		session.close();
	}

	private static void getType() {
		SqlSession session = MyBatisUtil.getSession();
		TypeMapper typeMapper = session.getMapper(TypeMapper.class);
		ArrayList<Type> typeList = new ArrayList<>();
		typeList = typeMapper.getAllTypes();
		System.out.println(typeList);
		session.close();
	}
}