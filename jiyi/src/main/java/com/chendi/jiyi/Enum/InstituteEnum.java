package com.chendi.jiyi.Enum;

public enum InstituteEnum {
	
	MAKESI("马克思主义学院",1),
	ZHE("哲学院",2),
	JINGJI("经济学院",3),
	CAISHUI("财政税务学院",4),
	JINRONG("金融学院",5),
	FA("法学院",6),
	XINGSI("刑事司法学院",7),
	WAIGUOYU("外国语学院",8),
	XINWEN("新闻与文化传播学院",9),
	GONGSHANG("工商管理学院",10),
	KUAIJI("会计学院",11),
	GONGGUAN("公共管理学院",12),
	TONGSHU("统计与数学学院",13),
	GONGCHENG("信息与安全工程学院",14),
	WENLAN("文澜学院",15),
	ZHISHI("知识产权学院",16),
	MBA("MBA学院",17),
	JIXU("继续教育学院(网络教育学院)",18),
	ZHONGHAN("中韩新媒体学院",19);
	private String name1;
	private int index;
	private InstituteEnum(String name1, int index) {
		this.name1 = name1;
		this.index = index;
	}
	
	public static String getNameByIndex(int index) {
		for (InstituteEnum i : InstituteEnum.values()) {
			if (i.getIndex() == index) {
				return i.getName1();
			}
		}
		return "其他学院";
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
