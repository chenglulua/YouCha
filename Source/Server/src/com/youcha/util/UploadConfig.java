package com.youcha.util;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.multipart.MultipartResolver;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;

/**
 * @ClassName UploadConfig
 * @Description
 * @Author 程璐
 * @Date 2021-02-20 10:49
 */
@Configuration
public class UploadConfig {
    @Bean(name="multipartResolver")
    public MultipartResolver multipartResolver(){
        return new CommonsMultipartResolver();
    }
}
