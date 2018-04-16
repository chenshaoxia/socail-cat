package com.chendi.jiyi.entity;

public class User {
	private String id;
	private String name;
	private String password;
	private String institute;
	private String specialty;
	private String sex;
	private String picture;
	private String phone;
	private String email;
	private String qq;
	private int status;
	private String auditor;
	private int wealth;
	private int releaseNum;
	private int rewardNum;
	private int buyReleaseNum;
	private int acceptRewardNum;
	private int credit;
	private int dissensionNum;
	private String createTime;
	private String realName;
	
	public User() {
//		this.picture=new byte[1024];
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getInstitute() {
		return institute;
	}

	public void setInstitute(String institute) {
		this.institute = institute;
	}

	public String getSpecialty() {
		return specialty;
	}

	public void setSpecialty(String specialty) {
		this.specialty = specialty;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public String getPicture() {
		return picture;
	}

	public void setPicture(String picture) {
		this.picture = picture;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getQq() {
		return qq;
	}

	public void setQq(String qq) {
		this.qq = qq;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public String getAuditor() {
		return auditor;
	}

	public void setAuditor(String auditor) {
		this.auditor = auditor;
	}

	public int getWealth() {
		return wealth;
	}

	public void setWealth(int wealth) {
		this.wealth = wealth;
	}

	public int getReleaseNum() {
		return releaseNum;
	}

	public void setReleaseNum(int releaseNum) {
		this.releaseNum = releaseNum;
	}

	public int getRewardNum() {
		return rewardNum;
	}

	public void setRewardNum(int rewardNum) {
		this.rewardNum = rewardNum;
	}
	
	public int getBuyReleaseNum() {
		return buyReleaseNum;
	}

	public void setBuyReleaseNum(int buyReleaseNum) {
		this.buyReleaseNum = buyReleaseNum;
	}

	public int getAcceptRewardNum() {
		return acceptRewardNum;
	}

	public void setAcceptRewardNum(int acceptRewardNum) {
		this.acceptRewardNum = acceptRewardNum;
	}

	public int getCredit() {
		return credit;
	}

	public void setCredit(int credit) {
		this.credit = credit;
	}

	public int getDissensionNum() {
		return dissensionNum;
	}

	public void setDissensionNum(int dissensionNum) {
		this.dissensionNum = dissensionNum;
	}

	public String getCreateTime() {
		return createTime;
	}

	public void setCreateTime(String createTime) {
		this.createTime = createTime;
	}

	public String getRealName() {
		return realName;
	}

	public void setRealName(String realName) {
		this.realName = realName;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", password=" + password + ", institute=" + institute
				+ ", specialty=" + specialty + ", sex=" + sex + ", picture=" + picture + ", phone=" + phone + ", email="
				+ email + ", qq=" + qq + ", status=" + status + ", auditor=" + auditor + ", wealth=" + wealth
				+ ", releaseNum=" + releaseNum + ", rewardNum=" + rewardNum + ", credit=" + credit + ", dissensionNum="
				+ dissensionNum + ", createTime=" + createTime + "]";
	}

}
