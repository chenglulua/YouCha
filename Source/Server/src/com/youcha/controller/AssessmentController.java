package com.youcha.controller;

import com.youcha.service.AssessmentService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

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
    private AssessmentService assService = new AssessmentService();
}
