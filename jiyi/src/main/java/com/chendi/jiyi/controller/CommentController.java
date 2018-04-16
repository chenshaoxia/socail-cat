package com.chendi.jiyi.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.chendi.jiyi.Enum.CategoryEnum;
import com.chendi.jiyi.dto.CommonTools;
import com.chendi.jiyi.entity.Comment;
import com.chendi.jiyi.entity.User;
import com.chendi.jiyi.service.CommentService;
import com.chendi.jiyi.service.ReleaseSkillService;

@Controller
@RequestMapping(value = "/comment")
public class CommentController {

	@Autowired
	private CommentService commentService;

	@RequestMapping(value = "/add_comment", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, String> addComment(Integer fkId, Integer fkType, String cDetails, HttpSession session) {
		Map<String, String> result = new HashMap<String, String>();
		User user = (User) session.getAttribute("user");
		if (user == null) {
			result.put("msg", "请先登录！");
			result.put("nextPage", "../enter/login");
			return result;
		}
		if (cDetails == null || "".equals(cDetails.trim())) {
			// model.addAttribute("msg", );
			result.put("msg", "请输入评论内容！");
			return result;
		}
		Comment comment = new Comment();
		comment.setFkId(fkId);
		comment.setFkType(fkType);
		comment.setcUser(user);
		comment.setcDetails(cDetails);
		comment.setcCreateTime(CommonTools.getCurrentDate());
		comment.setcPraise(0);
		commentService.addComment(comment);
		result.put("msg", "发布评论成功！");
		result.put("refresh", "refresh");
		return result;
	}

	@RequestMapping(value = "/refresh_comment", method = RequestMethod.GET)
	public String refreshComment(Integer fkId,Integer fkType, Model model) {
		model.addAttribute("commentList", commentService.queryByFk(fkId,fkType));
		return "module/comment/comment_page";
	}
}
