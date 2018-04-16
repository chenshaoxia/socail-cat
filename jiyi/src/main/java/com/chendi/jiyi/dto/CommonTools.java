package com.chendi.jiyi.dto;

import java.text.SimpleDateFormat;
import java.util.Date;

public class CommonTools {
	public static String getCurrentDate(){
		Date date=new Date();
		SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		return sdf.format(date);
	}
}
