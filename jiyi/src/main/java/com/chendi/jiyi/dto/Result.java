package com.chendi.jiyi.dto;

public class Result {
	private boolean flag;
	private String msg;

	public Result() {
	}

	public Result(boolean flag, String msg) {
		super();
		this.flag = flag;
		this.msg = msg;
	}

	public boolean isFlag() {
		return flag;
	}

	public void setFlag(boolean flag) {
		this.flag = flag;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}
}
