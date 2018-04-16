package com.chendi.jiyi.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.chendi.jiyi.Enum.CategoryEnum;
import com.chendi.jiyi.Enum.ReleaseSkillStatus;
import com.chendi.jiyi.Enum.RewardSkillStatus;
import com.chendi.jiyi.dao.NoticeDAO;
import com.chendi.jiyi.dto.CommonTools;
import com.chendi.jiyi.dto.UserStatus;
import com.chendi.jiyi.entity.Admin;
import com.chendi.jiyi.entity.Notice;
import com.chendi.jiyi.entity.Picture;
import com.chendi.jiyi.entity.ReleaseSkill;
import com.chendi.jiyi.entity.User;
import com.chendi.jiyi.service.NoticeService;
import com.chendi.jiyi.service.PictureService;
import com.chendi.jiyi.service.ReleaseSkillService;
import com.chendi.jiyi.service.RewardSkillService;
import com.chendi.jiyi.service.UserService;

@Controller
@RequestMapping(value = "/admin")
public class AdminController {

	@Autowired
	private ReleaseSkillService releaseService;
	@Autowired
	private RewardSkillService rewardService;
	@Autowired
	private UserService userService;
	@Autowired
	private NoticeService noticeService;
	@Autowired
	private PictureService pictureService;

	/*@RequestMapping(value = "/release_permit", method = RequestMethod.GET)
	public String releasePermit(Model model) {
		
		 * List<ReleaseSkill>
		 * list=releaseService.queryByStatus(SkillStatus.UNDER_AUDITING);
		 
		model.addAttribute("releasePermitList", releaseService.queryByStatus(ReleaseSkillStatus.UNDER_AUDITING));
		return "dist/admin/dist_release_permit";
	}
*/
	@RequestMapping(value = "/reward_permit", method = RequestMethod.GET)
	public String rewardPermit(Model model) {
		model.addAttribute("rewardPermitList", rewardService.queryByStatus(RewardSkillStatus.UNDER_AUDITING));
		return "dist/admin/dist_reward_permit";
	}

	@RequestMapping(value = "/user_permit", method = RequestMethod.GET)
	public String userPermit(Model model) {
		model.addAttribute("userList", userService.queryByStatus(UserStatus.UNDER_AUDITING));
		return "dist/admin/dist_user_permit";
	}

	@RequestMapping(value = "release_permit_details", method = RequestMethod.GET)
	public String releasePermitDetails(Integer id, Model model) {
		/*
		 * ReleaseSkill skill=releaseService.queryById(id); List<Picture>
		 * list=skill.getRsPictureList();
		 */
		model.addAttribute("skill", releaseService.queryById(id));
		return "module/admin/release_permit_details";
	}

	@RequestMapping(value = "reward_permit_details", method = RequestMethod.GET)
	public String rewardPermitDetails(Integer id, Model model) {
		model.addAttribute("skill", rewardService.queryById(id));
		model.addAttribute("pictureList", pictureService.queryByFk(id, CategoryEnum.REWARDSKILL.getIndex()));
		return "module/admin/reward_permit_details";
	}

	/*@RequestMapping(value = "set_release_price", method = RequestMethod.POST)
	public String setReleasePrice(Integer rsId, Integer rsCost, Integer rsTryCost, HttpSession session,
			final RedirectAttributes ra) {
		Admin admin = (Admin) session.getAttribute("admin");
		if (admin == null) {
			ra.addFlashAttribute("msg", "请先登录管理员账号！");
			// return "redirect:../enter/login";
			return "redirect:release_permit";
		}
		releaseService.auditing(rsId, ReleaseSkillStatus.REGULAR, rsCost, rsTryCost, admin.getId());
		ra.addFlashAttribute("msg", "审核成功！");
		return "redirect:release_permit";
	}*/
	
	@RequestMapping(value = "set_reward_price", method = RequestMethod.POST)
	public String setRewardPrice(Integer rsId, Integer rsCost, Integer rsTryCost, String auditingMsg,HttpSession session,
			final RedirectAttributes ra) {
		Admin admin = (Admin) session.getAttribute("admin");
		if (admin == null) {
			ra.addFlashAttribute("msg", "请先登录管理员账号！");
			// return "redirect:../enter/login";
			return "redirect:release_permit";
		}
		if (rsCost==null) {
			rsCost=0;
		}
		if (rsTryCost==null) {
			rsTryCost=0;
		}
		rewardService.auditing(rsId, RewardSkillStatus.REGULAR, rsCost, rsTryCost, admin.getId(),auditingMsg);
		ra.addFlashAttribute("msg", "审核成功！");
		return "redirect:reward_permit";
	}

	@RequestMapping(value = "user_permit_details", method = RequestMethod.GET)
	public String userPermitDetails(String id, Model model) {
		model.addAttribute("user", userService.queryById(id));
		return "module/admin/user_permit_details";
	}

	@RequestMapping(value = "user_auditing", method = RequestMethod.POST, produces = "text/html;charset=utf-8")
	@ResponseBody
	public String userAuditing(String id, final RedirectAttributes ra, HttpSession session) {
		Admin admin = (Admin) session.getAttribute("admin");
		if (admin != null) {
			try {
				userService.updateStatus(id, UserStatus.REGULAR, admin.getName());
				// ra.addFlashAttribute("msg", "已经同意许可，请返回");
				return "<th scope='row'>操作结果</th><td>处理成功，<a href='user_permit'>请返回</a>！</td>";
			} catch (Exception e) {
				// TODO: handle exception
				return "<th scope='row'>操作结果</th><td>处理失败，请重试！</td>";
			}
		} else {
			return "<th scope='row'>操作结果</th><td>处理失败，请登录管理员账号进行操作！</td>";
		}
	}

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
