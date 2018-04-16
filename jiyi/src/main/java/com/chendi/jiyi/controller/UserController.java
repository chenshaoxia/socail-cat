package com.chendi.jiyi.controller;

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
import com.chendi.jiyi.dto.Result;
import com.chendi.jiyi.entity.User;
import com.chendi.jiyi.service.ReleaseSkillService;
import com.chendi.jiyi.service.UserService;

@Controller
@RequestMapping("/v1/users")
public class UserController {

	@Autowired
	private UserService userService;
	
	@Autowired
	private ReleaseSkillService releaseService;

	@RequestMapping(value = "/creation", method = RequestMethod.GET)
	public String register(Model model, HttpSession session) {
		model.addAttribute("instituteList", InstituteEnum.values());
		return "user/register";
	}

	@RequestMapping(value = "/creation", method = RequestMethod.POST)
	public String creation(User user, HttpServletRequest request, @RequestParam("picture1") MultipartFile picture,
			final RedirectAttributes ra) {
		System.out.println(user.toString());
		try {
			if (picture.isEmpty()) {
				ra.addFlashAttribute("result", new Result(false, "注册失败！请上传认证图片"));
				return "redirect:/v1/users/register";
			}
			if (userService.addUser(user, picture, request)!=0) {
				ra.addFlashAttribute("result", new Result(false, "注册失败！请重新检查"));
				return "redirect:/v1/users/register";
			}
			ra.addFlashAttribute("result", new Result(true, "注册成功！请等待管理员审核"));
//			request.getSession().setAttribute("user", user);
			return "redirect:/v1/users/register";

		} catch (Exception e) {
			e.printStackTrace();
			ra.addFlashAttribute("result", new Result(false, "注册失败！失败原因：" + e.getCause().getMessage()));
			return "redirect:/v1/users/register";
		}
	}

	@RequestMapping(value = "/myPage", method = RequestMethod.GET)
	public String myPage(Model model, HttpSession session) {
		User user=(User) session.getAttribute("user");
		if (user==null) {
			return "您好，请先登录！[TODO]";
		}
		// model.addAttribute("user",
		// arg1)userService.queryById(this.getId(session));
		model.addAttribute("releaseList", releaseService.queryByPublisher(user.getId()));
		return "user/my_page";
	}

	@RequestMapping(value = "/user_message", method = RequestMethod.GET)
	public String message() {
		return "dist/user/dist_user_message";
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
