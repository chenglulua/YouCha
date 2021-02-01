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
}
