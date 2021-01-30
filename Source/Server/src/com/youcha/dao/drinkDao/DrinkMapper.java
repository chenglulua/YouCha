package com.youcha.dao.drinkDao;

import com.youcha.entity.Drink;
import org.apache.ibatis.annotations.Param;

import java.util.ArrayList;

/**
 * @ClassName DrinkMapper
 * @Description Drink映射器接口
 * @Date 2021-01-13 14:17
 */
public interface DrinkMapper {

    /*获取饮品总数*/
    public int getDrinkNum();

    /*根据饮品id获取饮品*/
    public Drink getDrinkById(int drinkId);

    /*获取所有饮品信息*/
    public ArrayList<Drink> getAllDrinks();

    /*新增饮品*/
    public int insertDrink(Drink drink);

    /*更新饮品*/
    public int updateDrink(Drink drink);

    /*根据名称模糊查询*/
    public ArrayList<Drink> getDrinkByName(String str);

    /*后台根据价格区间查找饮品*/
    public ArrayList<Drink> getDrinkByPrice(@Param("low") int low, @Param("high") int high);
}