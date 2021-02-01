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
}
