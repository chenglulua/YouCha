package com.youcha.dao.typeDao;

import com.youcha.entity.Type;

import java.util.ArrayList;

/**
 * @ClassName TypeMapper
 * @Description Type映射器接口
 * @Date 2021-01-19 15:07
 */
public interface TypeMapper {

    /*获取所有类型信息*/
    ArrayList<Type> getAllTypes();

    /*根据id获取类型*/
    Type getTypeById(int typeId);

    /*获取类型总数*/
    int getTypeNum();

    /*新增类型*/
    boolean addType(Type type);
}