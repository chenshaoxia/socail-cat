package com.chendi.jiyi.service;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.chendi.jiyi.Enum.CategoryEnum;
import com.chendi.jiyi.Enum.RewardSkillStatus;
import com.chendi.jiyi.dao.RewardSkillDAO;
import com.chendi.jiyi.dao.UserDAO;
import com.chendi.jiyi.dto.CommonTools;
import com.chendi.jiyi.dto.Result;
import com.chendi.jiyi.entity.Admin;
import com.chendi.jiyi.entity.Letter;
import com.chendi.jiyi.entity.ReleaseSkill;
import com.chendi.jiyi.entity.RewardAccepter;
import com.chendi.jiyi.entity.RewardSkill;
import com.chendi.jiyi.entity.User;

@Service
public class RewardSkillService {
	@Resource
	private RewardSkillDAO rewardDao;
	@Resource
	private PictureService pService;
	@Resource
	private UserDAO userDao;
	
	@Autowired
	private RewardAccepterService raService;
	
	@Autowired
	private LetterService lService;

	@Transactional
	public Result addRewardSkill(RewardSkill skill, User user, MultipartFile[] pictureList, HttpSession session) {
		Result result=new Result();
		if (user.getWealth() < skill.getRsCost()) {
			result.setFlag(false);
			result.setMsg("抱歉，您当前的喵币不足！");
			return result;
		}
		try {
			skill.setRsPublisher(user);
			// 设置创建时间
			skill.setRsCreateTime(CommonTools.getCurrentDate());
//			skill.setRsNeedTry(0);
			skill.setRsStatus(RewardSkillStatus.UNDER_AUDITING.getIndex());
			if (userDao.updateWealth(user.getId(), -skill.getRsCost()) > 0) {
				rewardDao.addRewardSkill(skill);
				pService.addManyPicture(pictureList, skill.getRsId(), CategoryEnum.REWARDSKILL.getIndex(), session);
				result.setFlag(true);
				result.setMsg("添加成功，请等待管理员审核！");
			}else {
				result.setFlag(false);
				result.setMsg("添加失败，请重试！");
			}
		} catch (Exception e) {
			e.printStackTrace();
			result.setFlag(false);
			result.setMsg("添加失败，请重试！");
			// transactional只处理运行时异常
			throw new RuntimeException();
		}
		return result;
	}

	public RewardSkill queryById(int id) {
		return rewardDao.queryById(id);
	}
	
	public RewardSkill queryByIdNoAccepter(int id) {
		return rewardDao.queryByIdNoAccepter(id);
	}

	public List<RewardSkill> queryByStatus(int status) {
		return rewardDao.queryByStatus(status);
	}
	
	public List<RewardSkill> queryByStatusToUser(int status,String orderBy,String order) {
		return rewardDao.queryByStatusToUser(status,orderBy,order);
	}
	
	public List<RewardSkill> queryByCategory(int category){
		return rewardDao.queryByCategory(category);
	}

	@Transactional
	public int auditing(int id, int status, int cost, int tryCost, String auditor,String auditingMsg) {

		return rewardDao.auditing(id, status, cost, tryCost, auditor,auditingMsg);
	}

	public int updateById(RewardSkill RewardSkill) {
		return rewardDao.updateById(RewardSkill);
	}

	@Transactional
	public Result accept(int id, String accepterId,String accepterName) {
		try {
			RewardSkill skill = rewardDao.queryById(id);
			if (skill==null) {
				skill=rewardDao.queryByIdNoAccepter(id);
			}
			List<User> list=skill.getRsAccepterList();
			int size=list.size();
			
			if (accepterId.equals(skill.getRsPublisher().getId())) {
				return new Result(false,"您不能接受自己发布的技能！");
			}
			
			if (skill.getRsStatus()!=RewardSkillStatus.REGULAR.getIndex()
					||size>=5) {
				return new Result(false,"此悬赏贴当前不可被接受！");
			}
			
			//不能重复接受
			if (list!=null&&size!=0) {
				for (User user : list) {
					if (accepterId.equals(user.getId())) {
						return new Result(false,"您已经接受成功！不能再次接受！");
					}
				}
			}
			RewardAccepter accepter=new RewardAccepter();
			accepter.setRsId(id);
			accepter.setAccepterId(accepterId);
			accepter.setRaCreateTime(CommonTools.getCurrentDate());
			//如果添加成功
			if (raService.addAccepter(accepter)==1) {
//				rewardDao.updateAccepterNum(id);
				if (size+1>=5) {
					rewardDao.updateStatus(id, RewardSkillStatus.ACCEPTER_FULL.getIndex());
				}
				
				//给悬赏人发送悬赏被接受消息
				Letter letter=new Letter();
				Admin admin=new Admin();
				admin.setId("dishen");
				letter.setlSender(admin);
				letter.setlReceiver(skill.getRsPublisher());
				StringBuffer sb=new StringBuffer();
				sb.append("您好，你发布的悬赏  ").append(skill.getRsTitle())
					.append( " 已被 ").append(accepterName).append(" 接受，请前往我的个人中心查看！");
				letter.setlContent(sb.toString());
				letter.setlHasRead(0);
				letter.setlSendTime(CommonTools.getCurrentDate());
				lService.addMessage(letter);
				
				return new Result(true,"接受悬赏成功,请等待悬赏人选择!");
			}else {
				return new Result(false,"接受悬赏失败！");
			}
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException();
		}
	}
}
