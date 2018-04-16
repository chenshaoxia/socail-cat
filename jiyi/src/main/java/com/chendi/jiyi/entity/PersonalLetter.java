package com.chendi.jiyi.entity;

public class PersonalLetter {
	private int plId;
	private User plSender;
	private User plReceiver;
	private String plContent;
	private String plSendTime;
	private int plHasRead;

	public PersonalLetter() {
		super();
	}

	public PersonalLetter(User plSender, User plReceiver, String plContent, String plSendTime,
			int plHasRead) {
		this.plSender = plSender;
		this.plReceiver = plReceiver;
		this.plContent = plContent;
		this.plSendTime = plSendTime;
		this.plHasRead = plHasRead;
	}


	public int getPlId() {
		return plId;
	}

	public void setPlId(int plId) {
		this.plId = plId;
	}

	public User getPlSender() {
		return plSender;
	}

	public void setPlSender(User plSender) {
		this.plSender = plSender;
	}

	public User getPlReceiver() {
		return plReceiver;
	}

	public void setPlReceiver(User plReceiver) {
		this.plReceiver = plReceiver;
	}

	public String getPlContent() {
		return plContent;
	}

	public void setPlContent(String plContent) {
		this.plContent = plContent;
	}

	public String getPlSendTime() {
		return plSendTime;
	}

	public void setPlSendTime(String plSendTime) {
		this.plSendTime = plSendTime;
	}

	public int getPlHasRead() {
		return plHasRead;
	}

	public void setPlHasRead(int plHasRead) {
		this.plHasRead = plHasRead;
	}

}
