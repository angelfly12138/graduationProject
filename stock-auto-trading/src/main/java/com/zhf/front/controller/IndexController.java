package com.zhf.front.controller;

import com.zhf.common.controller.BaseController;
import com.zhf.common.domain.ResponseBo;
import com.zhf.common.util.MD5Utils;
import com.zhf.system.service.UserService;
import org.apache.shiro.authc.*;
import org.apache.shiro.session.Session;
import org.apache.shiro.subject.Subject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by hongfei.zhang on 2019/4/13
 */
@Controller
public class IndexController extends BaseController {
    private Logger log = LoggerFactory.getLogger(this.getClass());

    private static final String CODE_KEY = "_code";

    @Autowired
    private UserService userService;

    @GetMapping("/front")
    public String front() {
        return "front/index";
    }

    @GetMapping("/front/newbie")
    public String newbieGuide() {
        return "front/newbie";
    }

    @GetMapping("/front/info")
    public String infoOpen() {
        return "/front/info_open";
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
