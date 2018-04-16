package com.chendi.jiyi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.chendi.jiyi.Enum.CategoryEnum;
import com.chendi.jiyi.service.CommentService;
import com.chendi.jiyi.service.NoticeService;
import com.chendi.jiyi.service.PictureService;
import com.chendi.jiyi.service.ReleaseSkillService;

@Controller
@RequestMapping(value = "/notice")
public class NoticeController {

	@Autowired
	private NoticeService noticeService;
	@Autowired
	private PictureService pService;
	@Autowired
	private CommentService commentService;

	@RequestMapping(value = "/notice_list", method = RequestMethod.GET)
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
	}
}
