package com.youcha;

import java.util.ArrayList;
import java.util.Random;

import com.youcha.dao.drinkDao.DrinkMapper;
import com.youcha.dao.orderDao.OrderMapper;
import com.youcha.dao.typeDao.TypeMapper;
import com.youcha.dao.userDao.UserMapper;
import com.youcha.entity.Drink;
import com.youcha.entity.OrderTable;
import com.youcha.entity.Type;
import com.youcha.entity.User;
import com.youcha.util.MyBatisUtil;
import org.apache.ibatis.session.SqlSession;

/**
 * @Description 测试类
 */
public class Test {

	public static void main(String[] args) {

		/*首页随机推荐三个饮品*/
//		tuiJian3();

		/*获取所有饮品类型*/
//		getType();

		/*获取所有饮品信息*/
//		getDrink();

		/*根据用户获取订单信息*/
//		getOrder();

		/*新增饮品*/
		addDrink();
	}

	private static void addDrink() {
		Drink drink = new Drink();
		drink.setDrinkId(0);
		drink.setDName("dd");
		drink.setTypeId(2);
		drink.setDetails("wwww");
		drink.setPrice(5);
		drink.setImg("img");
		drink.setBrix(false);
		drink.setTemp(false);
		drink.setExtra(false);
		drink.setSize(false);
		drink.setEvStar(2);
		SqlSession session = MyBatisUtil.getSession();
		DrinkMapper drinkMapper = session.getMapper(DrinkMapper.class);
		int result = drinkMapper.insertDrink(drink);
		session.commit();
		System.out.println(result);
		session.close();
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

	private static void getDrink() {
		SqlSession session = MyBatisUtil.getSession();
		DrinkMapper drinkMapper = session.getMapper(DrinkMapper.class);
		ArrayList<Drink> drinkList = new ArrayList<>();
		drinkList = drinkMapper.getAllDrinks();
		System.out.println(drinkList);
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

	private static void tuiJian3() {
		SqlSession session = MyBatisUtil.getSession();
		DrinkMapper drinkMapper = session.getMapper(DrinkMapper.class);
		//1.求出饮品数量
		int sum = drinkMapper.getDrinkNum();
		System.out.println(sum);
		//2.生成3个不重复的随机数，随机范围为[1,num]
		//3个随机推荐位
		int num = 3;
		int[] randomList = getRandom(sum, 3);
		System.out.println(randomList[0]+" "+randomList[1]+" " + randomList[2]);
		//3.将推荐移动到[1,num]之间
		for (int i = 0; i < num; i++){
			randomList[i] += 1;
		}
		System.out.println(randomList[0]+" "+randomList[1]+" " + randomList[2]);
		//4.获取3个饮品信息
		ArrayList<Drink> drinkList = new ArrayList<>(num);
		for (int i = 0; i < num; i++){
			Drink drink = drinkMapper.getSingleDrink(randomList[i]);
			drinkList.add(drink);
		}
		System.out.println(drinkList);
		//5.传递给前端

		session.close();
	}

	/**
	 * @Description 在[0-sum)中生成num个不重复的随机数
	 * @Author 程璐
	 * @Param [sum, num]
	 * @Return int[]
	 */
	private static int[] getRandom(int sum, int num) {
		//list保存随机数
		int[] list = new int[num];
		Random random = new Random();
		boolean[] bool = new boolean[sum];
		int j = 0;
		for (int i = 0; i < num; i++){
			do {
				//如果产生的随机数已存在，则继续循环
				j = random.nextInt(sum);
			} while (bool[j]);
			bool[j] = true;
			list[i] = j;
		}
		return list;
	}
}