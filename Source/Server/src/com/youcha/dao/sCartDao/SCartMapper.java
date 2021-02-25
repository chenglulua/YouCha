package com.youcha.dao.sCartDao;

import com.youcha.entity.ShoppingCart;

import java.util.ArrayList;

/**
 * @ClassName SCartMapper
 * @Description ShoppingCart映射器接口
 * @Date 2021-02-18 12:06
 */
public interface SCartMapper {

    /*根据userId获取购物车*/
    ArrayList<ShoppingCart> getSCartByUserId(String userId);

    /*获取购物车总数*/
    int getAllSCartSum();

    /*新增购物车*/
    boolean addSCartByUserId(ShoppingCart sCart);

    /*根据sId增加num*/
    boolean plusSCartBySId(int sId);

    /*根据sId减少num*/
    boolean reduceSCartBySId(int sId);

    /*根据sId批量删除购物车*/
    boolean deleteSCartBySId(ArrayList sIds);
}