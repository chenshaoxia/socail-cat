package com.chendi.jiyi.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.ibatis.annotations.Param;
import org.apache.shiro.crypto.hash.SimpleHash;
import org.apache.shiro.util.ByteSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.chendi.jiyi.Enum.CategoryEnum;
import com.chendi.jiyi.Enum.ReleaseSkillStatus;
import com.chendi.jiyi.Enum.UserStatus;
import com.chendi.jiyi.dao.UserDAO;
import com.chendi.jiyi.dto.CommonTools;
import com.chendi.jiyi.dto.Result;
import com.chendi.jiyi.entity.Admin;
import com.chendi.jiyi.entity.ReleaseSkill;
import com.chendi.jiyi.entity.User;

import net.coobird.thumbnailator.Thumbnails;

@Service
public class UserService {
	@Autowired
	private UserDAO userDAO;
	
	@Autowired
	private LetterService letterService;
	
	//给密码要用的
	//指定散列算法为md5
	private String algorithmName="md5";
	 //散列迭代次数
    private final int hashIterations = 2;


	public int addUser(User user, MultipartFile picture, HttpServletRequest request) throws IOException {
		//给密码加密
		String newPassword=new SimpleHash(algorithmName, user.getPassword()
				, ByteSource.Util.bytes(user.getId()),hashIterations).toHex();
		user.setPassword(newPassword);
		user.setStatus(UserStatus.UNDER_AUDITING.getIndex());
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
		//上传认证图片
		String fileName = picture.getOriginalFilename();
		String suffix = fileName.substring(fileName.lastIndexOf("."));
		String path = "picture/" + CategoryEnum.REALNAME.getName() + "/" + user.getId() + suffix;
		user.setRealName(path);
		Thumbnails.of(picture.getInputStream()).scale(1f).outputQuality(0.25f)
			.toFile(request.getServletContext().getRealPath("") + "/" + path);
		if (userDAO.queryById(user.getId(), UserStatus.BE_REFUSED.getIndex())==null) {
			return userDAO.addUser(user);
		}else {
			return userDAO.updateById(user);
		}
	}

	public User login(String id, String password) {
		return userDAO.login(id, password);
	}

	public Result<Object> updateStatus(String id, int status,String auditingMsg, Admin admin,String context) {
		User user= userDAO.queryById(id,UserStatus.UNDER_AUDITING.getIndex());
		if (user==null) {
			return new Result<>(false,"没有找到对应的用户！");
		}
		if (user.getStatus()==null||user.getStatus()!=UserStatus.UNDER_AUDITING.getIndex()) {
			return new Result<Object>(false,"当前用户已经审核过了或者不能被审核！");
		}
		if (userDAO.updateStatusById(id, status, auditingMsg,admin.getId())!=1) {
			return new Result<Object>(false,"审核失败！");
		}
		
		//执行审核成功，给用户发送审核通过消息
		StringBuffer sb=new StringBuffer();
		if(status==UserStatus.REGULAR.getIndex()){
			sb.append("尊敬的用户 ").append(user.getName()).append(" 您好，您的注册信息已经通过管理员  ")
				.append(admin.getName()).append(" 的审核！您当前的信用评分为 ").append(user.getCredit())
				.append(" 请珍惜您的信用评分！");
			letterService.addLetter(admin, user, sb.toString());
		}else if (status==UserStatus.BE_REFUSED.getIndex()) {
			sb.append("尊敬的用户 ").append(user.getName()).append(" 您好，您的注册信息没有通过管理员  ")
			.append(admin.getName()).append(" 的审核！拒绝理由为： ").append(auditingMsg).append("  <a href='")
			.append(context).append("/v1/users/creation?id=").append(id).append("'>点击这里重新填写！</a>");
			letterService.addLetter(admin, user, sb.toString());
		}
		return new Result<Object>(true,"审核成功！");
	}

	public User queryName(String id){
		return userDAO.queryName(id);
	}
	
	public User queryById(String id,Integer status) {
		return userDAO.queryById(id,status);
	}

	public List<User> queryByStatus(int status) {
		return userDAO.queryByStatus(status);
	}

	public int updateWealth(String id, int wealth) {
		return userDAO.updateWealth(id, wealth);
	}
}
