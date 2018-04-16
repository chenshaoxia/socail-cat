package com.chendi.jiyi.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping(value="/v1")
public class CommonController {
	
	@RequestMapping(value="/index",method=RequestMethod.GET)
	public String display() {
		return "enter/index";
	}
}
