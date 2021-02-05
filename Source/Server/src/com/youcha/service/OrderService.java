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
     * @Description 前端更新订单表，插入assId
     * @Param [orderId, assId]
     * @Return boolean
     */
    public boolean updateOrderAssByOrderId(int orderId, int assId) {
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

    /**
     * @Description 后台根据评价id获取订单
     * @Param [assId]
     * @Return com.youcha.entity.OrderTable
     */
    public OrderTable getOrderByAssId(int assId) {
        OrderTable order = this.orderMapper.getOrderByAssId(assId);
        System.out.println(order);
        return order;
    }

    /**
     * @Description 前端下单
     * @Param [orders]
     * @Return boolean
     */
    public boolean addOrder(ArrayList<OrderTable> orders) {
        //1、获取orderId
        int orderId = this.orderMapper.getOrderIdNum();
        System.out.println("已存在订单的orderId个数为：" + orderId);
        //2、获取oId
        int oId = this.orderMapper.getOIdNum();
        System.out.println("已存在订单的oId个数为：" + oId);
        //3、依次存储orders
        for (OrderTable order : orders) {
            //4、设置orderId
            orderId += 1;
            order.setOrderId(orderId);
            //5、设置oId
            oId += 1;
            order.setOId(oId);
            //6、设置取餐码
            System.out.print(order + "\n");
        }
        return false;
    }
}