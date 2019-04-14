package com.zhf.system.dao;

import java.util.List;

import com.zhf.common.config.MyMapper;
import com.zhf.system.domain.Role;
import com.zhf.system.domain.RoleWithMenu;

public interface RoleMapper extends MyMapper<Role> {
	
	List<Role> findUserRole(String userName);
	
	List<RoleWithMenu> findById(Long roleId);
}