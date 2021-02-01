package com.youcha.service;

import com.youcha.dao.assessmentDao.AssessmentMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;

/**
 * @ClassName AssessmentService
 * @Description Assessment应用逻辑层
 * @Date 2021-01-30 15:25
 */
@Service("assessmentService")
@Transactional(readOnly = true)
public class AssessmentService {

    @Resource
    private AssessmentMapper assMapper;
}
