package com.chendi.jiyi.entity;

import com.chendi.jiyi.Enum.InstituteEnum;
import com.chendi.jiyi.Enum.UserStatus;

public class User {
	private String id;
	private String name;
	private String password;
	private String signature;
	private Integer institute;
	private String specialty;
	private String sex;
	private String picture;
	private String email;
	private String qq;
	private Integer status;
	private String auditor;
	private Integer wealth;
	private Integer releaseNum;
	private Integer rewardNum;
	private Integer buyReleaseNum;
	private Integer acceptRewardNum;
	private Integer credit;
	private Integer dissensionNum;
	private String createTime;
	private String realName;
	private String auditingMsg;
	
	public User() {
//		this.picture=new byte[1024];
	}

	//获取学院名称
	public String getInstituteEnum(){
		return InstituteEnum.getNameByIndex(institute);
	}
	
	//获取当前状态
	public String getStatusEnum(){
		return UserStatus.getNameByIndex(status);
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

	public String getSignature() {
		return signature;
	}

	public void setSignature(String signature) {
		this.signature = signature;
	}

	public Integer getInstitute() {
		return institute;
	}

	public void setInstitute(Integer institute) {
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

	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	public String getAuditor() {
		return auditor;
	}

	public void setAuditor(String auditor) {
		this.auditor = auditor;
	}

	public Integer getWealth() {
		return wealth;
	}

	public void setWealth(Integer wealth) {
		this.wealth = wealth;
	}

	public Integer getReleaseNum() {
		return releaseNum;
	}

	public void setReleaseNum(Integer releaseNum) {
		this.releaseNum = releaseNum;
	}

	public Integer getRewardNum() {
		return rewardNum;
	}

	public void setRewardNum(Integer rewardNum) {
		this.rewardNum = rewardNum;
	}

	public Integer getBuyReleaseNum() {
		return buyReleaseNum;
	}

	public void setBuyReleaseNum(Integer buyReleaseNum) {
		this.buyReleaseNum = buyReleaseNum;
	}

	public Integer getAcceptRewardNum() {
		return acceptRewardNum;
	}

	public void setAcceptRewardNum(Integer acceptRewardNum) {
		this.acceptRewardNum = acceptRewardNum;
	}

	public Integer getCredit() {
		return credit;
	}

	public void setCredit(Integer credit) {
		this.credit = credit;
	}

	public Integer getDissensionNum() {
		return dissensionNum;
	}

	public void setDissensionNum(Integer dissensionNum) {
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

	public String getAuditingMsg() {
		return auditingMsg;
	}

	public void setAuditingMsg(String auditingMsg) {
		this.auditingMsg = auditingMsg;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", password=" + password + ", institute=" + institute
				+ ", specialty=" + specialty + ", sex=" + sex + ", picture=" + picture + ", auditingMsg=" + auditingMsg + ", email="
				+ email + ", qq=" + qq + ", status=" + status + ", auditor=" + auditor + ", wealth=" + wealth
				+ ", releaseNum=" + releaseNum + ", rewardNum=" + rewardNum + ", credit=" + credit + ", dissensionNum="
				+ dissensionNum + ", createTime=" + createTime + "]";
	}

}
