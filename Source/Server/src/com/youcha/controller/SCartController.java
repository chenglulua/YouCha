package com.youcha.controller;

import com.youcha.entity.ShoppingCart;
import com.youcha.service.SCartService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.ArrayList;

/**
 * @ClassName SCartController
 * @Description ShoppingCart控制器类
 * @Date 2021-02-18 11:40
 */
@Controller
@RequestMapping("sCart")
public class SCartController {

    @Resource
    private SCartService sCartService;

    /**
     * @Description 前端根据userId获取购物车
     * @Param [userId]
     * @Return java.util.ArrayList<com.youcha.entity.ShoppingCart>
     */
    @ResponseBody
    @RequestMapping("getSCartByUserId")
    public ArrayList<ShoppingCart> getSCartByUserId(
            @RequestParam("userId") String userId){
        return this.sCartService.getSCartByUserId(userId);
    }

    /**
     * @Description 前端新增购物车
     * @Param [sCart, userId]
     * @Return boolean
     */
    @ResponseBody
    @RequestMapping("addSCartByUserId")
    public boolean addSCartByUserId(@RequestParam("sCart") ShoppingCart sCart,
                                    @RequestParam("userId") String userId) {
        return this.sCartService.addSCartByUserId(sCart, userId);
    }
}