package com.chendi.jiyi.service;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.chendi.jiyi.Enum.CategoryEnum;
import com.chendi.jiyi.Enum.MessageCategoryEnum;
import com.chendi.jiyi.Enum.ReleaseSkillStatus;
import com.chendi.jiyi.dao.LetterDAO;
import com.chendi.jiyi.dao.ReleaseSkillDAO;
import com.chendi.jiyi.dao.UserDAO;
import com.chendi.jiyi.dto.CommonTools;
import com.chendi.jiyi.dto.Result;
import com.chendi.jiyi.entity.Admin;
import com.chendi.jiyi.entity.Letter;
import com.chendi.jiyi.entity.Picture;
import com.chendi.jiyi.entity.ReleaseSkill;
import com.chendi.jiyi.entity.User;

import net.coobird.thumbnailator.Thumbnails;

@Service
public class ReleaseSkillService {

	@Resource
	private ReleaseSkillDAO rsDao;

	@Autowired
	private PictureService pService;
	
//	@Autowired
//	private MessageService messageService;
	@Autowired
	private LetterDAO letterDAO;

	@Resource
	private UserDAO userDao;

	@Transactional
	public Result addReleaseSkill(ReleaseSkill skill, String id, MultipartFile[] pictureList
			,MultipartFile cover, HttpSession session)throws Exception{
		Result result=null;
		try {
			User user = new User();
			user.setId(id);
			skill.setRsPublisher(user);
			// 设置创建时间
			skill.setRsCreateTime(CommonTools.getCurrentDate());
			skill.setRsPraise(0);
			if (skill.getRsCanTry()==null) {
				skill.setRsCanTry(0);
			}
			skill.setRsStatus(ReleaseSkillStatus.UNDER_AUDITING.getIndex());
			
			//判断是否插入成功
			if(rsDao.addReleaseSkill(skill)>0){
				int fkId = skill.getRsId();
				//添加证明图片
				pService.addManyPicture(pictureList, fkId, CategoryEnum.RELEASESKILL.getIndex(), session);
				//添加封面
				pService.addOnePicture(cover, fkId, CategoryEnum.RELEASECOVER.getIndex(),0, session);
				result= new Result(true,"添加成功");
			}else{
				result= new Result(false,"添加失败，请重试！");
			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			// transactional只处理运行时异常,抛出异常后不执行下面的代码，如果使用finally 不会抛出异常
			throw new RuntimeException();
		}
		return result;
	}


	public List<ReleaseSkill> queryAll() {
		return rsDao.queryAll();
	}

	/*
	 * public List<ReleaseSkill> queryNoPermit(int status) { return
	 * rsDao.queryNoPermit(status); }
	 */

	public List<ReleaseSkill> queryByStatus(int status) {
		return rsDao.queryByStatus(status);
	}

	public List<ReleaseSkill> queryByStatusToUser(int status,String orderBy,String order) {
		return rsDao.queryByStatusToUser(status,orderBy,order);
	}
	
	public List<ReleaseSkill> queryByCategory(int category) {
		return rsDao.queryByCategory(category);
	}

	public ReleaseSkill queryById(int id) {
		return rsDao.queryById(id);
	}
	
	public List<ReleaseSkill> queryByPublisher(String id) {
		return rsDao.queryByPublisher(id);
	}
	
	public List<ReleaseSkill> queryByBuyer(String id) {
		return rsDao.queryByBuyer(id);
	}

	public int auditing(int id,int status,int cost,int tryCost,String auditor){
		return rsDao.auditing(id, status, cost, tryCost, auditor);
	}
	
	/*if (status == ReleaseSkillStatus.BE_SOLD.getIndex()) {
		cost = skill.getRsCost();
		result="购买";
	} else if (status == ReleaseSkillStatus.BE_TRIED.getIndex()&&skill.getRsCanTry()==1) {
		cost = skill.getRsTryCost();
		result="试用";
	} else {
//		result="请求参数错误！";
		return "请求参数错误！";
	}*/
	
	@Transactional
	public String buyOrTry(int id, int status, String buyer) throws Exception {
		String result = null;
		int cost = 0;
//		ReleaseSkill skill = rsDao.queryById(id);
		ReleaseSkill skill = rsDao.queryCost(id);
		cost = skill.getRsCost();
		User publisher = skill.getRsPublisher();
		if (buyer.equals(publisher.getId())) {
			return "您不能购买自己发布的技能";
		}
		if (userDao.queryWealthById(buyer) < cost) {
			return "金币不足！";
		}
		try {
			if (rsDao.buyOrTry(id, status, buyer) == 1) {
				//更新双方喵币
				userDao.updateWealth(publisher.getId(), cost);
				userDao.updateWealth(buyer, -cost);
				
				//给发布人发送技能被购买消息
				Letter letter=new Letter();
				Admin admin=new Admin();
				admin.setId("dishen");
				letter.setlSender(admin);
				letter.setlReceiver(publisher);
				letter.setlSendTime(CommonTools.getCurrentDate());
				letter.setlContent("您好，你发布的技能  "+skill.getRsTitle()+" 已被购买，请前往我的个人中心查看！");
				letter.setlHasRead(0);
				letterDAO.addLetter(letter);
				return "购买成功!";
			} else {
				return "购买失败，失败原因：我也不晓得！";
			}
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e.getMessage());
//			return "购买失败，失败原因：" + e.getMessage();
		}
//		return result;
	}
}
