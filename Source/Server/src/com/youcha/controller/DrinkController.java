package com.youcha.controller;

import com.youcha.entity.Drink;
import com.youcha.service.DrinkService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.ArrayList;

/**
 * @ClassName DrinkController
 * @Description Drink控制器类
 * @Date 2021-01-10 15:25
 */
@Controller
@RequestMapping("drink")
public class DrinkController {

    @Resource
    private DrinkService drinkService;

    /**
     * @Description 前端随机推荐num个饮品
     * @Param [num]
     * @Return java.util.ArrayList<com.youcha.entity.Drink>
     */
    @ResponseBody
    @RequestMapping("randomDrinks")
    public ArrayList<Drink> randomDrinks(@RequestParam int num) {
        ArrayList<Drink> drinkList = this.drinkService.randomDrinks(num);
        return drinkList;
    }

    /**
     * @Description 后台获取所有饮品
     * @Param []
     * @Return java.util.ArrayList<com.youcha.entity.Drink>
     */
    @ResponseBody
    @RequestMapping("getAllDrinks")
    public ArrayList<Drink> getAllDrinks(){
        ArrayList<Drink> drinkList = this.drinkService.getAllDrinks();
        return drinkList;
    }

    /**
     * @Description 后台新增饮品
     * @Param [drinkId, dName, typeId, details, price, pic, brix, temp, extra, size, evStar]
     * @Return java.lang.String
     */
    @ResponseBody
    @RequestMapping("addDrink")
    public boolean addDrink(int drinkId, String dName, int typeId, String details,
                           int price, String img, boolean brix, boolean temp,
                           boolean extra, boolean size, int evStar){
        Drink drink = new Drink();
        drink.setDrinkId(drinkId);
        drink.setDName(dName);
        drink.setTypeId(typeId);
        drink.setDetails(details);
        drink.setPrice(price);
        drink.setImg(img);
        drink.setBrix(brix);
        drink.setTemp(temp);
        drink.setExtra(extra);
        drink.setSize(size);
        drink.setEvStar(evStar);
        boolean result = this.drinkService.addDrink(drink);
        return result;
    }
}