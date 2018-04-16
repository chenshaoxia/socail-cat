package com.chendi.jiyi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.chendi.jiyi.Enum.CategoryEnum;
import com.chendi.jiyi.dao.CommentDAO;
import com.chendi.jiyi.dao.PraiseDAO;
import com.chendi.jiyi.dto.Category;
import com.chendi.jiyi.dto.Result;
import com.chendi.jiyi.entity.Praise;
import com.chendi.jiyi.entity.User;

@Service
public class PraiseService {
	
	@Autowired
	private PraiseDAO praiseDAO;
	@Autowired
	private CommentDAO commentDAO;
	
	public int hasSupport(String uId,CategoryEnum fkType,int fkId) {
		Praise praise = new Praise();
		User user = new User();
		user.setId(uId);
		praise.setpUser(user);
		praise.setFkType(fkType.getIndex());
		praise.setFkId(fkId);
		return praiseDAO.checkBeforeAdd(praise);
	}
	
	@Transactional
	public Result addPraise(String uId,CategoryEnum fkType,int fkId){
		try {
			Praise praise = new Praise();
			User user = new User();
			user.setId(uId);
			praise.setpUser(user);
			praise.setFkType(fkType.getIndex());
			praise.setFkId(fkId);
			if (praiseDAO.checkBeforeAdd(praise) != 0) {
				return new Result(false,"打CALL成功，不能重复打CALL");
			}
			switch (fkType) {
			case COMMENT:
				praiseDAO.addPraise(praise);
				commentDAO.praiseByCommentId(fkId);
				return new Result(true,"点赞成功");
			case RELEASESKILL:
				praiseDAO.addPraise(praise);
				return new Result(true,"为TA打call成功");
			case REWARDSKILL:
				praiseDAO.addPraise(praise);
				return new Result(true,"为TA打call成功");
			default:
				return new Result(false,"参数错误");
			}
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException();
		}
	}
	
	public List<Praise> queryByFk(int fkId,int fkType) {
		return praiseDAO.queryByFk(fkId, fkType);
		
	}
}
