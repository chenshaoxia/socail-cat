package com.chendi.jiyi.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.chendi.jiyi.entity.Letter;
import com.chendi.jiyi.entity.PersonalLetter;

public interface PersonalLetterDAO {

	public int addLetter(PersonalLetter letter);

	/*public List<PersonalLetter> queryBySenderId(String senderId);

	public List<PersonalLetter> queryByReceiverId(String receiverId);*/
	
	public List<PersonalLetter> queryByBothId(@Param("senderId")String senderId,@Param("receiverId")String receiverId);
	
	public List<PersonalLetter> queryBySenderId(@Param("senderId")String senderId);
	
	public List<PersonalLetter> queryByReceiverId(@Param("receiverId")String receiverId,@Param("hasRead")Integer hasRead);

	public int updateRead(@Param("plId")int mId,@Param("plHasRead")int mHasRead);
	
	public int deleteById(int plId);
}
