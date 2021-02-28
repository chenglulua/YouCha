package com.youcha.service;

import com.youcha.dao.sCartDao.SCartMapper;
import com.youcha.entity.ShoppingCart;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.ArrayList;

/**
 * @ClassName SCartService
 * @Description ShoppingCart应用逻辑层
 * @Date 2021-02-18 11:42
 */
@Service
@Transactional(readOnly = false)
public class SCartService {

    @Resource
    private SCartMapper sCartMapper;

    /**
     * @Description 前端根据userId获取购物车
     * @Param [userId]
     * @Return java.util.ArrayList<com.youcha.entity.ShoppingCart>
     */
    public ArrayList<ShoppingCart> getSCartByUserId(String userId) {
        ArrayList<ShoppingCart> sCarts = sCartMapper.getSCartByUserId(userId);
        System.out.println(sCarts);
        return sCarts;
    }

    /**
     * @Description 前端新增购物车
     * @Param [sCart, userId]
     * @Return boolean
     */
    public boolean addSCartByUserId(ShoppingCart sCart, String userId) {
        //1、设置userId
        sCart.setUserId(userId);
        //2、设置sId = 购物车总数 + 1
        int sum = sCartMapper.getAllSCartSum();
        int sId = sum + 1;
        sCart.setsId(sId);
        //3、插入
        boolean result = sCartMapper.addSCartByUserId(sCart);
        System.out.println("新增购物车的结果为：" + result);
        return result;
    }

    /**
     * @Description 前端购物车按钮操作
     * @Param [sId, operator]
     * @Return boolean
     */
    public boolean sCartButton(int sId, String op) {
        if (op.equals("plus")){
            return sCartMapper.plusSCartBySId(sId);
        } else if (op.equals("reduce")){
            return sCartMapper.reduceSCartBySId(sId);
        }
        return false;
    }

    /**
     * @Description 前端购物车批量删除
     * @Param [sIds]
     * @Return boolean
     */
    public boolean deleteSCartBySId(ArrayList sIds) {
        boolean result = sCartMapper.deleteSCartBySId(sIds);
        System.out.println("购物车批量删除的结果为：" + result);
        return result;
    }
}