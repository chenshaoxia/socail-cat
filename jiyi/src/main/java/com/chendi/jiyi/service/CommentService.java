package com.chendi.jiyi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chendi.jiyi.dao.AdminDAO;
import com.chendi.jiyi.dao.CommentDAO;
import com.chendi.jiyi.dao.UserDAO;
import com.chendi.jiyi.dto.UserStatus;
import com.chendi.jiyi.entity.Admin;
import com.chendi.jiyi.entity.Comment;
import com.chendi.jiyi.entity.User;

@Service
public class CommentService {

	@Autowired
	private CommentDAO commentDAO;
	
	public int addComment(Comment comment){
		return commentDAO.addComment(comment);
	}

	public List<Comment> queryRelease(int fkId){
		return commentDAO.queryRelease(fkId);
	}
	
	public List<Comment> queryByFk(int fkId,int fkType){
		return commentDAO.queryByFk(fkId, fkType);
	}
	
	public int praiseByCommentId(int cId){
		return commentDAO.praiseByCommentId(cId);
	}

	public int deleteByCommentId(int cId){
		return commentDAO.deleteByCommentId(cId);
	}
}
