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
    public ArrayList<Drink> randomDrinks(@RequestParam("num") int num) {
        return this.drinkService.randomDrinks(num);
    }

    /**
     * @Description 后台编辑饮品信息
     * @Param [drinkId, dName, typeId, details, price, img, brix, temp, extra, size, evStar]
     * @Return com.youcha.entity.Drink
     */
    @ResponseBody
    @RequestMapping("updateDrink")
    public boolean updateDrink(@RequestParam("drinkId") int drinkId,
                             @RequestParam("dName") String dName,
                             @RequestParam("typeId") int typeId,
                             @RequestParam("details") String details,
                             @RequestParam("price") int price,
                             @RequestParam("img") String img,
                             @RequestParam("brix") boolean brix,
                             @RequestParam("temp") boolean temp,
                             @RequestParam("extra") boolean extra,
                             @RequestParam("size") boolean size,
                             @RequestParam("evStar") int evStar){
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
        return this.drinkService.updateDrink(drink);
    }

    /**
     * @Description 后台查看单个饮品信息
     * @Param [drinkId]
     * @Return com.youcha.entity.Drink
     */
    @ResponseBody
    @RequestMapping("getDrink")
    public Drink getDrink(@RequestParam("drinkId") int drinkId){
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
     * @Param [drinkId, dName, typeId, details, price, pic, brix, temp, extra, size, evStar]
     * @Return java.lang.String
     */
    @ResponseBody
    @RequestMapping("addDrink")
    public boolean addDrink(@RequestParam("drinkId") int drinkId,
                            @RequestParam("dName") String dName,
                            @RequestParam("typeId") int typeId,
                            @RequestParam("details") String details,
                            @RequestParam("price") int price,
                            @RequestParam("img") String img,
                            @RequestParam("brix") boolean brix,
                            @RequestParam("temp") boolean temp,
                            @RequestParam("extra") boolean extra,
                            @RequestParam("size") boolean size,
                            @RequestParam("evStar") int evStar){
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
        return this.drinkService.addDrink(drink);
    }
}