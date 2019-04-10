package com.zhf.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by hongfei.zhang on 2019/4/10
 */
@Controller
public class TestController {

    private static final Logger log = LoggerFactory.getLogger(TestController.class);

    // 测试页
    @RequestMapping("/index")
    public String index(HttpServletRequest request){
        log.info("测试成功！");

        return "index";
    }

}
