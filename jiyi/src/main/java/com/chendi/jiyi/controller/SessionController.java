package com.chendi.jiyi.controller;


import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.chendi.jiyi.dto.UserStatus;
import com.chendi.jiyi.entity.Admin;
import com.chendi.jiyi.entity.User;
import com.chendi.jiyi.service.AdminService;
import com.chendi.jiyi.service.UserService;

@Controller
@RequestMapping("/v1/sessions")
public class SessionController {

	@Autowired
	private UserService userService;

	@Autowired
	private AdminService adminService;

	@RequestMapping(value = "/creation", method = RequestMethod.GET)
	public String login() {
		return "enter/login";
	}

	@RequestMapping(value = "/creation", method = RequestMethod.POST)
	public String doLogin(String id, String password, boolean admin_check, RedirectAttributes ra,HttpSession session) {
		if (admin_check) {
			Admin admin = adminService.login(id, password);
			if (admin != null) {
				if (session.getAttribute("user") != null) {
					session.removeAttribute("user");
				}
				session.setAttribute("admin", admin);
				return "redirect:/admin/index";
			}
		} else if (!admin_check) {
			User user = userService.login(id, password);
			//未审核的用户以游客身份登录
			if (user != null&&user.getStatus()==UserStatus.UNDER_AUDITING) {
				if (session.getAttribute("admin") != null) {
					session.removeAttribute("admin");
				}
				session.setAttribute("tourist", user);
				return "redirect:/v1/index";
			}else if (user != null&&user.getStatus()==UserStatus.REGULAR) {
				if (session.getAttribute("admin") != null) {
					session.removeAttribute("admin");
				}
				session.setAttribute("user", user);
				return "redirect:/v1/index";
			}
		}
		ra.addFlashAttribute("msg", "用户名或密码错误");
		return "redirect:creation";
	}
}
