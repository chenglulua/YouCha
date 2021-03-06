package com.youcha.controller;

import com.youcha.entity.Type;
import com.youcha.service.TypeService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
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
    @RequestMapping(value = "getAllType", method = RequestMethod.GET)
    public ArrayList<Type> getAllType(){
        return this.typeService.getAllTypes();
    }

    /**
     * @Description 后台根据typeId获取类型
     * @Param [typeId]
     * @Return com.youcha.entity.Type
     */
    @ResponseBody
    @RequestMapping("getTypeByTypeId")
    public Type getTypeByTypeId(@RequestParam("typeId") int typeId) {
        return this.typeService.getTypeById(typeId);
    }

    /**
     * @Description 后台根据tName新增类型
     * @Param [tName]
     * @Return boolean
     */
    @ResponseBody
    @RequestMapping("addType")
    public boolean addType(@RequestParam("tName") String tName) {
        return this.typeService.addType(tName);
    }
}