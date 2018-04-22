package com.chendi.jiyi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chendi.jiyi.dao.LetterDAO;
import com.chendi.jiyi.dao.PersonalLetterDAO;
import com.chendi.jiyi.entity.Letter;
import com.chendi.jiyi.entity.PersonalLetter;

@Service
public class PersonalLetterService {
	
	@Autowired
	private PersonalLetterDAO letterDAO;
	
	public int addMessage(PersonalLetter letter){
		return letterDAO.addLetter(letter);
	}
	
	public List<PersonalLetter> queryByBothId(String senderId,String receiverId){
		return letterDAO.queryByBothId(senderId, receiverId);
	}
	
	public List<PersonalLetter> queryBySenderId(String senderId){
		return letterDAO.queryBySenderId(senderId);
	}
	
	public List<PersonalLetter> queryByReceiverId(String receiverId,Integer hasRead){
		return letterDAO.queryByReceiverId(receiverId,hasRead);
	}

	public int updateRead(int mId,int mHasRead){
		return letterDAO.updateRead(mId, mHasRead);
	}
	
	public int deleteById(int mId){
		return letterDAO.deleteById(mId);
	}
}
