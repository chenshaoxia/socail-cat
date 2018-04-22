package com.chendi.jiyi.controller;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.apache.shiro.web.util.SavedRequest;
import org.apache.shiro.web.util.WebUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.chendi.jiyi.Enum.LoginType;
import com.chendi.jiyi.entity.Admin;
import com.chendi.jiyi.entity.User;
import com.chendi.jiyi.service.AdminService;
import com.chendi.jiyi.service.UserService;
import com.chendi.jiyi.shiro.CustomizedToken;

@Controller
@RequestMapping("/v1/sessions")
public class SessionController {

	@Autowired
	private UserService userService;

	@Autowired
	private AdminService adminService;
	
	@RequestMapping(value = "/noPermission", method = RequestMethod.GET)
	public String noPermission() {
		return "enter/no_permission";
	}

	@RequestMapping(value = "/creation", method = RequestMethod.GET)
	public String login() {
		return "enter/login";
	}
	
	@RequestMapping(value = "/admin/creation", method = RequestMethod.GET)
	public String adminLogin() {
		return "enter/admin_login";
	}
	
	@RequestMapping(value = "/admin/creation", method = RequestMethod.POST)
	public ModelAndView doAdminLogin(String id, String password, HttpServletRequest request, HttpSession session) {
		ModelAndView mv=new ModelAndView();
		CustomizedToken token=new CustomizedToken(id,password,LoginType.ADMIN.getType());
		Subject subject=SecurityUtils.getSubject();
		try {
			subject.login(token);
		} catch (IncorrectCredentialsException ice) {
			mv.addObject("loginMsg", "密码错误！");
			mv.setViewName("enter/admin_login");
			return mv;
		}catch (UnknownAccountException uae) {
			mv.addObject("loginMsg", "当前用户名尚未注册！");
			mv.setViewName("enter/admin_login");
			return mv;
		}
		Admin admin = adminService.queryById(id);
		subject.getSession().setAttribute("admin", admin);
		//登录成功调回登录前页面
		SavedRequest savedRequest=WebUtils.getSavedRequest(request);
		if (savedRequest!=null) {
			/*savedRequest.getRequestUrl()=/jiyi/v1/admin/rewardPermission/19/details
			*这里要去掉前面的/jiyi
			*/
			int begin=savedRequest.getRequestUrl().indexOf("/", 1);
			mv.setViewName("redirect:"+savedRequest.getRequestUrl().substring(begin));
		}else{
			mv.setViewName("redirect:/v1/admin/releasePermission");
		}
		return mv;
	}

	@RequestMapping(value = "/creation", method = RequestMethod.POST)
	public ModelAndView doLogin(String id, String password, boolean admin_check, HttpServletRequest request,HttpSession session) {
		
		ModelAndView mv=new ModelAndView();
		CustomizedToken token=new CustomizedToken(id,password,LoginType.USER.getType());
		Subject subject=SecurityUtils.getSubject();
		try {
			subject.login(token);
		} catch (IncorrectCredentialsException ice) {
			mv.addObject("loginMsg", "密码错误！");
			mv.setViewName("enter/login");
			return mv;
		}catch (UnknownAccountException uae) {
			mv.addObject("loginMsg", "当前用户名尚未注册！");
			mv.setViewName("enter/login");
			return mv;
		}
		User user = userService.queryById(id,null);
		subject.getSession().setAttribute("user", user);
		//登录成功调回登录前页面
		SavedRequest savedRequest=WebUtils.getSavedRequest(request);
		if (savedRequest!=null) {
			/*savedRequest.getRequestUrl()=/jiyi/v1/admin/rewardPermission/19/details
			*这里要去掉前面的/jiyi
			*/
			int begin=savedRequest.getRequestUrl().indexOf("/", 1);
			mv.setViewName("redirect:"+savedRequest.getRequestUrl().substring(begin));
		}else{
			mv.setViewName("redirect:/v1/index");
		}
		return mv;
	}
}
