package com.chendi.jiyi.controller;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.chendi.jiyi.Enum.CategoryEnum;
import com.chendi.jiyi.Enum.ReleaseSkillStatus;
import com.chendi.jiyi.Enum.RewardSkillStatus;
import com.chendi.jiyi.Enum.UserStatus;
import com.chendi.jiyi.dto.CommonTools;
import com.chendi.jiyi.dto.Result;
import com.chendi.jiyi.entity.Admin;
import com.chendi.jiyi.entity.Notice;
import com.chendi.jiyi.entity.ReleaseSkill;
import com.chendi.jiyi.entity.RewardSkill;
import com.chendi.jiyi.entity.User;
import com.chendi.jiyi.service.LetterService;
import com.chendi.jiyi.service.NoticeService;
import com.chendi.jiyi.service.PictureService;
import com.chendi.jiyi.service.ReleaseSkillService;
import com.chendi.jiyi.service.RewardSkillService;
import com.chendi.jiyi.service.UserService;

@Controller
@RequestMapping(value = "/v1/admin")
public class AdminController {

	@Autowired
	private ReleaseSkillService releaseService;
	@Autowired
	private RewardSkillService rewardService;
	@Autowired
	private LetterService letterService;
	@Autowired
	private UserService userService;
	@Autowired
	private NoticeService noticeService;
	@Autowired
	private PictureService pictureService;

	//技能贴审核页面
	@RequestMapping(value = "/releasePermission", method = RequestMethod.GET)
	public String releasePermit(Model model) {
		model.addAttribute("releasePermitList", releaseService.queryByStatus(ReleaseSkillStatus.UNDER_AUDITING.getIndex()));
		return "admin/release_permission";
	}
	
	//技能贴审核详情页面
	@RequestMapping(value = "/releasePermission/{id}/details", method = RequestMethod.GET)
	public String releasePermitDetails(@PathVariable("id")Integer id, Model model) {
		model.addAttribute("skill", releaseService.queryById(id,ReleaseSkillStatus.UNDER_AUDITING.getIndex()));
		return "admin/release_permission_details";
	}

	//技能贴审核通过
	@RequestMapping(value = "/releasePermission/{id}/approval", method = RequestMethod.POST)
	@ResponseBody
	public Result<Object> releaseApproval(@PathVariable("id")Integer id,HttpServletRequest request,HttpSession session) {
		Admin admin = (Admin) session.getAttribute("admin");
		Result<Object> result=releaseService.auditing(id, ReleaseSkillStatus.REGULAR.getIndex(),"审核通过！",admin,request.getContextPath());
		if (result.isFlag()) {
			result.setMsg("你已同意本次审核！");
			result.setObj("../../releasePermission");
		}
		return result;
	}
	
	//技能贴审核不通过
	@RequestMapping(value = "/releasePermission/{id}/refusal", method = RequestMethod.POST)
	@ResponseBody
	public Result<?> releaseRefusal(@PathVariable("id")Integer id,HttpServletRequest request
			,@RequestParam("auditingMsg")String auditingMsg,HttpSession session) {
		Admin admin = (Admin) session.getAttribute("admin");
		Result<Object> result=releaseService.auditing(id, ReleaseSkillStatus.BE_REFUSED.getIndex(),auditingMsg,admin,request.getContextPath());
		if (result.isFlag()) {
			result.setMsg("你已拒绝本次审核！");
			result.setObj("../../releasePermission");
		}
		return result;
	}
	
	//悬赏审核列表页
	@RequestMapping(value = "/rewardPermission", method = RequestMethod.GET)
	public String rewardPermit(Model model) {
		model.addAttribute("rewardPermitList", rewardService.queryByStatus(RewardSkillStatus.UNDER_AUDITING.getIndex()));
		return "admin/reward_permission";
	}
	
	//悬赏审核详情页
	@RequestMapping(value = "/rewardPermission/{id}/details", method = RequestMethod.GET)
	public String rewardPermitDetails(@PathVariable("id")Integer id, Model model) {
		model.addAttribute("skill", rewardService.queryByIdNoAccepter(id,RewardSkillStatus.UNDER_AUDITING.getIndex()));
		model.addAttribute("pictureList", pictureService.queryByFk(id, CategoryEnum.REWARDSKILL.getIndex()));
		return "admin/reward_permission_details";
	}
	
	//悬赏审核通过实现
	@RequestMapping(value = "/rewardPermission/{id}/approval", method = RequestMethod.POST)
	@ResponseBody
	public Result<Object> rewardApproval(@PathVariable("id")Integer id,HttpServletRequest request,HttpSession session) {
		Admin admin = (Admin) session.getAttribute("admin");
		Result<Object> result=rewardService.auditing(id, RewardSkillStatus.REGULAR.getIndex(),"审核通过！",admin,request.getContextPath());
		if (result.isFlag()) {
			result.setMsg("你已同意本次审核！");
			result.setObj("../../rewardPermission");
		}
		return result;
	}
	
	//悬赏审核拒绝实现
	@RequestMapping(value = "/rewardPermission/{id}/refusal", method = RequestMethod.POST)
	@ResponseBody
	public Result<Object> rewardRefusal(@PathVariable("id")Integer id,HttpServletRequest request
			,@RequestParam("auditingMsg")String auditingMsg,HttpSession session) {
		Admin admin = (Admin) session.getAttribute("admin");
		Result<Object> result=rewardService.auditing(id, RewardSkillStatus.BE_REFUSED.getIndex(),auditingMsg,admin,request.getContextPath());
		if (result.isFlag()) {
			result.setMsg("你已拒绝本次审核！");
			result.setObj("../../rewardPermission");
		}
		return result;
	}

	//用户审核列表页
	@RequestMapping(value = "/userPermission", method = RequestMethod.GET)
	public String userPermit(Model model) {
		model.addAttribute("userList", userService.queryByStatus(UserStatus.UNDER_AUDITING.getIndex()));
		return "admin/user_permission";
	}

	//用户审核详情页
	@RequestMapping(value = "/userPermission/{id}/details", method = RequestMethod.GET)
	public String userPermitDetails(@PathVariable("id")String id, Model model) {
		model.addAttribute("user", userService.queryById(id,UserStatus.UNDER_AUDITING.getIndex()));
		return "admin/user_permission_details";
	}
	
	//用户审核通过实现
	@RequestMapping(value = "/userPermission/{id}/approval", method = RequestMethod.PUT)
	@ResponseBody
	public Result<Object> userApproval(@PathVariable("id")String id,HttpSession session,HttpServletRequest request) {
		Admin admin = (Admin) session.getAttribute("admin");
		Result<Object> result=userService.updateStatus(id, UserStatus.REGULAR.getIndex(),"审核通过!",admin,request.getContextPath());
		if (result.isFlag()) {
			result.setMsg("你已同意本次审核！");
			result.setObj("../../userPermission");
		}
		return result;
	}
	
	//用户审核拒绝实现
	@RequestMapping(value = "/userPermission/{id}/refusal", method = RequestMethod.POST)
	@ResponseBody
	public Result<Object> userRefusal(@PathVariable("id")String id,@RequestParam("auditingMsg")String auditingMsg,
			HttpServletRequest request,HttpSession session) {
		Admin admin = (Admin) session.getAttribute("admin");
		Result<Object> result=userService.updateStatus(id, UserStatus.BE_REFUSED.getIndex(),auditingMsg,admin,request.getContextPath());
		if (result.isFlag()) {
			result.setMsg("你已拒绝本次审核！");
			result.setObj("../../userPermission");
		}
		return result;
	}

	//技能贴管理页面
	@RequestMapping(value = "releaseManage", method = RequestMethod.GET)
	public String releaseManage(Model model) {
		model.addAttribute("releaseList", releaseService.queryAll());
		return "admin/release_manage";
	}
	
	/*@RequestMapping(value = "user_auditing", method = RequestMethod.POST, produces = "text/html;charset=utf-8")
	@ResponseBody
	public String userAuditing(String id, final RedirectAttributes ra, HttpSession session) {
		Admin admin = (Admin) session.getAttribute("admin");
		if (admin != null) {
			try {
				userService.updateStatus(id, UserStatus.REGULAR.getIndex(), admin.getName());
				// ra.addFlashAttribute("msg", "已经同意许可，请返回");
				return "<th scope='row'>操作结果</th><td>处理成功，<a href='user_permit'>请返回</a>！</td>";
			} catch (Exception e) {
				// TODO: handle exception
				return "<th scope='row'>操作结果</th><td>处理失败，请重试！</td>";
			}
		} else {
			return "<th scope='row'>操作结果</th><td>处理失败，请登录管理员账号进行操作！</td>";
		}
	}*/

	@RequestMapping(value = "/add_notice", method = RequestMethod.GET)
	public String addNotice() {
		return "dist/admin/dist_notice_add";
	}

	@RequestMapping(value = "/do_add_notice", method = RequestMethod.POST)
	public String doAddNotice(Notice notice, MultipartFile[] pictureList, final RedirectAttributes ra,
			HttpSession session) {
		Admin admin = (Admin) session.getAttribute("admin");
		if (admin == null) {
			ra.addFlashAttribute("msg", "请先登录管理员账号！");
			return "redirect:add_notice";
		}
		notice.setnCreateTime(CommonTools.getCurrentDate());
		notice.setnPublisher(admin.getId());
		String msg = noticeService.addNotice(notice, pictureList, session);
		ra.addFlashAttribute("msg", msg);
		return "redirect:add_notice";
	}
}
