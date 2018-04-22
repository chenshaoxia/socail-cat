package com.chendi.jiyi.entity;

import java.util.List;

import com.chendi.jiyi.Enum.RewardSkillStatus;
import com.chendi.jiyi.Enum.SkillCategoryEnum;

public class RewardSkill {
	private Integer rsId;
	private String rsTitle;
	private String rsDetails;
	private User rsPublisher;
	private User rsAccepter;
	private List<User> rsAccepterList;
	private String rsCreateTime;
	private Integer rsCategory;
	private String rsPlace;
	private String rsTarget;
	private String rsTerm;
	private Integer rsCost;
	private Integer rsAccepterNum;
	private Integer rsTryCost;
	private Integer rsStatus;
	private Admin rsAuditor;
	private String rsAuditingMsg;
	private String rsCover;

	public RewardSkill() {
		super();
	}
	
	//获取枚举对象中的name 技能状态
	public String getStatusEnum(){
		return RewardSkillStatus.getName(getRsStatus().intValue());
	}
	
	//获取枚举对象中的name 技能类别
	public String getCategoryEnum(){
		return SkillCategoryEnum.getName1(rsCategory);
	}
	
	public Integer getRsId() {
		return rsId;
	}

	public void setRsId(Integer rsId) {
		this.rsId = rsId;
	}

	public String getRsTitle() {
		return rsTitle;
	}

	public void setRsTitle(String rsTitle) {
		this.rsTitle = rsTitle;
	}

	public String getRsDetails() {
		return rsDetails;
	}

	public void setRsDetails(String rsDetails) {
		this.rsDetails = rsDetails;
	}

	public User getRsPublisher() {
		return rsPublisher;
	}

	public void setRsPublisher(User rsPublisher) {
		this.rsPublisher = rsPublisher;
	}

	public User getRsAccepter() {
		return rsAccepter;
	}

	public void setRsAccepter(User rsAccepter) {
		this.rsAccepter = rsAccepter;
	}

	public List<User> getRsAccepterList() {
		return rsAccepterList;
	}

	public void setRsAccepterList(List<User> rsAccepterList) {
		this.rsAccepterList = rsAccepterList;
	}

	public String getRsCreateTime() {
		return rsCreateTime;
	}

	public void setRsCreateTime(String rsCreateTime) {
		this.rsCreateTime = rsCreateTime;
	}

	public Integer getRsCategory() {
		return rsCategory;
	}

	public void setRsCategory(Integer rsCategory) {
		this.rsCategory = rsCategory;
	}

	public String getRsPlace() {
		return rsPlace;
	}

	public void setRsPlace(String rsPlace) {
		this.rsPlace = rsPlace;
	}

	public String getRsTarget() {
		return rsTarget;
	}

	public void setRsTarget(String rsTarget) {
		this.rsTarget = rsTarget;
	}

	public String getRsTerm() {
		return rsTerm;
	}

	public void setRsTerm(String rsTerm) {
		this.rsTerm = rsTerm;
	}

	public Integer getRsCost() {
		return rsCost;
	}

	public void setRsCost(Integer rsCost) {
		this.rsCost = rsCost;
	}

	public Integer getRsAccepterNum() {
		return rsAccepterNum;
	}

	public void setRsAccepterNum(Integer rsAccepterNum) {
		this.rsAccepterNum = rsAccepterNum;
	}

	public Integer getRsTryCost() {
		return rsTryCost;
	}

	public void setRsTryCost(Integer rsTryCost) {
		this.rsTryCost = rsTryCost;
	}

	public Integer getRsStatus() {
		return rsStatus;
	}

	public void setRsStatus(Integer rsStatus) {
		this.rsStatus = rsStatus;
	}

	public Admin getRsAuditor() {
		return rsAuditor;
	}

	public void setRsAuditor(Admin rsAuditor) {
		this.rsAuditor = rsAuditor;
	}

	public String getRsAuditingMsg() {
		return rsAuditingMsg;
	}

	public void setRsAuditingMsg(String rsAuditingMsg) {
		this.rsAuditingMsg = rsAuditingMsg;
	}

	public String getRsCover() {
		return rsCover;
	}

	public void setRsCover(String rsCover) {
		this.rsCover = rsCover;
	}

	@Override
	public String toString() {
		return "RewardSkill [rsId=" + rsId + ", rsTitle=" + rsTitle + ", rsDetails=" + rsDetails + ", rsPublisher="
				+ rsPublisher + ", rsAccepter=" + rsAccepter + ", rsCreateTime=" + rsCreateTime + ", rsCategory="
				+ rsCategory + ", rsPlace=" + rsPlace + ", rsTarget=" + rsTarget + ", rsTerm=" + rsTerm + ", rsCost="
				+ rsCost + ", rsAccepterNum=" + rsAccepterNum + ", rsTryCost=" + rsTryCost + ", rsStatus=" + rsStatus
				+ ", rsAuditor=" + rsAuditor + "]";
	}
}
