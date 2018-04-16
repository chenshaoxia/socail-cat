package com.chendi.jiyi.Enum;

public enum RewardSkillStatus {
	UNDER_AUDITING("等待审核", 0), 
	REGULAR("通过审核", 1), 
	ACCEPTER_FULL("接受悬赏人数已满", 2),
	BE_CHOOSED("悬赏人被选择", 3), 
	BE_DELETED("被删除", -1);

	private String name;
	private int index;

	private RewardSkillStatus(String name, int index) {
		this.name = name;
		this.index = index;
	}

	public static String getName(int index) {
		for (RewardSkillStatus rs : RewardSkillStatus.values()) {
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
