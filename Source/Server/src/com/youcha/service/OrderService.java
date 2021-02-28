package com.youcha.service;

import com.youcha.dao.orderDao.OrderMapper;
import com.youcha.entity.OrderTable;
import com.youcha.entity.OrderWithDName;
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
     * @Description 前端根据userId获取用户订单（含dName）
     * @Param [userId, status]
     * @Return java.util.ArrayList<com.youcha.entity.OrderTable>
     */
    public ArrayList<ArrayList> getOrderByUserIdAndStatus(String userId, int status) {
        ArrayList<OrderWithDName> orderList =
                orderMapper.getOrderByUserIdAndStatus(userId, status);
        System.out.println("原订单数组：" + orderList);
        //嵌套数组
        ArrayList<ArrayList> newOrderList = NestedArrayN(orderList);
        System.out.println("嵌套订单数组：" + newOrderList);
        return newOrderList;
    }

    /**
     * @Description 前端更新订单表，插入assId
     * @Param [orderId, assId]
     * @Return boolean
     */
    public boolean updateOrderAssByOrderId(int orderId, int assId) {
        boolean result = orderMapper.updateOrderAss(orderId, assId);
        System.out.println("插入assId的结果为：" + result);
        return result;
    }

    /**
     * @Description 后端根据status获取订单详情
     * @Param [status]
     * @Return java.util.ArrayList<com.youcha.entity.OrderTable>
     */
    public ArrayList<OrderTable> getOrderByStatus(int status) {
        ArrayList<OrderTable> orders = orderMapper.getOrderByStatus(status);
        System.out.println(orders);
        return orders;
    }

    /**
     * @Description 后端更改订单status状态
     * @Param [oId]
     * @Return boolean
     */
    public boolean updateOrderStatusByOId(int oId) {
        boolean result = orderMapper.updateOrderStatusByOId(oId);
        System.out.println(result);
        return result;
    }

    /**
     * @Description 后台根据oId和status查找订单
     * @Param [oId, status]
     * @Return java.util.ArrayList<com.youcha.entity.OrderTable>
     */
    public ArrayList<ArrayList> getOrderByOIdAndStatus(int oId, boolean status) {
        ArrayList<OrderTable> orders = orderMapper.getOrderByOIdAndStatus(oId, status);
        ArrayList<ArrayList> newOrders = NestedArray(orders);
        System.out.println(newOrders);
        return newOrders;
    }

    /**
     * @Description 后台根据price区间和status查找订单
     * @Param [low, high, status]
     * @Return java.util.ArrayList<com.youcha.entity.OrderTable>
     */
    public ArrayList<ArrayList> getOrderByTPriceAndStatus(
            int low, int high, boolean status) {
        ArrayList<OrderTable> orders =
                orderMapper.getOrderByTPriceAndStatus(low, high, status);
        ArrayList<ArrayList> newOrders = NestedArray(orders);
        System.out.println(newOrders);
        return newOrders;
    }

    /**
     * @Description 后台根据评价id获取订单
     * @Param [assId]
     * @Return com.youcha.entity.OrderTable
     */
    public OrderTable getOrderByAssId(int assId) {
        OrderTable order = orderMapper.getOrderByAssId(assId);
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
        int orderId = orderMapper.getOrderIdNum();
        System.out.println("已存在订单的orderId个数为：" + orderId);
        //2、获取oId
        int oId = orderMapper.getOIdNum()+1;
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
            boolean result = orderMapper.addOrder(order);
            System.out.println(result);
        }
        return true;
    }

    /**
     * @Description 设置取餐码
     * @Param [oId]
     * @Return java.lang.String
     */
    public String getCode(int oId){
        String nCode;
        //1、获取最新订单的code
        String oCode = orderMapper.getCodeByOId(oId);
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

    /**
     * @Description 将订单数组根据oId转换为嵌套数组
     * @Param [oldOrders]
     * @Return java.util.ArrayList<java.util.ArrayList>
     */
    public ArrayList<ArrayList> NestedArray(ArrayList<OrderTable> oldOrders){
        //新数组
        ArrayList<ArrayList> newOrderList = new ArrayList<>();
        //内部嵌套数组
        ArrayList<OrderTable> singleOrder = new ArrayList<>();
        //flag标志位，记录oId，判断是否为同一订单
        int flag = 0;
        //将订单数组根据oId嵌套成为新的订单数组
        for (OrderTable order : oldOrders) {
            if (flag == order.getOId()){
                //当前和上一个为同一订单 -> 放到singleOrder
                singleOrder.add(order);
            } else {
                //当前和上一个不为同一订单
                //如果singleOrder不为空，先存到newOrderList
                if (!singleOrder.isEmpty()){
                    System.out.println("oId为" + flag + "的订单数组：" + singleOrder);
                    newOrderList.add(singleOrder);
                    //重置singleOrder
                    singleOrder = new ArrayList<>();
                }
                //否则，放到singleOrder
                singleOrder.add(order);
                //重新设置flag
                flag = order.getOId();
            }
        }
        //将最后一个数组插入newOrderList
        newOrderList.add(singleOrder);
        return newOrderList;
    }

    /**
     * @Description 将订单数组（含dName）根据oId转换为嵌套数组
     * @Param [oldOrders]
     * @Return java.util.ArrayList<java.util.ArrayList>
     */
    public ArrayList<ArrayList> NestedArrayN(ArrayList<OrderWithDName> oldOrders){
        //新数组
        ArrayList<ArrayList> newOrderList = new ArrayList<>();
        //内部嵌套数组
        ArrayList<OrderWithDName> singleOrder = new ArrayList<>();
        //flag标志位，记录oId，判断是否为同一订单
        int flag = 0;
        //将订单数组根据oId嵌套成为新的订单数组
        for (OrderWithDName order : oldOrders) {
            if (flag == order.getOId()){
                //当前和上一个为同一订单 -> 放到singleOrder
                singleOrder.add(order);
            } else {
                //当前和上一个不为同一订单
                //如果singleOrder不为空，先存到newOrderList
                if (!singleOrder.isEmpty()){
                    System.out.println("oId为" + flag + "的订单数组：" + singleOrder);
                    newOrderList.add(singleOrder);
                    //重置singleOrder
                    singleOrder = new ArrayList<>();
                }
                //否则，放到singleOrder
                singleOrder.add(order);
                //重新设置flag
                flag = order.getOId();
            }
        }
        //将最后一个数组插入newOrderList
        newOrderList.add(singleOrder);
        return newOrderList;
    }
}