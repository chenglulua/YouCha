package com.youcha;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import com.youcha.dao.drinkDao.DrinkMapper;
import com.youcha.dao.userDao.UserMapper;
import com.youcha.entity.Drink;
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

		/*首页随机推荐三个饮品*/
//		tuiJian3();
		


//		SqlSession session = MyBatisUtil.getSession();
//		//获取所有用户信息
//		UserMapper userMapper = session.getMapper(UserMapper.class);
//		List<User> users = userMapper.selectAllUsers();
//		for(User u : users) {
//			System.out.println(u);
//		}
//		session.close();

		/*ApplicationContext ac = new ClassPathXmlApplicationContext("applicationContext.xml");
		User user = (User)ac.getBean("User");
		System.out.println(user);*/
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
		ArrayList<Drink> drinkList = new ArrayList<Drink>(num);
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