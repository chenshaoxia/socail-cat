package com.chendi.jiyi.dao;

import java.util.List;

import com.chendi.jiyi.entity.Reply;

public interface ReplyDAO {

	public int addReply(Reply reply);

	public List<Reply> queryByComment(int cId);
	
//	public List<Reply> queryByFk(int cId);
	

	public int praiseByReplyId(int rId);
//	public List<Reply> queryAll();

//	public int updateById(Reply reply);

	public int deleteByReplyId(int cId);
}
