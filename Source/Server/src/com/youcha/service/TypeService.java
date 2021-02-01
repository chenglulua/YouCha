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
        ArrayList<Type> typeList = this.typeMapper.getAllTypes();
        System.out.println(typeList);
        return typeList;
    }
}
