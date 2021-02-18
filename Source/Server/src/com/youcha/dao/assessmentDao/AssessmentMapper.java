package com.youcha.dao.assessmentDao;

import com.youcha.entity.Assessment;

import java.util.ArrayList;

/**
 * @ClassName AssessmentMapper
 * @Description Assessment映射器接口
 * @Date 2021-01-13 14:17
 */
public interface AssessmentMapper {

    /*根据assId获取评价详情*/
    Assessment getAssById(int assId);

    /*获取评价总数*/
    int getAllAssSum();

    /*新增评价*/
    boolean addAss(Assessment ass);

    /*根据drinkId计算evStar*/
    int getEvStarByDrinkId(int drinkId);

    /*获取所有评价*/
    ArrayList<Assessment> getAllAss();

    /*根据drinkId获取评价*/
    ArrayList<Assessment> getAssByDrinkId(int drinkId);

    /*根据star获取评价*/
    ArrayList<Assessment> getAssByStar(int star);
}