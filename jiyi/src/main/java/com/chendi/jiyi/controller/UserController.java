package com.chendi.jiyi.controller;

import java.util.LinkedHashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.chendi.jiyi.Enum.InstituteEnum;
import com.chendi.jiyi.Enum.ReleaseSkillStatus;
import com.chendi.jiyi.Enum.RewardSkillStatus;
import com.chendi.jiyi.Enum.UserStatus;
import com.chendi.jiyi.dto.Result;
import com.chendi.jiyi.entity.ReleaseSkill;
import com.chendi.jiyi.entity.RewardSkill;
import com.chendi.jiyi.entity.User;
import com.chendi.jiyi.service.ReleaseSkillService;
import com.chendi.jiyi.service.RewardSkillService;
import com.chendi.jiyi.service.UserService;

@Controller
@RequestMapping("/v1/users")
public class UserController {

	@Autowired
	private UserService userService;
	
	@Autowired
	private ReleaseSkillService releaseService;
	
	@Autowired
	private RewardSkillService rewardService;

	@RequestMapping(value = "/creation", method = RequestMethod.GET)
	public String register(String id,Model model, HttpSession session) {
		model.addAttribute("instituteList", InstituteEnum.values());
		if (id!=null) {
			User user=userService.queryById(id,UserStatus.BE_REFUSED.getIndex());
			if (user!=null) {
				model.addAttribute("user", user);
			}
		}
		return "user/register";
	}

	@RequestMapping(value = "/creation", method = RequestMethod.POST)
	public String creation(User user, HttpServletRequest request, @RequestParam("picture1") MultipartFile picture,
			final RedirectAttributes ra) {
		try {
			if (picture.isEmpty()) {
				ra.addFlashAttribute("result", new Result<Object>(false, "注册失败！请上传认证图片"));
				return "redirect:/v1/users/creation";
			}
			if (userService.addUser(user, picture, request)==0) {
				ra.addFlashAttribute("result", new Result<Object>(false, "注册失败！请重新检查"));
				return "redirect:/v1/users/creation";
			}
			ra.addFlashAttribute("result", new Result<Object>(true, "注册成功！请等待管理员审核"));
//			request.getSession().setAttribute("user", user);
			return "redirect:/v1/sessions/creation";

		} catch (Exception e) {
			e.printStackTrace();
			ra.addFlashAttribute("result", new Result<Object>(false, "注册失败！失败原因：" + e.getCause().getMessage()));
			return "redirect:/v1/users/creation";
		}
	}

	//我的个人页面主页  进去是我的技能贴页面
	@RequestMapping(value = "/myPages", method = RequestMethod.GET)
	public String myPage(Model model, HttpSession session) {
		//刷新session中的user
		User user=(User) session.getAttribute("user");
		user=userService.queryById(user.getId(),null);
		session.setAttribute("user", user);
		List<ReleaseSkill> list= releaseService.queryByPublisher(user.getId(),ReleaseSkillStatus.BE_DELETED.getIndex());
		//返回各个状态的技能条数
		LinkedHashMap<String, Integer> map=new LinkedHashMap<String, Integer>();
		for(ReleaseSkillStatus status: ReleaseSkillStatus.values()){
			if (status!=ReleaseSkillStatus.BE_DELETED) {
				map.put(status.getName(), 0);
			}
		}
		for (ReleaseSkill skill : list) {
			String key=ReleaseSkillStatus.getName(skill.getRsStatus());
			if (map.containsKey(key)) {
				map.put(key, map.get(key)+1);
			}
		}
		model.addAttribute("releaseList",list);
		model.addAttribute("statusMap",map);
		return "user/my_release";
	}
	
	//我的悬赏贴贴页面
	@RequestMapping(value = "/myRewardSkills", method = RequestMethod.GET)
	public String myReward(Model model, HttpSession session) {
		User user=(User) session.getAttribute("user");
		List<RewardSkill> list= rewardService.queryByPublisher(user.getId(),RewardSkillStatus.BE_DELETED.getIndex());
		//返回各个状态的技能条数
		LinkedHashMap<String, Integer> map=new LinkedHashMap<String, Integer>();
		for(RewardSkillStatus status: RewardSkillStatus.values()){
			if (status!=RewardSkillStatus.BE_DELETED) {
				map.put(status.getName(), 0);
			}
		}
		for (RewardSkill skill : list) {
			String key=RewardSkillStatus.getName(skill.getRsStatus());
			if (map.containsKey(key)) {
				map.put(key, map.get(key)+1);
			}
		}
		model.addAttribute("rewardList",list);
		model.addAttribute("statusMap",map);
		return "user/my_reward";
	}

	@RequestMapping(value = "/myInfo", method = RequestMethod.GET)
	public String myInfo() {
		return "user/my_info";
	}

	@RequestMapping(value = "/user_release", method = RequestMethod.GET)
	public String upload() {
		return "dist/user/dist_user_release";
	}

	@RequestMapping(value = "/user_reward", method = RequestMethod.GET)
	public String reward() {
		return "dist/user/dist_user_reward";
	}

	@RequestMapping(value = "/choose", method = RequestMethod.GET)
	public String choose(String page) {
		if (page != null && !"".equals(page)) {
			switch (page) {
			case "user_info":
				return "module/user/user_info";
			case "user_my_skill":
				return "module/user/user_my_skill";
			case "user_in_study":
				return "module/user/user_in_study";
			case "user_release":
				return "module/user/user_release";
			case "user_reward":
				return "module/user/user_reward";
			case "user_message":
				return "module/user/user_message";
			case "user_feedback":
				return "module/user/user_feedback";
			case "user_edit":
				return "module/user/user_edit";
			case "user_appeal":
				return "module/user/user_appeal";
			default:
				return "module/user/user_info";
			}
		} else {
			// 返回错误页面
			return "";
		}
	}
}
