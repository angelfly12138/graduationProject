package com.zhf.front.controller;

import com.zhf.common.controller.BaseController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Created by hongfei.zhang on 2019/4/13
 */
@Controller
public class IndexController extends BaseController {
    private Logger log = LoggerFactory.getLogger(this.getClass());

    @GetMapping("/front")
    public String front() {
        return "front/index";
    }

    @GetMapping("/front/newbie")
    public String newbieGuide() {
        return "front/newbie";
    }

    @GetMapping("/front/login")
    public String login() {
        return "front/login";
    }

    @GetMapping("/front/register")
    public String register() {
        return "front/register";
    }

}
