package com.chendi.jiyi.service;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chendi.jiyi.Enum.UserStatus;
import com.chendi.jiyi.dao.AdminDAO;
import com.chendi.jiyi.dao.UserDAO;
import com.chendi.jiyi.entity.Admin;
import com.chendi.jiyi.entity.Permission;
import com.chendi.jiyi.entity.Role;
import com.chendi.jiyi.entity.User;

@Service
public class AdminService {

	@Autowired
	private AdminDAO adminDAO;
	@Autowired
	private UserDAO userDAO;
	// @Autowired
	// private

	public Admin login(String id, String password) {
		return adminDAO.login(id, password);
	}
	
	public Admin queryById(String id) {
		return adminDAO.queryById(id);
	}

	public Set<Role> queryRoles(String id){
		return adminDAO.queryRoles(id);
	}
	
	public Set<Permission> queryPermissions(Set<Integer> roleList){
		return adminDAO.queryPermissions(roleList);
	}
	
	/*public void activateById(String id, String auditor) {
		userDAO.act(id, UserStatus.REGULAR, auditor);
	}*/

	// 查询所有用户
	public List<User> queryAll(){
		return userDAO.queryAll();
	}

	// 查询所有未审核的用户
	public List<User> queryAllNotActive(){
		return userDAO.queryAllNotActive();
	}
}
