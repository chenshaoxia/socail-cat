package com.chendi.jiyi.service;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.chendi.jiyi.Enum.CategoryEnum;
import com.chendi.jiyi.dao.PictureDAO;
import com.chendi.jiyi.dao.ReleaseSkillDAO;
import com.chendi.jiyi.dao.RewardSkillDAO;
import com.chendi.jiyi.entity.Picture;

import net.coobird.thumbnailator.Thumbnails;

@Service
public class PictureService {

	@Autowired
	private PictureDAO pictureDAO;
	
	@Autowired
	private ReleaseSkillDAO releaseDAO;
	
	@Autowired
	private RewardSkillDAO rewardDAO;

	public int addPicture(Picture picture) {
		return pictureDAO.addPicture(picture);
	}

	
	public void addOnePicture(MultipartFile pictureFile, int fkId, int fkType
				, int order, HttpSession session)throws Exception {
		if (pictureFile == null || pictureFile.isEmpty()) {
			return;
		}
		String origin = pictureFile.getOriginalFilename();
		if (origin == null || "".equals(origin)) {
			return;
		}
		String suffix = origin.substring(origin.lastIndexOf("."));
		String path = "picture/" + CategoryEnum.getName(fkType) + "/" + fkId + "_" + order + suffix;
		// FileUtils.copyInputStreamToFile(pictureList[i].getInputStream(),
		// file);
		// 使用 thumbnailator压缩图片

		Thumbnails.of(pictureFile.getInputStream()).scale(1f).outputQuality(0.25f)
				.toFile(session.getServletContext().getRealPath("") + "/" + path);
		// 把图片属性上传到数据库
		if (fkType==CategoryEnum.RELEASECOVER.getIndex()) {
			releaseDAO.updateCover(fkId,path);
		}else if (fkType==CategoryEnum.REWARDCOVER.getIndex()) {
			rewardDAO.updateCover(fkId,path);
		}
		else {
			Picture picture = new Picture();
			picture.setFkId(fkId);
			picture.setFkType(fkType);
			picture.setpPath(path);
			picture.setpOrder(order);
			pictureDAO.addPicture(picture);
		}
	}

	public void addManyPicture(MultipartFile[] pictureList, int fkId, int fkType, HttpSession session)
			throws Exception {
		// try {
		/*
		 * pictureList[]这里，前端不选择文件 pictureList.length==1哥也不知道为什么
		 */
		if (pictureList == null || pictureList.length == 0) {
			return;
		}
		int order = 1;
		for (int i = 0; i < pictureList.length; i++) {
			this.addOnePicture(pictureList[i], fkId, fkType, order, session);
			order++;
		}
	}

	// } catch (Exception e) {
	//// throw new RuntimeException();
	// }

	public List<Picture> queryByFk(int fkId, int fkType) {
		return pictureDAO.queryByFk(fkId, fkType);
	}

	public List<Picture> queryAll() {
		return pictureDAO.queryAll();
	}

	public int deleteByFk(int fkId, int fkType) {
		return pictureDAO.deleteByFk(fkId, fkType);
	}
}
