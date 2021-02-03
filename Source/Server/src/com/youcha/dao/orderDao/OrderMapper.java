package com.youcha.dao.orderDao;

import com.youcha.entity.OrderTable;
import org.apache.ibatis.annotations.Param;

import java.util.ArrayList;

/**
 * @ClassName OrderMapper
 * @Description Order映射器接口
 * @Date 2021-01-19 15:40
 */
public interface OrderMapper {

    /*根据用户id和状态查找订单信息*/
    public ArrayList<OrderTable> getOrderByUserIdAndStatus(
            @Param("userId") int userId, @Param("status") int status);

    /*更新评价assId*/
    public boolean updateOrderAss(@Param("orderId") int orderId, @Param("assId") int assId);

    /*根据状态查找订单信息*/
    public ArrayList<OrderTable> getOrderByStatus(int status);

    /*更改订单状态*/
    public boolean updateOrderStatusByOId(int oId);

    /*根据oId查找订单信息*/
    public ArrayList<OrderTable> getOrderByOId(int oId);

    /*根据总价格区间查找订单信息*/
    public ArrayList<OrderTable> getOrderByTPrice(
            @Param("low") int low, @Param("high") int high);
}
