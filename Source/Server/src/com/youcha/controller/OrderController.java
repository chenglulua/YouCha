package com.youcha.controller;

import com.youcha.entity.OrderTable;
import com.youcha.service.OrderService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.ArrayList;

/**
 * @ClassName OrderController
 * @Description Order控制器类
 * @Date 2021-01-30 14:57
 */
@Controller
@RequestMapping("order")
public class OrderController {

    @Resource
    private OrderService orderService;

    /**
     * @Description 前端根据userId和status获取订单
     * @Param [userId, status]
     * @Return java.util.ArrayList<com.youcha.entity.OrderTable>
     */
    @ResponseBody
    @RequestMapping("getOrderByUserIdAndStatus")
    public ArrayList<ArrayList> getOrderByUserIdAndStatus(
            @RequestParam("userId") String userId, @RequestParam("status") int status){
        return this.orderService.getOrderByUserIdAndStatus(userId, status);
    }

    /**
     * @Description 后台根据status获取订单
     * @Param [status]
     * @Return java.util.ArrayList<com.youcha.entity.OrderTable>
     */
    @ResponseBody
    @RequestMapping("getOrderByStatus")
    public ArrayList<OrderTable> getOrderByStatus(@RequestParam("status") int status) {
        return this.orderService.getOrderByStatus(status);
    }

    /**
     * @Description 后台根据oId更改status
     * @Param [oId]
     * @Return boolean
     */
    @ResponseBody
    @RequestMapping("updateOrderStatusByOId")
    public boolean updateOrderStatusByOId(@RequestParam("oId") int oId) {
        return this.orderService.updateOrderStatusByOId(oId);
    }

    /**
     * @Description 后台根据oId和status查找订单
     * @Param [oId, status]
     * @Return java.util.ArrayList<com.youcha.entity.OrderTable>
     */
    @ResponseBody
    @RequestMapping("getOrderByOIdAndStatus")
    public ArrayList<ArrayList> getOrderByOIdAndStatus(
            @RequestParam("oId") int oId, @RequestParam("status") boolean status) {
        return this.orderService.getOrderByOIdAndStatus(oId, status);
    }

    /**
     * @Description 后台根据price区间和status查找订单
     * @Param [low, high, status]
     * @Return java.util.ArrayList<com.youcha.entity.OrderTable>
     */
    @ResponseBody
    @RequestMapping("getOrderByTPriceAndStatus")
    public ArrayList<ArrayList> getOrderByTPriceAndStatus(
            @RequestParam("low") int low, @RequestParam("high") int high,
            @RequestParam("status") boolean status) {
        return this.orderService.getOrderByTPriceAndStatus(low, high, status);
    }

    /**
     * @Description 后台根据assId获取订单
     * @Param [assId]
     * @Return com.youcha.entity.OrderTable
     */
    @ResponseBody
    @RequestMapping("getOrderByAssId")
    public OrderTable getOrderByAssId(@RequestParam("assId") int assId) {
        return this.orderService.getOrderByAssId(assId);
    }

    /**
     * @Description 前端下单
     * @Param [orders]
     * @Return boolean
     */
    @ResponseBody
    @RequestMapping("addOrder")
    public boolean addOrder(ArrayList<OrderTable> orders) {
        return this.orderService.addOrder(orders);
    }
}