package com.youcha.controller;

import com.youcha.entity.Drink;
import com.youcha.service.DrinkService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
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
    public ArrayList<Drink> randomDrinks(@RequestParam("num") int num) {
        return this.drinkService.randomDrinks(num);
    }

    /**
     * @Description 后台根据价格区间查找饮品
     * @Param [low, high]
     * @Return java.util.ArrayList<com.youcha.entity.Drink>
     */
    @ResponseBody
    @RequestMapping("getDrinkByPrice")
    public ArrayList<Drink> getDrinkByPrice(
            @RequestParam("low") int low, @RequestParam("high") int high){
        return this.drinkService.getDrinkByPrice(low, high);
    }

    /**
     * @Description 后台根据名称模糊查找饮品
     * @Param [str]
     * @Return java.util.ArrayList<com.youcha.entity.Drink>
     */
    @ResponseBody
    @RequestMapping("getDrinkByName")
    public ArrayList<Drink> getDrinkByName(@RequestParam("str") String str){
        return this.drinkService.getDrinksByName(str);
    }

    /**
     * @Description 后台编辑饮品信息
     * @Param [newDrink]
     * @Return boolean
     */
    @ResponseBody
    @RequestMapping("updateDrink")
    public boolean updateDrink(@RequestBody Drink newDrink){
        return this.drinkService.updateDrink(newDrink);
    }

    /**
     * @Description 后台根据id查看单个饮品信息
     * @Param [drinkId]
     * @Return com.youcha.entity.Drink
     */
    @ResponseBody
    @RequestMapping("getDrinkById")
    public Drink getDrinkById(@RequestParam("drinkId") int drinkId){
        return this.drinkService.getDrink(drinkId);
    }

    /**
     * @Description 后台获取所有饮品
     * @Param []
     * @Return java.util.ArrayList<com.youcha.entity.Drink>
     */
    @ResponseBody
    @RequestMapping("getAllDrinks")
    public ArrayList<Drink> getAllDrinks(){
        return this.drinkService.getAllDrinks();
    }

    /**
     * @Description 后台新增饮品
     * @Param [newDrink]
     * @Return boolean
     */
    @ResponseBody
    @RequestMapping("addDrink")
    public boolean addDrink(@RequestBody Drink newDrink){
        return this.drinkService.addDrink(newDrink);
    }
}