package com.chendi.jiyi.service;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

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
	private LetterService letterService;

	@Transactional
	public Result<Object> addRewardSkill(RewardSkill skill, User user, MultipartFile[] pictureList,MultipartFile cover, HttpSession session) {
		Result<Object> result=new Result<Object>();
		if (user.getWealth() < skill.getRsCost()) {
			result.setFlag(false);
			result.setMsg("抱歉，您当前的喵币不足！");
			return result;
		}
		try {
			skill.setRsPublisher(user);
			// 设置创建时间
			skill.setRsCreateTime(CommonTools.getCurrentDate());
			skill.setRsStatus(RewardSkillStatus.UNDER_AUDITING.getIndex());
			
			//判断rsid是否为空 为空添加 不为空 更新
			int flag=0;
			if(skill.getRsId()!=null){
				flag=rewardDao.updateById(skill);
			}else {
				flag=rewardDao.addRewardSkill(skill);
			}
			//判断是否插入成功
			if(flag>0){
				userDao.updateWealth(user.getId(), -skill.getRsCost());
				//添加图片
				pService.addManyPicture(pictureList, skill.getRsId(), CategoryEnum.REWARDSKILL.getIndex(), session);
				//添加封面
				pService.addOnePicture(cover, skill.getRsId(), CategoryEnum.REWARDCOVER.getIndex(),0, session);
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

	public RewardSkill queryById(int id,int status) {
		return rewardDao.queryById(id,status);
	}
	
	public RewardSkill queryByIdNoAccepter(int id,int status) {
		return rewardDao.queryByIdNoAccepter(id,status);
	}
	
	public List<RewardSkill> queryByPublisher(String id,int exceptStatus) {
		return rewardDao.queryByPublisher(id,exceptStatus);
	}
	
//	public List<RewardSkill> queryByAccepter(String id,int exceptStatus) {
//		return rewardDao.queryByAccepter(id,exceptStatus);
//	}

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
	public Result<Object> auditing(int id, int status,String auditingMsg, Admin admin,String context) {
		RewardSkill skill= rewardDao.queryByIdNoAccepter(id,RewardSkillStatus.UNDER_AUDITING.getIndex());
		if (skill==null) {
			return new Result<>(false,"没有找到对应的悬赏贴！");
		}
		if (skill.getRsStatus()==null||skill.getRsStatus()!=RewardSkillStatus.UNDER_AUDITING.getIndex()) {
			return new Result<Object>(false,"当前技能贴已经审核过了或者不能被审核！");
		}
		if (rewardDao.auditing(id, status, admin.getId(), auditingMsg)!=1) {
			return new Result<Object>(false,"审核失败！");
		}
		
		//执行审核成功，给用户发送审核通过消息
		StringBuffer sb=new StringBuffer();
		if(status==RewardSkillStatus.REGULAR.getIndex()){
			sb.append("尊敬的用户 ").append(skill.getRsPublisher().getName()).append(" 您好，您发布的悬赏贴 <a href='").append(context)
				.append("/v1/skills/rewardSkills/").append(id).append("/details'>").append(skill.getRsTitle()).append(" </a>已经通过管理员 ")
				.append(admin.getName()).append(" 的审核！");
			letterService.addLetter(admin, skill.getRsPublisher(), sb.toString());
		}else if (status==RewardSkillStatus.BE_REFUSED.getIndex()) {
			sb.append("尊敬的用户 ").append(skill.getRsPublisher().getName()).append(" 您好，您发布的悬赏贴 ")
			.append(skill.getRsTitle()).append(" 没有通过管理员 ").append(admin.getName())
			.append(" 的审核！拒绝理由为：").append(auditingMsg).append("  <a href='").append(context)
			.append("/v1/skills/rewardSkills/creation?id=").append(id).append("'>点击这里重新填写！</a>");
			letterService.addLetter(admin, skill.getRsPublisher(), sb.toString());
		}
		return new Result<Object>(true,"审核成功！");
	}

	public int updateById(RewardSkill RewardSkill) {
		return rewardDao.updateById(RewardSkill);
	}

	@Transactional
	public Result<Object> accept(int id, String accepterId,String accepterName) {
		try {
			RewardSkill skill = rewardDao.queryById(id,RewardSkillStatus.REGULAR.getIndex());
			if (skill==null) {
				skill=rewardDao.queryByIdNoAccepter(id,RewardSkillStatus.REGULAR.getIndex());
			}
			List<User> list=skill.getRsAccepterList();
			int size=list.size();
			
			if (accepterId.equals(skill.getRsPublisher().getId())) {
				return new Result<Object>(false,"您不能接受自己发布的技能！");
			}
			
			if (skill.getRsStatus()!=RewardSkillStatus.REGULAR.getIndex()
					||size>=5) {
				return new Result<Object>(false,"此悬赏贴当前不可被接受！");
			}
			
			//不能重复接受
			if (list!=null&&size!=0) {
				for (User user : list) {
					if (accepterId.equals(user.getId())) {
						return new Result<Object>(false,"您已经接受成功！不能再次接受！");
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
				Admin admin=new Admin();
				admin.setId("dishen");
				StringBuffer sb=new StringBuffer();
				sb.append("您好，你发布的悬赏  ").append(skill.getRsTitle())
					.append( " 已被 ").append(accepterName).append(" 接受，请前往我的个人中心查看！");
				letterService.addLetter(admin, skill.getRsPublisher(), sb.toString());
				
				return new Result<Object>(true,"接受悬赏成功,请等待悬赏人选择!");
			}else {
				return new Result<Object>(false,"接受悬赏失败！");
			}
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException();
		}
	}
}
