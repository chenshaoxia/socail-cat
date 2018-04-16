package com.chendi.jiyi.entity;

public class Praise {

	private int pId;
	private User pUser;
	private int fkId;
	private int fkType;

	public Praise() {
		super();
	}

	public int getpId() {
		return pId;
	}

	public void setpId(int pId) {
		this.pId = pId;
	}

	public User getpUser() {
		return pUser;
	}

	public void setpUser(User pUser) {
		this.pUser = pUser;
	}

	public int getFkId() {
		return fkId;
	}

	public void setFkId(int fkId) {
		this.fkId = fkId;
	}

	public int getFkType() {
		return fkType;
	}

	public void setFkType(int fkType) {
		this.fkType = fkType;
	}

}
