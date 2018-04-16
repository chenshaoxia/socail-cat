package com.chendi.jiyi.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.chendi.jiyi.Enum.MessageStatusEnum;
import com.chendi.jiyi.dto.CommonTools;
import com.chendi.jiyi.dto.Result;
import com.chendi.jiyi.entity.PersonalLetter;
import com.chendi.jiyi.entity.User;
import com.chendi.jiyi.service.CommentService;
import com.chendi.jiyi.service.LetterService;
import com.chendi.jiyi.service.PersonalLetterService;
import com.chendi.jiyi.service.PictureService;
import com.chendi.jiyi.service.UserService;

@Controller
@RequestMapping(value = "/v1/messages")
public class MessageController {

	@Autowired
	private PictureService pService;
	@Autowired
	private CommentService commentService;
	@Autowired
	private LetterService lService;
	@Autowired
	private PersonalLetterService plService;
	@Autowired
	private UserService userService;

	@RequestMapping(value = "/letters", method = RequestMethod.GET)
	public String letters(Model model,HttpSession session) {
		User user=(User) session.getAttribute("user");
		/*if (user==null) {
			
		}*/
		model.addAttribute("letterList", lService.queryByReceiverId(user.getId()));
		return "message/letters";
	}
	
	@RequestMapping(value = "/calls", method = RequestMethod.GET)
	public String calls(Model model) {
//		model.addAttribute("messageList", noticeService.queryAll());
		return "message/calls";
	}
	@RequestMapping(value = "/comments", method = RequestMethod.GET)
	public String comments(Model model) {
//		model.addAttribute("messageList", noticeService.queryAll());
		return "message/comments";
	}
	@RequestMapping(value = "/personalLetters", method = RequestMethod.GET)
	public String personalLetters(Model model) {
//		model.addAttribute("messageList", noticeService.queryAll());
		return "message/personalLetters";
	}
	
	@RequestMapping(value = "/personalLetters/creation", method = RequestMethod.POST)
	@ResponseBody
	public Result personalCreation(String receiver, String content, Model model,HttpSession session) {
//		model.addAttribute("messageList", noticeService.queryAll());
		User user=(User) session.getAttribute("user");
		if (user==null) {
			return new Result(false,"您好，请先登录！");
		}
		if (user.getId().equals(receiver)) {
			return new Result(false,"您好，您不能给自己发消息！");
		}
		if (content==null||"".equals(content.trim())) {
			return new Result(false,"您好，请输入你要发送的内容！");
		}
		PersonalLetter letter=new PersonalLetter(user, userService.queryName(receiver), 
				content, CommonTools.getCurrentDate(), MessageStatusEnum.NOTREAD.getIndex());
		//发送消息成功
		if (plService.addMessage(letter)>0) {
			return new Result(true,"消息发送成功！");
		}else {
			return new Result(false,"消息发送失败！");
		}
		
	}
	
	
	/*@RequestMapping(value = "/notice_list", method = RequestMethod.GET)
	public String noticeList(Model model) {
		model.addAttribute("noticeList", noticeService.queryAll());
		return "dist/show/dist_notice_list";
	}
	
	@RequestMapping(value = "/notice_details", method = RequestMethod.GET)
	public String noticeDetails(Integer id,Model model) {
		model.addAttribute("notice", noticeService.queryById(id));
		model.addAttribute("pictureList", pService.queryByFk(id, CategoryEnum.NOTICE.getIndex()));
		model.addAttribute("commentList", commentService.queryByFk(id, CategoryEnum.NOTICE.getIndex()));
		model.addAttribute("commentFkId", id);
		model.addAttribute("commentFkType", CategoryEnum.NOTICE.getIndex());
		return "dist/show/dist_notice_details";
	}*/
}
