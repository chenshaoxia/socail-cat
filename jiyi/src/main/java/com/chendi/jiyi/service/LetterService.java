package com.chendi.jiyi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chendi.jiyi.dao.LetterDAO;
import com.chendi.jiyi.dto.CommonTools;
import com.chendi.jiyi.entity.Admin;
import com.chendi.jiyi.entity.Letter;
import com.chendi.jiyi.entity.User;

@Service
public class LetterService {
	
	@Autowired
	private LetterDAO letterDAO;
	
	public int addLetter(Admin admin,User user,String content){
		//给发布人发送技能被购买消息
		Letter letter=new Letter();
		letter.setlSender(admin);
		letter.setlReceiver(user);
		letter.setlSendTime(CommonTools.getCurrentDate());
		letter.setlContent(content);
		letter.setlHasRead(0);
		return letterDAO.addLetter(letter);
	}
	
	public List<Letter> queryByBothId(String senderId,String receiverId){
		return letterDAO.queryByBothId(senderId, receiverId);
	}
	
	public List<Letter> queryBySenderId(String senderId){
		return letterDAO.queryBySenderId(senderId);
	}
	
	public List<Letter> queryByReceiverId(String receiverId,Integer hasRead){
		return letterDAO.queryByReceiverId(receiverId,hasRead);
	}

	public int updateRead(int mId,int mHasRead){
		return letterDAO.updateRead(mId, mHasRead);
	}
	
	public int deleteById(int mId){
		return letterDAO.deleteById(mId);
	}
}
