package com.youcha.controller;

import com.youcha.entity.Type;
import com.youcha.service.TypeService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.ArrayList;

/**
 * @ClassName TypeController
 * @Description Type控制器类
 * @Date 2021-01-23 17:13
 */
@Controller
@RequestMapping("type")
public class TypeController {

    @Resource
    private TypeService typeService;

    /**
     * @Description 后台获取所有类型
     * @Param []
     * @Return java.util.ArrayList<com.youcha.entity.Type>
     */
    @ResponseBody
    @RequestMapping("getAllTypes")
    public ArrayList<Type> getAllTypes(){
        return this.typeService.getAllTypes();
    }

    /**
     * @Description 后台根据id获取类型
     * @Param [typeId]
     * @Return com.youcha.entity.Type
     */
    @ResponseBody
    @RequestMapping("getTypeById")
    public Type getTypeById(int typeId) {
        return this.typeService.getTypeById(typeId);
    }
}
