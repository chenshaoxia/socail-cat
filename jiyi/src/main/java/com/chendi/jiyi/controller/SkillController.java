package com.chendi.jiyi.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
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
import com.chendi.jiyi.Enum.SkillCategoryEnum;
import com.chendi.jiyi.dto.CommonTools;
import com.chendi.jiyi.dto.Result;
import com.chendi.jiyi.entity.Comment;
import com.chendi.jiyi.entity.ReleaseSkill;
import com.chendi.jiyi.entity.RewardSkill;
import com.chendi.jiyi.entity.User;
import com.chendi.jiyi.service.CommentService;
import com.chendi.jiyi.service.PictureService;
import com.chendi.jiyi.service.PraiseService;
import com.chendi.jiyi.service.ReleaseSkillService;
import com.chendi.jiyi.service.RewardAccepterService;
import com.chendi.jiyi.service.RewardSkillService;

@Controller
@RequestMapping(value = "/v1/skills")
public class SkillController {

	@Autowired
	private ReleaseSkillService releaseService;
	@Autowired
	private RewardSkillService rewardService;
	@Autowired
	private CommentService commentService;
	@Autowired
	private PraiseService praiseService;
	@Autowired
	private RewardAccepterService raService;

	// 上传技能页面
	@RequestMapping(value = "/releaseSkills/creation", method = RequestMethod.GET)
	public String release(Model model) {
		model.addAttribute("skillCategory", SkillCategoryEnum.values());
		return "skill/release_edit";
	}
	
	// 上传技能实现
	@RequestMapping(value = "/releaseSkills/creation", method = RequestMethod.POST)
	@ResponseBody
	public Result doRelease(ReleaseSkill skill,@RequestParam("picture1")MultipartFile[] pictureList,
			@RequestParam("picture2")MultipartFile cover, Model model,HttpSession session){
		User user = (User) session.getAttribute("user");
		// 设置上传技能的用户
		if (user == null) {
			return new Result(false,"您好，请先登录！");
		}
		try {
			return releaseService.addReleaseSkill(skill, user.getId(), pictureList,cover, session);
		} catch (Exception e) {
			return new Result(false,"添加失败！");
		}
	}
	
	
	// 技能页面
	@RequestMapping(value = "/releaseSkills", method = RequestMethod.GET)
	public String releaseSkill(Model model, @RequestParam(value = "category", required = false) Integer category,
			@RequestParam(value = "orderBy", required = false, defaultValue = "rs_category") String orderBy,
			@RequestParam(value = "order", required = false, defaultValue = "DESC") String order) {
		model.addAttribute("skillCategory", SkillCategoryEnum.values());
		if (category == null || category == SkillCategoryEnum.ALL.getIndex()) {
			model.addAttribute("skillList",
					releaseService.queryByStatusToUser(ReleaseSkillStatus.REGULAR.getIndex(), orderBy, order));
		} else {
			model.addAttribute("skillList", rewardService.queryByCategory(category));
			// return "module/skill/release_wrapper";
		}
		return "skill/release_skill";
	}

	// 技能详情页面
	@RequestMapping(value = "/releaseSkills/{id}/details", method = RequestMethod.GET)
	public String releaseDetails(@PathVariable("id") Integer id, Model model, HttpSession session) {
		User user = (User) session.getAttribute("user");
		model.addAttribute("skill", releaseService.queryById(id));
//		model.addAttribute("commentList", commentService.queryByFk(id, CategoryEnum.RELEASESKILL.getIndex()));
		// 把
//		model.addAttribute("commentFkId", id);
//		model.addAttribute("commentFkType", CategoryEnum.RELEASESKILL.getIndex());
		model.addAttribute("praiseList", praiseService.queryByFk(id, CategoryEnum.RELEASESKILL.getIndex()));
		if (user != null) {
			model.addAttribute("hasSupport", praiseService.hasSupport(user.getId(), CategoryEnum.RELEASESKILL, id));
		}
		return "skill/release_details";
	}
	
	// 悬赏技能页面
	@RequestMapping(value = "/rewardSkills", method = RequestMethod.GET)
	public String rewardSkills(Model model, @RequestParam(value = "category", required = false) Integer category,
			@RequestParam(value = "orderBy", required = false, defaultValue = "rs_category") String orderBy,
			@RequestParam(value = "order", required = false, defaultValue = "DESC") String order) {
		model.addAttribute("skillCategory", SkillCategoryEnum.values());
		if (category == null || category == SkillCategoryEnum.ALL.getIndex()) {
			model.addAttribute("skillList",
					rewardService.queryByStatusToUser(RewardSkillStatus.REGULAR.getIndex(), orderBy, order));
		} else {
			model.addAttribute("skillList", releaseService.queryByCategory(category));
			// return "module/skill/release_wrapper";
		}
		return "skill/reward_skill";
	}

	// 悬赏详情页面
	@RequestMapping(value = "/rewardSkills/{id}/details", method = RequestMethod.GET)
	public String rewardDetails(@PathVariable("id") Integer id, Model model, HttpSession session) {
		User user = (User) session.getAttribute("user");
		RewardSkill skill=rewardService.queryById(id);
		if (skill==null) {
			skill=rewardService.queryByIdNoAccepter(id);
		}
		model.addAttribute("skill", skill);
		model.addAttribute("praiseList", praiseService.queryByFk(id, CategoryEnum.REWARDSKILL.getIndex()));
		if (user != null) {
			model.addAttribute("hasSupport", praiseService.hasSupport(user.getId(), CategoryEnum.REWARDSKILL, id));
		}
		return "skill/reward_details";
	}
	

	// 悬赏技能详情页面
	/*@RequestMapping(value = "/reward_details", method = RequestMethod.GET)
	public String rewardDetails(Integer id, Model model, HttpSession session) {
		User user = (User) session.getAttribute("user");
		model.addAttribute("skill", rewardService.queryById(id));
		model.addAttribute("commentList", commentService.queryByFk(id, CategoryEnum.REWARDSKILL.getIndex()));
		model.addAttribute("commentFkId", id);
		model.addAttribute("commentFkType", CategoryEnum.REWARDSKILL.getIndex());
		model.addAttribute("praiseList", praiseService.queryByFk(id, CategoryEnum.REWARDSKILL.getIndex()));
		if (user != null) {
			model.addAttribute("hasSupport", praiseService.hasSupport(user.getId(), CategoryEnum.REWARDSKILL, id));
		}
		return "dist/skill/dist_reward_details";
	}*/

	// 为TA打CALL支持TA
	@RequestMapping(value = "/praise/creation", method = RequestMethod.POST)
	@ResponseBody
	public Result supportRefresh(Integer id, String type, HttpSession session) {
		User user = (User) session.getAttribute("user");
		if (user == null) {
			return new Result(false,"您好，请先登录！");
		}
		return praiseService.addPraise(user.getId(), CategoryEnum.getType(type), id);
	}
	
	/*// 为TA打CALL支持TA
	@RequestMapping(value = "/releaseSkills/{id}/praise/creation", method = RequestMethod.POST)
	@ResponseBody
	public Result supportRefresh(@PathVariable("id")Integer id, String type, HttpSession session) {
		User user = (User) session.getAttribute("user");
		if (user == null) {
			return new Result(false,"您好，请先登录！");
		}
		return praiseService.addPraise(user.getId(), CategoryEnum.getType(type), id);
	}*/
	
	// 刷新打CALL div
	// (#div).load()有数据使用post方式，没数据使用get方式
	@RequestMapping(value = "/praise/refresh", method = RequestMethod.POST,produces = "text/html;charset=utf-8")
	public String support(Integer id, String type,Model model,HttpSession session) {
		model.addAttribute("praiseList", praiseService.queryByFk(id, CategoryEnum.getIndex(type)));
		return "module/skill/supportDiv";
	}

/*	@RequestMapping(value = "/doRelease", method = RequestMethod.POST)
	public String doUpload(ReleaseSkill skill, Model model, @RequestParam("picture1") MultipartFile[] pictureList,
			HttpSession session, final RedirectAttributes ra) throws Exception {
		User user = (User) session.getAttribute("user");
		// 设置上传技能的用户
		if (user == null) {
			ra.addFlashAttribute("msg", "请先登录！");
			return "redirect:/enter/login";
		}
		String msg = releaseService.addReleaseSkill(skill, user.getId(), pictureList, session);
		ra.addFlashAttribute("msg", msg);
		return "redirect:/skill/release_skill";
	}*/

	/*
	 * consumes = "multipart/form-data"
	 */
	// 悬赏技能贴
	@RequestMapping(value = "/doReward", method = RequestMethod.POST)
	@ResponseBody
	public Result doReward(RewardSkill skill, Model model, @RequestParam("picture") MultipartFile[] pictureList,
			HttpSession session) throws Exception {
		User user = (User) session.getAttribute("user");
		Result result = new Result();
		System.out.println(skill.toString());
		int i = pictureList.length;
		// 设置上传技能的用户
		if (user == null) {
			result.setFlag(false);
			result.setMsg("您好，请先登录！");
			return result;
		}
		return rewardService.addRewardSkill(skill, user, pictureList, session);
	}

	// 购买或者试用技能贴
	@RequestMapping(value = "/releaseSkills/{id}/buy", method = RequestMethod.POST, produces = "text/html;charset=utf-8")
	@ResponseBody
	public String buy(@PathVariable("id") Integer id, HttpSession session) {
		User user = (User) session.getAttribute("user");
		if (user == null) {
			return "请先登录！";
		}
		String result;
		try {
			result = releaseService.buyOrTry(id, ReleaseSkillStatus.BE_SOLD.getIndex(), user.getId());
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			result = "购买失败！失败原因" + e.getMessage();
		}
		return result;
	}

	// 接受悬赏贴
	@RequestMapping(value = "/rewardSkills/{id}/accept", method = RequestMethod.POST)
	@ResponseBody
	public Result accept(@PathVariable("id")Integer id, HttpSession session) throws Exception {
		User user = (User) session.getAttribute("user");
		if (user == null) {
			return new Result(false,"您好，请先登录！");
		}
//		RewardSkill skill = rewardService.queryById(id);
		return rewardService.accept(id, user.getId(),user.getName());
	}
	
	@RequestMapping(value = "/rewardSkills/{id}/accepterRefresh", method = RequestMethod.GET,produces = "text/html;charset=utf-8")
	public String accepterRefresh(@PathVariable("id")Integer id,Model model) {
		model.addAttribute("accepterList", raService.queryByFkId(id));
		return "module/skill/accepterSpan";
	}
}
