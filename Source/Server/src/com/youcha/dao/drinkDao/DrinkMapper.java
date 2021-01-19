package com.youcha.dao.drinkDao;

import com.youcha.entity.Drink;
import com.youcha.entity.User;

import java.util.ArrayList;
import java.util.List;

/**
 * @ClassName DrinkMapper
 * @Description Drink映射器接口
 * @Author 程璐
 * @Date 2021-01-13 14:17
 */
public interface DrinkMapper {

    /*获取饮品总数*/
    public int getDrinkNum();

    /*获取单个饮品*/
    public Drink getSingleDrink(int drinkId);

    /*获取所有饮品信息*/
    public ArrayList<Drink> getAllDrinks();
}