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
     * @Description 后台根据price区间查找饮品
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
     * @Description 后台根据dName模糊查找饮品
     * @Param [str]
     * @Return java.util.ArrayList<com.youcha.entity.Drink>
     */
    @ResponseBody
    @RequestMapping("getDrinkByDName")
    public ArrayList<Drink> getDrinkByDName(@RequestParam("str") String str){
        return this.drinkService.getDrinksByName(str);
    }

    /**
     * @Description 后台编辑饮品
     * @Param [newDrink]
     * @Return boolean
     */
    @ResponseBody
    @RequestMapping("updateDrink")
    public boolean updateDrink(@RequestParam Drink newDrink){
        return this.drinkService.updateDrink(newDrink);
    }

    /**
     * @Description 后台根据drinkId查看饮品
     * @Param [drinkId]
     * @Return com.youcha.entity.Drink
     */
    @ResponseBody
    @RequestMapping("getDrinkByDrinkId")
    public Drink getDrinkByDrinkId(@RequestParam("drinkId") int drinkId){
        return this.drinkService.getDrink(drinkId);
    }

    /**
     * @Description 后台获取所有饮品
     * @Param []
     * @Return java.util.ArrayList<com.youcha.entity.Drink>
     */
    @ResponseBody
    @RequestMapping("getAllDrink")
    public ArrayList<Drink> getAllDrink(){
        return this.drinkService.getAllDrinks();
    }

    /**
     * @Description 后台新增饮品
     * @Param [newDrink]
     * @Return boolean
     */
    @ResponseBody
    @RequestMapping("addDrink")
    public boolean addDrink(@RequestParam Drink newDrink){
        return this.drinkService.addDrink(newDrink);
    }

    /**
     * @Description 后台根据drinkId删除饮品
     * @Param [drinkId]
     * @Return boolean
     */
    @ResponseBody
    @RequestMapping("deleteDrinkByDrinkId")
    public boolean deleteDrinkByDrinkId(@RequestParam("drinkId") int drinkId){
        return this.drinkService.deleteDrinkById(drinkId);
    }
}