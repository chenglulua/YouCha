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
 * @Date 2021-01-10 15:25
 */
@Service
@Transactional(readOnly = true)
public class DrinkService {

    @Resource
    private DrinkMapper drinkMapper;

    /**
     * @Description 前端随机推荐num个饮品
     * @Param [num]
     * @Return java.util.ArrayList<com.youcha.entity.Drink>
     */
    public ArrayList<Drink> randomDrinks(int num) {
        SqlSession session = MyBatisUtil.getSession();
        drinkMapper = session.getMapper(DrinkMapper.class);
        //1.求出饮品数量
        int sum = drinkMapper.getDrinkNum();
        System.out.println("数据库内饮品数量为：" + sum);
        //2.生成num个不重复的随机数，随机范围为[0-sum)
        int[] randomList = getRandom(sum, num);
        //3.将推荐移动到[1,sum]之间
        for (int i = 0; i < num; i++){
            randomList[i] += 1;
        }
        System.out.println("随机饮品id为：" + randomList[0]+"，"+randomList[1]+"，" + randomList[2]);
        //4.获取num个饮品信息
        ArrayList<Drink> drinkList = new ArrayList<>(num);
        for (int i = 0; i < num; i++){
            Drink drink = drinkMapper.getDrinkById(randomList[i]);
            drinkList.add(drink);
        }
        System.out.println(drinkList);
        session.close();
        return drinkList;
    }

    /**
     * @Description 后台根据价格区间查找饮品
     * @Param [low, high]
     * @Return java.util.ArrayList<com.youcha.entity.Drink>
     */
    public ArrayList<Drink> getDrinkByPrice(int low, int high) {
        SqlSession session = MyBatisUtil.getSession();
        drinkMapper = session.getMapper(DrinkMapper.class);
        ArrayList<Drink> drinkList = drinkMapper.getDrinkByPrice(low, high);
        System.out.println(drinkList);
        session.close();
        return drinkList;
    }

    /**
     * @Description 后台根据名称模糊查找饮品
     * @Param [str]
     * @Return java.util.ArrayList<com.youcha.entity.Drink>
     */
    public ArrayList<Drink> getDrinksByName(String str) {
        SqlSession session = MyBatisUtil.getSession();
        drinkMapper = session.getMapper(DrinkMapper.class);
        ArrayList<Drink> drinkList = drinkMapper.getDrinkByName(str);
        System.out.println(drinkList);
        session.close();
        return drinkList;
    }

    /**
     * @Description 后台编辑饮品信息
     * @Param [newDrink]
     * @Return boolean
     */
    public boolean updateDrink(Drink newDrink) {
        SqlSession session = MyBatisUtil.getSession();
        drinkMapper = session.getMapper(DrinkMapper.class);
        int result = drinkMapper.updateDrink(newDrink);
        session.commit();
        session.close();
        if (result == 1){
            System.out.println("更新成功");
            return true;
        } else {
            System.out.println("更新失败");
            return false;
        }
    }

    /**
     * @Description 后台查看单个饮品信息
     * @Param [drinkId]
     * @Return com.youcha.entity.Drink
     */
    public Drink getDrink(int drinkId) {
        SqlSession session = MyBatisUtil.getSession();
        drinkMapper = session.getMapper(DrinkMapper.class);
        Drink drink = drinkMapper.getDrinkById(drinkId);
        System.out.println(drink);
        session.close();
        return drink;
    }

    /**
     * @Description 后台获取所有饮品
     * @Param []
     * @Return java.util.ArrayList<com.youcha.entity.Drink>
     */
    public ArrayList<Drink> getAllDrinks() {
        SqlSession session = MyBatisUtil.getSession();
        drinkMapper = session.getMapper(DrinkMapper.class);
        ArrayList<Drink> drinkList = drinkMapper.getAllDrinks();
        System.out.println(drinkList);
        session.close();
        return drinkList;
    }

    /**
     * @Description 后台新增饮品
     * @Param [newDrink]
     * @Return boolean
     */
    public boolean addDrink(Drink newDrink) {
        SqlSession session = MyBatisUtil.getSession();
        drinkMapper = session.getMapper(DrinkMapper.class);
        //1、判断drinkId是否存在
        Drink drink1 = drinkMapper.getDrinkById(newDrink.getDrinkId());
        if (drink1 != null){
            //2、若存在，返回“已存在，重新输入”
            session.close();
            return false;
        } else {
            //2、若不存在，插入，返回“插入成功”
            int result = drinkMapper.insertDrink(newDrink);
            System.out.println(result);
            session.commit();
            session.close();
            return true;
        }
    }

    /**
     * @Description 在[0-sum)中生成num个不重复的随机数
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