$(document).ready(function() {
	$("#buy").click(function() {
		
		if(confirm('是否确认购买？')){
			$.ajax({
				type : "post",
	//			dataType : "html",
				url : "buy",
				success : function(data) {
					alert(data);
				},
				error : function(data) {
					alert(data);
				}
			})
		}
	});
	$("#accept").click(function() {
		if (confirm("是否确认接受？")) {
			$.ajax({
				type : "post",
				dataType : "json",
				url : "accept",
				data : {
					/*id : $("#accept").attr("name")*/
				},
				success : function(result) {
					alert(result.msg);
					if(result.flag){
						$("#accepterSpan").load("accepterRefresh");
					}
				},
				error : function(data) {
					alert(data);
				}
			})
		}
	});
	/*$("#reward_support").click(function() {
		$.ajax({
			type : "post",
			dataType : "json",
			url : "support",
			data : {
				id : $(this).attr("name"),
				type : "reward_skill"
			},
			success : function(data) {
				alert(data.msg);
				if (data.result == "true") {
					$("#reward_support").hide();
					$("#rewardSupportTips").show();
				}
			},
			error : function(data) {
				alert(data);
			}
		})
	});*/
	/*$("#release_support").click(function() {
		$.ajax({
			type : "post",
			dataType : "json",
			url : "praise/creation",
			data : {
				type : "release_skill"
			},
			success : function(result) {
				alert(result.msg);
				if (result.flag) {
					//刷新div里面的内容
					$("#supportDiv").load("praise/refresh");
					
					$("#release_support").hide();
					$("#releaseSupportTips").show();
				}
			},
			error : function(data) {
				alert("请求失败"+data);
			}
		})
	});*/
	
	$("#doRelease").click(function() {
		//这里用jquery获取form获取不到
		//var formData=new FormData($("#reward_form"));获取不到
		 /* data可以用$('#reward_form').serialize(),
		 * 但这里还要上传图片 只能用这种方式
		 */
		var formData=new FormData(document.getElementById("release_form"));
		$.ajax({
			type : "post",
			dataType : "json",
			url : "creation",
			data : formData,
			async : false,
			cache : false,
			contentType : false,
			processData : false,
			success : function(result) {
				alert(result.msg);
				if (result.flag) {
					/*我们每次通过jQuery选择器得到的都是数组,
					$("#id")[0]得到的是jQuery对象。
					$('#id').get(0)得到的是DOM对象。 
					重置表单*/
					
					$("#release_form")[0].reset();
				}
			},
			error : function(data) {
				alert(data);
			}
		})
	});
	
})
/*
 * 
 */
function support(base,id,type) {
	$.ajax({
		type : "post",
		dataType : "json",
		url : base+"/v1/skills/praise/creation",
		data : {
			id   : id,
			type : type
		},
		success : function(result) {
			alert(result.msg);
			if (result.flag) {
				//刷新div里面的内容
				$("#supportDiv").load(base+"/v1/skills/praise/refresh",{'id' : id, 'type' : type});
				
				$("#release_support").hide();
				$("#releaseSupportTips").show();
				
				$("#reward_support").hide();
				$("#rewardSupportTips").show();
			}
		},
		error : function(data) {
			alert("请求失败"+data);
		}
	})
};

/*
 * 函数的定义需要放到$(document).ready(function()外实现
 * 发送私信函数
 */
function personalLetter(base,receiverId){
	$.ajax({
		type : "post",
		dataType : "json",
		url : base+"/v1/messages/personalLetters/creation",
		data : {
			receiver : receiverId,
			content  : $("#letterContent").val()
		},
		success : function(result) {
			alert(result.msg);
			if (result.flag) {
				$("#letterContent").val("");
			}
		},
		error : function(data) {
			alert(data);
		}
	})
};