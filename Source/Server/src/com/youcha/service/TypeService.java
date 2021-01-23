package com.youcha.service;

import com.youcha.dao.typeDao.TypeMapper;
import com.youcha.entity.Type;
import com.youcha.util.MyBatisUtil;
import org.apache.ibatis.session.SqlSession;
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
@Transactional(readOnly = true)
public class TypeService {

    @Resource
    private TypeMapper typeMapper;

    /**
     * @Description 后台获取所有类型
     * @Param []
     * @Return java.util.ArrayList<com.youcha.entity.Type>
     */
    public ArrayList<Type> getAllTypes() {
        SqlSession session = MyBatisUtil.getSession();
        typeMapper = session.getMapper(TypeMapper.class);
        ArrayList<Type> typeList = typeMapper.getAllTypes();
        System.out.println(typeList);
        session.close();
        return typeList;
    }
}
