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

    @GetMapping("/front/search")
    public String searchProduct() {
        return "/front/product_search";
    }

    @GetMapping("/front/login")
    public String login() {
        return "front/login";
    }

    @GetMapping("/front/register")
    public String register() {
        return "front/register";
    }

    @GetMapping("/front/itme1")
    public String itme1() {
        return "/front/itme1";
    }

    @GetMapping("/front/itme2")
    public String itme2() {
        return "/front/itme2";
    }

    @GetMapping("/front/itme3")
    public String itme3() {
        return "/front/itme3";
    }

    @GetMapping("/front/itme4")
    public String itme4() {
        return "/front/itme4";
    }

    @GetMapping("/front/itme5")
    public String itme5() {
        return "/front/itme5";
    }

    @GetMapping("/front/itme6")
    public String itme6() {
        return "/front/itme6";
    }

    @GetMapping("/front/itme7")
    public String itme7() {
        return "/front/itme7";
    }

    @GetMapping("/front/stock")
    public String stock() {
        return "/front/stock";
    }

    @GetMapping("/front/shenzhen")
    public String shenzhen() {
        return "/front/shenzhen";
    }
}
