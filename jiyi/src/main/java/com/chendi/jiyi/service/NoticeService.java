package com.chendi.jiyi.service;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.chendi.jiyi.Enum.CategoryEnum;
import com.chendi.jiyi.Enum.ReleaseSkillStatus;
import com.chendi.jiyi.dao.NoticeDAO;
import com.chendi.jiyi.dto.CommonTools;
import com.chendi.jiyi.entity.Notice;
import com.chendi.jiyi.entity.User;

@Service
public class NoticeService {

	@Autowired
	private NoticeDAO noticeDAO;
	@Autowired
	private PictureService pService;

	@Transactional
	public String addNotice(Notice notice,MultipartFile[] pictureList,HttpSession session) {
		String msg = null;
		try {
			noticeDAO.addNotice(notice);
			int fkId = notice.getnId();
			pService.addManyPicture(pictureList, fkId, CategoryEnum.NOTICE.getIndex(), session);
			msg = "添加成功！";
		} catch (Exception e) {
			e.printStackTrace();
			msg = "添加失败，请重试！";
			// transactional只处理运行时异常
			throw new RuntimeException();
		}
		return msg;
	}

	public Notice queryById(int id) {
		return noticeDAO.queryById(id);
	}

	public List<Notice> queryAll() {
		return noticeDAO.queryAll();
	}

	public int updateById(Notice notice) {
		return noticeDAO.updateById(notice);
	}

	public int deleteById(int id) {
		return noticeDAO.deleteById(id);
	}
}
