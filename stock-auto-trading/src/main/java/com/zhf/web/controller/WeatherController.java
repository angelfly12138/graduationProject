package com.zhf.web.controller;

import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zhf.common.annotation.Log;
import com.zhf.common.controller.BaseController;
import com.zhf.common.domain.ResponseBo;
import com.zhf.common.util.HttpUtils;
import com.zhf.common.util.FebsConstant;

@Controller
public class WeatherController extends BaseController {

    private Logger log = LoggerFactory.getLogger(this.getClass());

    @Log("获取天气信息")
    @RequestMapping("weather")
    @RequiresPermissions("weather:list")
    public String weather() {
        return "web/weather/weather";
    }

    @RequestMapping("weather/query")
    @ResponseBody
    public ResponseBo queryWeather(String areaId) {
        try {
            String data = HttpUtils.sendPost(FebsConstant.MEIZU_WEATHER_URL, "cityIds=" + areaId);
            return ResponseBo.ok(data);
        } catch (Exception e) {
            log.error("查询天气失败", e);
            return ResponseBo.error("查询天气失败，请联系网站管理员！");
        }
    }
}
