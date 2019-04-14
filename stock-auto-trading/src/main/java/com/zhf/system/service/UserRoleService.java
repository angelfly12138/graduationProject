package com.zhf.system.service;

import com.zhf.common.service.IService;
import com.zhf.system.domain.UserRole;

public interface UserRoleService extends IService<UserRole> {

	void deleteUserRolesByRoleId(String roleIds);

	void deleteUserRolesByUserId(String userIds);
}
