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

    /**
     * @Description 前端购物车按钮操作
     * @Param [sId, operator]
     * @Return boolean
     */
    @ResponseBody
    @RequestMapping("sCartButton")
    public boolean sCartButton(int sId, String op) {
        return this.sCartService.sCartButton(sId, op);
    }

    /**
     * @Description 前端购物车批量删除
     * @Param [sIds]
     * @Return boolean
     */
    @ResponseBody
    @RequestMapping("deleteSCartBySId")
    public boolean deleteSCartBySId(ArrayList sIds) {
        return this.sCartService.deleteSCartBySId(sIds);
    }
}