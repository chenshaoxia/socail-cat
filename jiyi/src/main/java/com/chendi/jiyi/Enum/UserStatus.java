package com.chendi.jiyi.Enum;

public enum UserStatus {
	UNDER_AUDITING("等待审核中",0),
	REGULAR("正常状态",1),
	BE_REFUSED("审核不通过",-1),
	CLOSED("禁止登陆",-2);
	private String name1;
	private int index;
	private UserStatus(String name1, int index) {
		this.name1 = name1;
		this.index = index;
	}
	public static String getNameByIndex(int index) {
		for (UserStatus u : UserStatus.values()) {
			if (u.getIndex() == index) {
				return u.getName();
			}
		}
		return "未知";
	}

	public String getName() {
		return name1;
	}

	public void setName(String name) {
		this.name1 = name;
	}

	public int getIndex() {
		return index;
	}

	public void setIndex(int index) {
		this.index = index;
	}
	
}
