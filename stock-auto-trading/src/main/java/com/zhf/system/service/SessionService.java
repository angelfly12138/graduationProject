package com.zhf.system.service;

import java.util.List;

import com.zhf.system.domain.UserOnline;

public interface SessionService {

	List<UserOnline> list();

	boolean forceLogout(String sessionId);
}
