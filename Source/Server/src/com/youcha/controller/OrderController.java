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
     * @Description 前端根据userId和订单状态获取用户订单
     * @Param [userId, status]
     * @Return java.util.ArrayList<com.youcha.entity.OrderTable>
     */
    @ResponseBody
    @RequestMapping("getOrderByUserIdAndStatus")
    public ArrayList<OrderTable> getOrderByUserIdAndStatus(
            @RequestParam("userId") int userId, @RequestParam("status") int status){
        return this.orderService.getOrderByUserIdAndStatus(userId, status);
    }

    /**
     * @Description 后台根据status获取订单详情
     * @Param [status]
     * @Return java.util.ArrayList<com.youcha.entity.OrderTable>
     */
    @ResponseBody
    @RequestMapping("getOrderByStatus")
    public ArrayList<OrderTable> getOrderByStatus(@RequestParam("status") int status) {
        return this.orderService.getOrderByStatus(status);
    }

    /**
     * @Description 后台更改订单status状态
     * @Param [oId]
     * @Return boolean
     */
    @ResponseBody
    @RequestMapping("updateOrderStatusByOId")
    public boolean updateOrderStatusByOId(@RequestParam("oId") int oId) {
        return this.orderService.updateOrderStatusByOId(oId);
    }

    /**
     * @Description 后台根据oId查找订单
     * @Param [oId]
     * @Return java.util.ArrayList<com.youcha.entity.OrderTable>
     */
    @ResponseBody
    @RequestMapping("getOrderByOId")
    public ArrayList<OrderTable> getOrderByOId(@RequestParam("oId") int oId) {
        return this.orderService.getOrderByOId(oId);
    }

    /**
     * @Description 后台根据价格区间查找订单
     * @Param [low, high]
     * @Return java.util.ArrayList<com.youcha.entity.OrderTable>
     */
    @ResponseBody
    @RequestMapping("getOrderByTPrice")
    public ArrayList<OrderTable> getOrderByTPrice(
            @RequestParam("low") int low, @RequestParam("high") int high) {
        return this.orderService.getOrderByTPrice(low, high);
    }

    /**
     * @Description 后台根据评价id获取订单
     * @Param [assId]
     * @Return com.youcha.entity.OrderTable
     */
    @ResponseBody
    @RequestMapping("getOrderByAssId")
    public OrderTable getOrderByAssId(int assId) {
        return this.orderService.getOrderByAssId(assId);
    }
}