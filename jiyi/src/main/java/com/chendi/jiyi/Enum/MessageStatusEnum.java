package com.chendi.jiyi.Enum;

public enum MessageStatusEnum {

	NOTREAD("未读",0),
	HASREAD("已读", 1);
	private String name1;
	private int index;

	private MessageStatusEnum(String name1, int index) {
		this.name1 = name1;
		this.index = index;
	}

	public static String getName1(int index) {
		for (MessageStatusEnum s : MessageStatusEnum.values()) {
			if (s.getIndex() == index) {
				return s.getName1();
			}
		}
		return null;
	}
	
	public static int getIndex(String name1) {
		for (MessageStatusEnum s : MessageStatusEnum.values()) {
			if (s.getName1().equals(name1)) {
				return s.getIndex();
			}
		}
		return -1;
	}

	public String getName1() {
		return name1;
	}

	public void setName1(String name1) {
		this.name1 = name1;
	}

	public int getIndex() {
		return index;
	}

	public void setIndex(int index) {
		this.index = index;
	}

}
