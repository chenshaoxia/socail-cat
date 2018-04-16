package com.chendi.jiyi.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.chendi.jiyi.Enum.CategoryEnum;
import com.chendi.jiyi.dao.UserDAO;
import com.chendi.jiyi.dto.CommonTools;
import com.chendi.jiyi.dto.UserStatus;
import com.chendi.jiyi.entity.User;

import net.coobird.thumbnailator.Thumbnails;

@Service
public class UserService {
	@Autowired
	private UserDAO userDAO;

	public int addUser(User user, MultipartFile picture, HttpServletRequest request) throws IOException {
		user.setStatus(UserStatus.UNDER_AUDITING);
		user.setCredit(80);
		user.setCreateTime(CommonTools.getCurrentDate());
		user.setWealth(0);
		user.setReleaseNum(0);
		user.setRewardNum(0);
		user.setBuyReleaseNum(0);
		user.setAcceptRewardNum(0);
		user.setDissensionNum(0);
		if ("女".equals(user.getSex())) {
			user.setPicture("/picture/header/girl.jpg");
		} else {
			user.setPicture("/picture/header/boy.jpg");
		}

		String fileName = picture.getOriginalFilename();
		String suffix = fileName.substring(fileName.lastIndexOf("."));
		String path = "picture/" + CategoryEnum.REALNAME.getName() + "/" + user.getId() + suffix;
		user.setRealName(path);
		Thumbnails.of(picture.getInputStream()).scale(1f).outputQuality(0.25f)
			.toFile(request.getServletContext().getRealPath("") + "/" + path);
		return userDAO.addUser(user);
	}

	public User login(String id, String password) {
		return userDAO.login(id, password);
	}

	public int updateStatus(String id, int status, String auditor) {
		return userDAO.updateStatus(id, status, auditor);
	}

	public User queryName(String id){
		return userDAO.queryName(id);
	}
	
	public User queryById(String id) {
		return userDAO.queryById(id);
	}

	public List<User> queryByStatus(int status) {
		return userDAO.queryByStatus(status);
	}

	public int updateWealth(String id, int wealth) {
		return userDAO.updateWealth(id, wealth);
	}
}
