package com.youcha.service;

import com.youcha.dao.orderDao.OrderMapper;
import com.youcha.entity.OrderTable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.ArrayList;

/**
 * @ClassName OrderService
 * @Description Order应用逻辑层
 * @Date 2021-01-30 15:00
 */
@Service
@Transactional(readOnly = false)
public class OrderService {

    @Resource
    private OrderMapper orderMapper;

    /**
     * @Description 前端根据userId获取用户订单
     * @Param [userId, status]
     * @Return java.util.ArrayList<com.youcha.entity.OrderTable>
     */
    public ArrayList<OrderTable> getOrderByUserIdAndStatus(int userId, int status) {
        ArrayList<OrderTable> orderList =
                this.orderMapper.getOrderByUserIdAndStatus(userId, status);
        System.out.println(orderList);
        return orderList;
    }

    /**
     * @Description 前端更新order表，插入评价assId
     * @Param [orderId, assId]
     * @Return boolean
     */
    public boolean updateOrderAss(int orderId, int assId) {
        boolean result = this.orderMapper.updateOrderAss(orderId, assId);
        System.out.println("插入assId的结果为：" + result);
        return result;
    }

    /**
     * @Description 后端根据status获取订单详情
     * @Param [status]
     * @Return java.util.ArrayList<com.youcha.entity.OrderTable>
     */
    public ArrayList<OrderTable> getOrderByStatus(int status) {
        ArrayList<OrderTable> orders = this.orderMapper.getOrderByStatus(status);
        System.out.println(orders);
        return orders;
    }

    /**
     * @Description 后端更改订单status状态
     * @Param [oId]
     * @Return boolean
     */
    public boolean updateOrderStatusByOId(int oId) {
        boolean result = this.orderMapper.updateOrderStatusByOId(oId);
        System.out.println(result);
        return result;
    }

    /**
     * @Description 后台根据oId查找订单
     * @Param [oId]
     * @Return java.util.ArrayList<com.youcha.entity.OrderTable>
     */
    public ArrayList<OrderTable> getOrderByOId(int oId) {
        ArrayList<OrderTable> orders = this.orderMapper.getOrderByOId(oId);
        System.out.println(orders);
        return orders;
    }

    /**
     * @Description 后台根据价格区间查找订单
     * @Param [low, high]
     * @Return java.util.ArrayList<com.youcha.entity.OrderTable>
     */
    public ArrayList<OrderTable> getOrderByTPrice(int low, int high) {
        ArrayList<OrderTable> orders = this.orderMapper.getOrderByTPrice(low, high);
        System.out.println(orders);
        return orders;
    }
}
