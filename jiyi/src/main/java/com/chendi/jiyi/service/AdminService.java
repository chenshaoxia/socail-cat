package com.chendi.jiyi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chendi.jiyi.dao.AdminDAO;
import com.chendi.jiyi.dao.UserDAO;
import com.chendi.jiyi.dto.UserStatus;
import com.chendi.jiyi.entity.Admin;
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
