package com.zhf.system.dao;

import java.util.List;

import com.zhf.common.config.MyMapper;
import com.zhf.system.domain.User;
import com.zhf.system.domain.UserWithRole;

public interface UserMapper extends MyMapper<User> {

	List<User> findUserWithDept(User user);
	
	List<UserWithRole> findUserWithRole(Long userId);
	
	User findUserProfile(User user);
}