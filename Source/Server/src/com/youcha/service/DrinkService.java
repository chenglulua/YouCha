package com.youcha.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * @ClassName DrinkService
 * @Description User应用逻辑层
 * @Author 程璐
 * @Date 2021-01-10 15:25
 */
@Service
@Transactional(readOnly = true)
public class DrinkService {
}