package com.youcha.controller;

import com.youcha.entity.Assessment;
import com.youcha.service.AssessmentService;
import com.youcha.service.DrinkService;
import com.youcha.service.OrderService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.ArrayList;

/**
 * @ClassName AssessmentController
 * @Description Assessment控制器类
 * @Date 2021-01-30 15:24
 */
@Controller("assessmentController")
@RequestMapping("assessment")
public class AssessmentController {

    @Resource
    private AssessmentService assService;
    @Resource
    private OrderService orderService;
    @Resource
    private DrinkService drinkService;

    /**
     * @Description 前端根据assId获取评价
     * @Param [assId]
     * @Return com.youcha.entity.Assessment
     */
    @ResponseBody
    @RequestMapping("getAssById")
    public Assessment getAssById(@RequestParam("assId") int assId){
        return this.assService.getAssById(assId);
    }

    /**
     * @Description 前端新增评价
     * @Param [drinkId, star, orderId]
     * @Return boolean
     */
    @ResponseBody
    @RequestMapping("addAss")
    public boolean addAss(@RequestParam("drinkId") int drinkId,
                          @RequestParam("star") int star,
                          @RequestParam("orderId") int orderId) {
        //1、插入assessment表
        int assId = this.assService.addAss(drinkId, star);
        //2、更新订单表，插入assId
        boolean result1 = this.orderService.updateOrderAssByOrderId(orderId, assId);
        //3、根据drinkId在评价表中计算evStar
        int evStar = this.assService.getEvStarByDrinkId(drinkId);
        //更改drink表中的evStar
        boolean result2 = this.drinkService.updateDrinkEvStarByDrinkId(drinkId, evStar);
        return result2;
    }

    /**
     * @Description 后台获取所有评论
     * @Param []
     * @Return java.util.ArrayList<com.youcha.entity.Assessment>
     */
    @ResponseBody
    @RequestMapping("getAllAss")
    public ArrayList<Assessment> getAllAss() {
        return this.assService.getAllAss();
    }

    /**
     * @Description 后台根据drinkId获取评论
     * @Param [drinkId]
     * @Return java.util.ArrayList<com.youcha.entity.Assessment>
     */
    @ResponseBody
    @RequestMapping("getAssByDrinkId")
    public ArrayList<Assessment> getAssByDrinkId(@RequestParam("drinkId") int drinkId) {
        return this.assService.getAssByDrinkId(drinkId);
    }

    /**
     * @Description 后台根据star获取评论
     * @Param [star]
     * @Return java.util.ArrayList<com.youcha.entity.Assessment>
     */
    @ResponseBody
    @RequestMapping("getAssByStar")
    public ArrayList<Assessment> getAssByStar(@RequestParam("star") int star) {
        return this.assService.getAssByStar(star);
    }
}