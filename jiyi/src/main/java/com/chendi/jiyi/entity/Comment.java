package com.chendi.jiyi.entity;

import java.util.List;

public class Comment {
	private Integer cId;
	private Integer fkId;
	private Integer fkType;
	private User cUser;
	private String cDetails;
	private String cCreateTime;
	private int cPraise;
	private List<Reply> replyList;

	public Comment() {
		super();
	}

	public Integer getcId() {
		return cId;
	}

	public void setcId(Integer cId) {
		this.cId = cId;
	}

	public Integer getFkId() {
		return fkId;
	}

	public void setFkId(Integer fkId) {
		this.fkId = fkId;
	}

	public Integer getFkType() {
		return fkType;
	}

	public void setFkType(Integer fkType) {
		this.fkType = fkType;
	}

	public User getcUser() {
		return cUser;
	}

	public void setcUser(User cUser) {
		this.cUser = cUser;
	}

	public String getcDetails() {
		return cDetails;
	}

	public void setcDetails(String cDetails) {
		this.cDetails = cDetails;
	}

	public String getcCreateTime() {
		return cCreateTime;
	}

	public void setcCreateTime(String cCreateTime) {
		this.cCreateTime = cCreateTime;
	}

	public int getcPraise() {
		return cPraise;
	}

	public void setcPraise(int cPraise) {
		this.cPraise = cPraise;
	}

	public List<Reply> getReplyList() {
		return replyList;
	}

	public void setReplyList(List<Reply> replyList) {
		this.replyList = replyList;
	}
	
}
