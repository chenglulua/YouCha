package com.youcha.dao.orderDao;

import com.youcha.entity.OrderTable;

import java.util.ArrayList;

/**
 * @ClassName OrderMapper
 * @Description
 * @Author 程璐
 * @Date 2021-01-19 15:40
 */
public interface OrderMapper {

    /*根据用户id查找Order信息*/
    public ArrayList<OrderTable> getOrderByUserId(int userId);
}
