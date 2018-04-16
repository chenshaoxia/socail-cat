package com.chendi.jiyi.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.chendi.jiyi.entity.Comment;

public interface CommentDAO {

	public int addComment(Comment commentm);

	public List<Comment> queryRelease(int fkId);
	
	public List<Comment> queryByFk(@Param("fkId")int fkId,@Param("fkType")int fkType);

	public int praiseByCommentId(int cId);
//	public List<Comment> queryAll();

//	public int updateById(Comment comment);

	public int deleteByCommentId(int cId);
}
