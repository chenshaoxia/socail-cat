package com.chendi.jiyi.Enum;

public enum ReleaseSkillStatus {
	UNDER_AUDITING("等待审核", 0), 
	REGULAR("通过审核", 1), 
	BE_TRIED("试用状态", 2),
	BE_SOLD("已被购买", 3), 
	BE_DELETED("被删除", -1);

	private String name;
	private int index;

	private ReleaseSkillStatus(String name, int index) {
		this.name = name;
		this.index = index;
	}

	public static String getName(int index) {
		for (ReleaseSkillStatus rs : ReleaseSkillStatus.values()) {
			if (rs.getIndex() == index) {
				return rs.getName();
			}
		}
		return null;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getIndex() {
		return index;
	}

	public void setIndex(int index) {
		this.index = index;
	}

}
