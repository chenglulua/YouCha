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

    /*根据用户id和状态查找Order信息*/
    public ArrayList<OrderTable> getOrderByUserIdAndStatus(
            @Param("userId") int userId, @Param("status") int status);
}
