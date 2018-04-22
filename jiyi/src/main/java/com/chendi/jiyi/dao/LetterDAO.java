package com.chendi.jiyi.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.chendi.jiyi.entity.Letter;

public interface LetterDAO {

	public int addLetter(Letter letter);

	/*public List<Letter> queryBySenderId(String senderId);

	public List<Letter> queryByReceiverId(String receiverId);*/
	
	public List<Letter> queryByBothId(@Param("senderId")String senderId,@Param("receiverId")String receiverId);
	
	public List<Letter> queryBySenderId(@Param("senderId")String senderId);
	
	public List<Letter> queryByReceiverId(@Param("receiverId")String receiverId,@Param("hasRead")Integer hasRead);

	public int updateRead(@Param("lId")int mId,@Param("lHasRead")int mHasRead);
	
	public int deleteById(int lId);
}
