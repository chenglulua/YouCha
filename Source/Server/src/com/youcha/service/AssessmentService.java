package com.youcha.service;

import com.youcha.dao.assessmentDao.AssessmentMapper;
import com.youcha.entity.Assessment;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.ArrayList;

/**
 * @ClassName AssessmentService
 * @Description Assessment应用逻辑层
 * @Date 2021-01-30 15:25
 */
@Service("assessmentService")
@Transactional(readOnly = false)
public class AssessmentService {

    @Resource
    private AssessmentMapper assMapper;

    /**
     * @Description 根据assId获取评价详情
     * @Param [assId]
     * @Return com.youcha.entity.Assessment
     */
    public Assessment getAssById(int assId) {
        Assessment ass = this.assMapper.getAssById(assId);
        System.out.println(ass);
        return ass;
    }

    /**
     * @Description 前端新增评价
     * @Param [drinkId, oId]
     * @Return boolean
     */
    public int addAss(int drinkId, int star) {
        //1、获取Assessment表中已存在的记录数
        int sum = this.assMapper.getAllAssSum();
        System.out.println("评价总数为：" + sum);
        //2、设置addId = sum + 1
        int assId = sum + 1;
        //3、新增评价到Assessment表
        Assessment ass = new Assessment();
        ass.setAssId(assId);
        ass.setDrinkId(drinkId);
        ass.setStar(star);
        boolean result = this.assMapper.addAss(ass);
        System.out.println("新增评价的结果为：" + result);
        return assId;
    }

    /**
     * @Description 计算drinkId的evStar
     * @Param [drinkId]
     * @Return int
     */
    public int getStarSum(int drinkId) {
        int evStar = this.assMapper.getEvStarByDrinkId(drinkId);
        System.out.println("平均分：" + evStar);
        return evStar;
    }

    /**
     * @Description 后台获取所有评论
     * @Param []
     * @Return java.util.ArrayList<com.youcha.entity.Assessment>
     */
    public ArrayList<Assessment> getAllAss() {
        ArrayList<Assessment> assList = this.assMapper.getAllAss();
        System.out.println(assList);
        return assList;
    }

    /**
     * @Description 后台根据饮品id获取评论
     * @Param [drinkId]
     * @Return java.util.ArrayList<com.youcha.entity.Assessment>
     */
    public ArrayList<Assessment> getAssByDrinkId(int drinkId) {
        ArrayList<Assessment> assList = this.assMapper.getAssByDrinkId(drinkId);
        System.out.println(assList);
        return assList;
    }

    /**
     * @Description 后台根据星级获取评论
     * @Param [star]
     * @Return java.util.ArrayList<com.youcha.entity.Assessment>
     */
    public ArrayList<Assessment> getAssByStar(int star) {
        ArrayList<Assessment> assList = this.assMapper.getAssByStar(star);
        System.out.println(assList);
        return assList;
    }
}