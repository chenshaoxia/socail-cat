package com.chendi.jiyi.entity;

public class Appeal {
	private int aId;
	private String aAccuser;
	private String aDefendant;
	private String aReason;
	private String aTransactor;
	private int aStatus;
	private String aResult;
	private String aCreateTime;
	public Appeal() {
		super();
	}
	public int getaId() {
		return aId;
	}
	public void setaId(int aId) {
		this.aId = aId;
	}
	public String getaAccuser() {
		return aAccuser;
	}
	public void setaAccuser(String aAccuser) {
		this.aAccuser = aAccuser;
	}
	public String getaDefendant() {
		return aDefendant;
	}
	public void setaDefendant(String aDefendant) {
		this.aDefendant = aDefendant;
	}
	public String getaReason() {
		return aReason;
	}
	public void setaReason(String aReason) {
		this.aReason = aReason;
	}
	public String getaTransactor() {
		return aTransactor;
	}
	public void setaTransactor(String aTransactor) {
		this.aTransactor = aTransactor;
	}
	public int getaStatus() {
		return aStatus;
	}
	public void setaStatus(int aStatus) {
		this.aStatus = aStatus;
	}
	public String getaResult() {
		return aResult;
	}
	public void setaResult(String aResult) {
		this.aResult = aResult;
	}
	public String getaCreateTime() {
		return aCreateTime;
	}
	public void setaCreateTime(String aCreateTime) {
		this.aCreateTime = aCreateTime;
	}
	@Override
	public String toString() {
		return "Appeal [aId=" + aId + ", aAccuser=" + aAccuser + ", aDefendant=" + aDefendant + ", aReason=" + aReason
				+ ", aTransactor=" + aTransactor + ", aStatus=" + aStatus + ", aResult=" + aResult + ", aCreateTime="
				+ aCreateTime + "]";
	}
}
