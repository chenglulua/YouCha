package com.youcha.service;

import com.youcha.dao.typeDao.TypeMapper;
import com.youcha.entity.Type;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.ArrayList;

/**
 * @ClassName TypeService
 * @Description Type应用逻辑层
 * @Date 2021-01-23 17:26
 */
@Service
@Transactional(readOnly = false)
public class TypeService {

    @Resource
    private TypeMapper typeMapper;

    /**
     * @Description 后台获取所有类型
     * @Param []
     * @Return java.util.ArrayList<com.youcha.entity.Type>
     */
    public ArrayList<Type> getAllTypes() {
        ArrayList<Type> typeList = typeMapper.getAllTypes();
        System.out.println(typeList);
        return typeList;
    }

    /**
     * @Description 后台根据id获取类型
     * @Param [typeId]
     * @Return com.youcha.entity.Type
     */
    public Type getTypeById(int typeId) {
        Type type = typeMapper.getTypeById(typeId);
        System.out.println(type);
        return type;
    }

    /**
     * @Description 后台根据tName新增类型
     * @Param [tName]
     * @Return boolean
     */
    public boolean addType(String tName) {
        Type type = new Type();
        //1、设置typeId = num + 1
        int num = typeMapper.getTypeNum();
        type.setTypeId(num + 1);
        type.setTName(tName);
        //2、新增type
        boolean result = typeMapper.addType(type);
        System.out.println("type新增结果：" + result);
        return result;
    }
}