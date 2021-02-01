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
     * @Description 前端根据assId获取评价详情
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
     * @Param [drinkId, star]
     * @Return boolean
     */
    @ResponseBody
    @RequestMapping("addAss")
    public boolean addAss(@RequestParam("drinkId") int drinkId,
                          @RequestParam("star") int star,
                          @RequestParam("orderId") int orderId) {
        //1、插入assessment表
        int assId = this.assService.addAss(drinkId, star);
        //2、将assId插入order表
        boolean result1 = this.orderService.updateOrderAss(orderId, assId);
        //3、根据drinkId在assessment表中计算evStar
        int evStar = this.assService.getStarSum(drinkId);
        //4、更改drink表中的evStar
        boolean result2 = this.drinkService.updateDrinkEvStar(drinkId, evStar);
        return result2;
    }
}
