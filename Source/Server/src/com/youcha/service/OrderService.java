package com.youcha.service;

import com.youcha.dao.orderDao.OrderMapper;
import com.youcha.entity.OrderTable;
import com.youcha.util.MyBatisUtil;
import org.apache.ibatis.session.SqlSession;
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
@Transactional(readOnly = true)
public class OrderService {

    @Resource
    private OrderMapper orderMapper;

    /**
     * @Description 前端根据userId获取用户订单
     * @Param [userId, status]
     * @Return java.util.ArrayList<com.youcha.entity.OrderTable>
     */
    public ArrayList<OrderTable> getOrderByUserIdAndStatus(int userId, int status) {
        SqlSession session = MyBatisUtil.getSession();
        orderMapper = session.getMapper(OrderMapper.class);
        ArrayList<OrderTable> orderList = orderMapper.getOrderByUserIdAndStatus(userId, status);
        System.out.println(orderList);
        session.close();
        return orderList;
    }
}
