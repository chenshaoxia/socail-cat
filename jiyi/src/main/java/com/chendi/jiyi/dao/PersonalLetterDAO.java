package com.chendi.jiyi.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.chendi.jiyi.entity.Letter;
import com.chendi.jiyi.entity.PersonalLetter;

public interface PersonalLetterDAO {

	public int addLetter(PersonalLetter letter);

	/*public List<Letter> queryBySenderId(String senderId);

	public List<Letter> queryByReceiverId(String receiverId);*/
	
	public List<Letter> queryByBothId(@Param("senderId")String senderId,@Param("receiverId")String receiverId);
	
	public List<Letter> queryBySenderId(@Param("senderId")String senderId);
	
	public List<Letter> queryByReceiverId(@Param("receiverId")String receiverId);

	public int updateRead(@Param("plId")int mId,@Param("plHasRead")int mHasRead);
	
	public int deleteById(int plId);
}
