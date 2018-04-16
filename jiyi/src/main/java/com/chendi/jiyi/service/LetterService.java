package com.chendi.jiyi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chendi.jiyi.dao.LetterDAO;
import com.chendi.jiyi.entity.Letter;

@Service
public class LetterService {
	
	@Autowired
	private LetterDAO letterDAO;
	
	public int addMessage(Letter letter){
		return letterDAO.addLetter(letter);
	}
	
	public List<Letter> queryByBothId(String senderId,String receiverId){
		return letterDAO.queryByBothId(senderId, receiverId);
	}
	
	public List<Letter> queryBySenderId(String senderId){
		return letterDAO.queryBySenderId(senderId);
	}
	
	public List<Letter> queryByReceiverId(String receiverId){
		return letterDAO.queryByReceiverId(receiverId);
	}

	public int updateRead(int mId,int mHasRead){
		return letterDAO.updateRead(mId, mHasRead);
	}
	
	public int deleteById(int mId){
		return letterDAO.deleteById(mId);
	}
}
