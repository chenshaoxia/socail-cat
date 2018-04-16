package com.chendi.jiyi.entity;

public class Notice {

	private int nId;
	private String nTitle;
	private String nDetails;
	private String nPublisher;
	private String nCreateTime;
	private int nIsTop;

	public Notice() {

	}

	public int getnId() {
		return nId;
	}

	public void setnId(int nId) {
		this.nId = nId;
	}

	public String getnTitle() {
		return nTitle;
	}

	public void setnTitle(String nTitle) {
		this.nTitle = nTitle;
	}

	public String getnDetails() {
		return nDetails;
	}

	public void setnDetails(String nDetails) {
		this.nDetails = nDetails;
	}

	public String getnPublisher() {
		return nPublisher;
	}

	public void setnPublisher(String nPublisher) {
		this.nPublisher = nPublisher;
	}

	public String getnCreateTime() {
		return nCreateTime;
	}

	public void setnCreateTime(String nCreateTime) {
		this.nCreateTime = nCreateTime;
	}

	public int getnIsTop() {
		return nIsTop;
	}

	public void setnIsTop(int nIsTop) {
		this.nIsTop = nIsTop;
	}

}
