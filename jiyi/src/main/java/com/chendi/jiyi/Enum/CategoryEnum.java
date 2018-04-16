package com.chendi.jiyi.Enum;

public enum CategoryEnum {
	REALNAME("real_name",1),
	USERHEADER("user_header",2),
	RELEASESKILL("release_skill",3),
	REWARDSKILL("reward_skill",4),
	NOTICE("notice",5),
	COMMENT("comment",6),
	RELEASECOVER("release_cover",7),
	REWARDCOVER("reward_cover",8);
	private String name;
	private int index;
	private CategoryEnum(String name,int index){
		this.name=name;
		this.index=index;
	}
	public static String getName(int index){
		for (CategoryEnum c : CategoryEnum.values()) {
			if (c.getIndex()==index) {
				return c.getName();
			}
		}
		return null;
	}
	public static int getIndex(String name){
		for (CategoryEnum c : CategoryEnum.values()) {
			if (c.getName().equals(name)) {
				return c.getIndex();
			}
		}
		return -1;
	}
	public static CategoryEnum getType(String name){
		for (CategoryEnum c : CategoryEnum.values()) {
			if (c.getName().equals(name)) {
				return c;
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
