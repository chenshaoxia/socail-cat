package com.chendi.jiyi.entity;

public class RewardAccepter {

	private Integer raId;
	private Integer rsId;
	private String accepterId;
	private String raCreateTime;
	
	public RewardAccepter() {
		super();
	}

	public Integer getRaId() {
		return raId;
	}

	public void setRaId(Integer raId) {
		this.raId = raId;
	}

	public Integer getRsId() {
		return rsId;
	}

	public void setRsId(Integer rsId) {
		this.rsId = rsId;
	}

	public String getAccepterId() {
		return accepterId;
	}

	public void setAccepterId(String accepterId) {
		this.accepterId = accepterId;
	}

	public String getRaCreateTime() {
		return raCreateTime;
	}

	public void setRaCreateTime(String raCreateTime) {
		this.raCreateTime = raCreateTime;
	}

}
