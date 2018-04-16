package com.chendi.jiyi.entity;

public class Picture {
	private Integer pId;
	private Integer fkId;
	private Integer fkType;
	private String pPath;
	private Integer pOrder;

	public Picture() {
	}

	public Integer getpId() {
		return pId;
	}

	public void setpId(Integer pId) {
		this.pId = pId;
	}

	public Integer getFkId() {
		return fkId;
	}

	public void setFkId(Integer fkId) {
		this.fkId = fkId;
	}

	public Integer getFkType() {
		return fkType;
	}

	public void setFkType(Integer fkType) {
		this.fkType = fkType;
	}

	public String getpPath() {
		return pPath;
	}

	public void setpPath(String pPath) {
		this.pPath = pPath;
	}

	public Integer getpOrder() {
		return pOrder;
	}

	public void setpOrder(Integer pOrder) {
		this.pOrder = pOrder;
	}

}
