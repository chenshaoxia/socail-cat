package com.chendi.jiyi.Enum;

public enum LoginType {
	USER("User"),ADMIN("Admin");
	private String type;
	private LoginType(String type){
		this.type=type;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	
}
