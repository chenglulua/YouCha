package com.youcha.service;

import com.youcha.dao.orderDao.OrderMapper;
import com.youcha.entity.OrderTable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.text.NumberFormat;
import java.util.ArrayList;
import java.util.Calendar;

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
        int oId = this.orderMapper.getOIdNum()+1;
        System.out.println("当前订单的oId为：" + oId);
        //3、获取取餐码
        String code = getCode(oId);
        System.out.println("取餐码为：" + code);
        //4、依次存储orders
        for (OrderTable order : orders) {
            //5、设置orderId
            orderId += 1;
            order.setOrderId(orderId);
            //6、设置oId
            order.setOId(oId);
            //7、设置code
            order.setCode(code);
            System.out.print("order为：" + order + "\n");
            //8、存储
            boolean result = this.orderMapper.addOrder(order);
            System.out.println(result);
        }
        return true;
    }

    /**
     * @Description 设置取餐码
     * @Param []
     * @Return java.lang.String
     * @param oId
     */
    public String getCode(int oId){
        String nCode;
        //1、获取最新订单的code
        String oCode = this.orderMapper.getCodeByOId(oId);
        System.out.println("上一个订单code为：" + oCode);
        //2、判断上一个订单的日期与今天是否相同
        //旧日期
        String oDate = oCode.substring(0, 2);
        System.out.println("上一个订单的日期为：" + oDate);
        //当前日期
        Calendar now = Calendar.getInstance();
        int date = now.get(Calendar.DAY_OF_MONTH);
        //日期补齐2位
        String nDate = makeDigit(2, date);
        System.out.println("当前日期为: " + nDate);
        if (oDate.equals(nDate)){
            //3、code从上一个开始继续编码
            //上一个code+1
            int nC = Integer.parseInt(oCode)+1;
            //取餐码补齐5位
            nCode = makeDigit(5, nC);
        } else {
            //3、code从001开始编码
            nCode = nDate + "001";
        }
        return nCode;
    }

    /**
     * @Description 在num前补0，到有i位数的字符串
     * @Param [i, num]
     * @Return java.lang.String
     */
    public String makeDigit(int i, int num) {
        NumberFormat formatter = NumberFormat.getNumberInstance();
        //设置补足为几位
        formatter.setMinimumIntegerDigits(i);
        formatter.setGroupingUsed(false);
        return formatter.format(num);
    }
}