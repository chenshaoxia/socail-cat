package com.chendi.jiyi.entity;

import java.util.List;

import com.chendi.jiyi.Enum.ReleaseSkillStatus;
import com.chendi.jiyi.Enum.SkillCategoryEnum;

public class ReleaseSkill {
	private Integer rsId;
	private String rsTitle;
	private String rsDetails;
	private User rsBuyer;
	private User rsPublisher;
	private String rsCreateTime;
	private Integer rsCategory;
	private Integer rsClassNum;
	private Integer rsClassTime;
	private String rsPlace;
	private String rsTarget;
	private String rsTerm;
	private String rsPersonalDescribe;
	/*
	 * 这里的int最好使用包装类型integer 
	 * 因为spring mvc 传递的参数时如果为空 int会报错 ""不能转换成int
	 * 用integer ""转换成null
	 */
	private Integer rsCost;
	private Integer rsCanTry;
	private Integer rsTryClassNum;
	private Integer rsTryCost;
	private Integer rsPraise;
	private Integer rsStatus;
	private Admin rsAuditor;
	private String rsAuditingMsg;
	private String rsCover;
	private List<Picture> rsPictureList;
	private List<Comment> commentList;

	public ReleaseSkill() {
		super();
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

	public User getRsBuyer() {
		return rsBuyer;
	}

	public void setRsBuyer(User rsBuyer) {
		this.rsBuyer = rsBuyer;
	}

	public User getRsPublisher() {
		return rsPublisher;
	}

	public void setRsPublisher(User rsPublisher) {
		this.rsPublisher = rsPublisher;
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

	public Integer getRsClassNum() {
		return rsClassNum;
	}

	public void setRsClassNum(Integer rsClassNum) {
		this.rsClassNum = rsClassNum;
	}

	public Integer getRsClassTime() {
		return rsClassTime;
	}

	public void setRsClassTime(Integer rsClassTime) {
		this.rsClassTime = rsClassTime;
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

	public String getRsPersonalDescribe() {
		return rsPersonalDescribe;
	}

	public void setRsPersonalDescribe(String rsPersonalDescribe) {
		this.rsPersonalDescribe = rsPersonalDescribe;
	}

	public Integer getRsCost() {
		return rsCost;
	}

	public void setRsCost(Integer rsCost) {
		this.rsCost = rsCost;
	}

	public Integer getRsCanTry() {
		return rsCanTry;
	}

	public void setRsCanTry(Integer rsCanTry) {
		this.rsCanTry = rsCanTry;
	}

	public Integer getRsTryClassNum() {
		return rsTryClassNum;
	}

	public void setRsTryClassNum(Integer rsTryClassNum) {
		this.rsTryClassNum = rsTryClassNum;
	}

	public Integer getRsTryCost() {
		return rsTryCost;
	}

	public void setRsTryCost(Integer rsTryCost) {
		this.rsTryCost = rsTryCost;
	}

	public Integer getRsPraise() {
		return rsPraise;
	}

	public void setRsPraise(Integer rsPraise) {
		this.rsPraise = rsPraise;
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

	public List<Picture> getRsPictureList() {
		return rsPictureList;
	}

	public void setRsPictureList(List<Picture> rsPictureList) {
		this.rsPictureList = rsPictureList;
	}

	public List<Comment> getCommentList() {
		return commentList;
	}

	public void setCommentList(List<Comment> commentList) {
		this.commentList = commentList;
	}

	@Override
	public String toString() {
		return "ReleaseSkill [rsId=" + rsId + ", rsTitle=" + rsTitle + ", rsDetails=" + rsDetails + ", rsBuyer="
				+ rsBuyer + ", rsPublisher=" + rsPublisher + ", rsCreateTime=" + rsCreateTime + ", rsCategory="
				+ rsCategory + ", rsClassNum=" + rsClassNum + ", rsClassTime=" + rsClassTime + ", rsPlace=" + rsPlace
				+ ", rsTarget=" + rsTarget + ", rsTerm=" + rsTerm + ", rsPersonalDescribe=" + rsPersonalDescribe
				+ ", rsCost=" + rsCost + ", rsCanTry=" + rsCanTry + ", rsTryClassNum=" + rsTryClassNum + ", rsTryCost="
				+ rsTryCost + ", rsPraise=" + rsPraise + ", rsStatus=" + rsStatus + ", rsAuditor=" + rsAuditor + "]";
	}
}
