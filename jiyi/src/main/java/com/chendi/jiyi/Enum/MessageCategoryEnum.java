package com.chendi.jiyi.Enum;

public enum MessageCategoryEnum {

//	ALL("all",0),
	XTTZ("系统通知", 1), 
	PINGLUN("评论", 2), 
	SX("私信", 3), 
	CALLME("call我的人", 4);
	private String name1;
	private int index;

	private MessageCategoryEnum(String name1, int index) {
		this.name1 = name1;
		this.index = index;
	}

	public static String getName1(int index) {
		for (MessageCategoryEnum s : MessageCategoryEnum.values()) {
			if (s.getIndex() == index) {
				return s.getName1();
			}
		}
		return null;
	}
	
	public static int getIndex(String name1) {
		for (MessageCategoryEnum s : MessageCategoryEnum.values()) {
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
