package com.chendi.jiyi.Enum;

public enum SkillCategoryEnum {

	ALL("全部",0),
	YYXX("语言学习", 1), 
	YQYY("乐器音乐", 2), 
	WDJX("舞蹈教学", 3), 
	QLYD("球类运动", 4), 
	RJXX("软件学习", 5), 
//	JCKS("教材考试", 6),
//	JYFX("经验分享", 7), 
	YXDW("游戏电玩", 8), 
	SYZD("摄影指导", 9), 
	FZHZ("服装化妆", 10),
	QT("其他", -1); 
	private String name1;
	private int index;

	private SkillCategoryEnum(String name1, int index) {
		this.name1 = name1;
		this.index = index;
	}

	public static String getName1(int index) {
		for (SkillCategoryEnum s : SkillCategoryEnum.values()) {
			if (s.getIndex() == index) {
				return s.getName1();
			}
		}
		return QT.getName1();
	}
	
	public static int getIndex(String name1) {
		for (SkillCategoryEnum s : SkillCategoryEnum.values()) {
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
