package com.chendi.jiyi.dto;

public class Result<T> {
	private boolean flag;
	private String msg;
	private T obj;
	
	public Result() {
	}

	public Result(boolean flag, String msg) {
		this.flag = flag;
		this.msg = msg;
	}

	public Result(boolean flag, String msg, T obj) {
		this.flag = flag;
		this.msg = msg;
		this.obj = obj;
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

	public T getObj() {
		return obj;
	}

	public void setObj(T obj) {
		this.obj = obj;
	}
	
}
