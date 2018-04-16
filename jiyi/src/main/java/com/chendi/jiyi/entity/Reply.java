package com.chendi.jiyi.entity;

public class Reply {
	private Integer rId;
	private Integer cId;
	private String uId;
	private String r_reply_target;
	private String rDetails;
	private String rCreateTime;
	private Integer rPraise;

	public Reply() {
	}

	public Integer getrId() {
		return rId;
	}

	public void setrId(Integer rId) {
		this.rId = rId;
	}

	public Integer getcId() {
		return cId;
	}

	public void setcId(Integer cId) {
		this.cId = cId;
	}

	public String getuId() {
		return uId;
	}

	public void setuId(String uId) {
		this.uId = uId;
	}

	public String getR_reply_target() {
		return r_reply_target;
	}

	public void setR_reply_target(String r_reply_target) {
		this.r_reply_target = r_reply_target;
	}

	public String getrDetails() {
		return rDetails;
	}

	public void setrDetails(String rDetails) {
		this.rDetails = rDetails;
	}

	public String getrCreateTime() {
		return rCreateTime;
	}

	public void setrCreateTime(String rCreateTime) {
		this.rCreateTime = rCreateTime;
	}

	public Integer getrPraise() {
		return rPraise;
	}

	public void setrPraise(Integer rPraise) {
		this.rPraise = rPraise;
	}

}
