package com.chendi.jiyi.entity;

public class Letter {
	private int lId;
	private Admin lSender;
	private User lReceiver;
	private String lContent;
	private String lSendTime;
	private int lHasRead;

	public Letter() {
		super();
	}

	public int getlId() {
		return lId;
	}

	public void setlId(int lId) {
		this.lId = lId;
	}

	public Admin getlSender() {
		return lSender;
	}

	public void setlSender(Admin lSender) {
		this.lSender = lSender;
	}

	public User getlReceiver() {
		return lReceiver;
	}

	public void setlReceiver(User lReceiver) {
		this.lReceiver = lReceiver;
	}

	public String getlContent() {
		return lContent;
	}

	public void setlContent(String lContent) {
		this.lContent = lContent;
	}

	public String getlSendTime() {
		return lSendTime;
	}

	public void setlSendTime(String lSendTime) {
		this.lSendTime = lSendTime;
	}

	public int getlHasRead() {
		return lHasRead;
	}

	public void setlHasRead(int lHasRead) {
		this.lHasRead = lHasRead;
	}

	
}
