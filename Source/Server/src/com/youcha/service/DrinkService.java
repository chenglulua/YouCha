package com.youcha.service;

import com.youcha.dao.drinkDao.DrinkMapper;
import com.youcha.entity.Drink;
import com.youcha.util.MyBatisUtil;
import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.Random;

/**
 * @ClassName DrinkService
 * @Description Drink应用逻辑层
 * @Author 程璐
 * @Date 2021-01-10 15:25
 */
@Service
@Transactional(readOnly = true)
public class DrinkService {

    @Resource
    private DrinkMapper drinkMapper;

    /**
     * @Description 小程序端随机推荐num个饮品
     * @Author 程璐
     * @Param [num]
     * @Return java.util.ArrayList<com.youcha.entity.Drink>
     */
    public ArrayList<Drink> randomDrinks(int num) {
        SqlSession session = MyBatisUtil.getSession();
        drinkMapper = session.getMapper(DrinkMapper.class);
        //1.求出饮品数量
        int sum = drinkMapper.getDrinkNum();
        System.out.println(sum);
        //2.生成num个不重复的随机数，随机范围为[0-sum)
        int[] randomList = getRandom(sum, num);
        System.out.println(randomList[0]+" "+randomList[1]+" " + randomList[2]);
        //3.将推荐移动到[1,sum]之间
        for (int i = 0; i < num; i++){
            randomList[i] += 1;
        }
        System.out.println(randomList[0]+" "+randomList[1]+" " + randomList[2]);
        //4.获取num个饮品信息
        ArrayList<Drink> drinkList = new ArrayList<>(num);
        for (int i = 0; i < num; i++){
            Drink drink = drinkMapper.getSingleDrink(randomList[i]);
            drinkList.add(drink);
        }
        System.out.println(drinkList);
        session.close();
        return drinkList;
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