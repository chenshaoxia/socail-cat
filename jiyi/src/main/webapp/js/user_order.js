$(document).ready(function() {

	var ctx = $("#ctx").val();
	//显示未读消息条数
	/*$("#not_read_num").load(ctx+"/v1/messages/notRead");*/
	$.get(ctx + "/v1/messages/notRead"
		, function(result) {
			if (result != 0) {
				$("#not_read_num").text(result);
			}
		}
	);

	$("#buy").click(function() {
		if (confirm('是否确认购买？')) {
			$.ajax({
				type : "post",
				dataType : "html",
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
					if (result.flag) {
						$("#accepterSpan").load("accepterRefresh");
					}
				},
				error : function(data) {
					alert(data);
				}
			})
		}
	});

	//上传技能贴
	$("#doRelease").click(function() {
		//这里用jquery获取form获取不到
		//var formData=new FormData($("#reward_form"));获取不到
		/* data可以用$('#reward_form').serialize(),
		* 但这里还要上传图片 只能用这种方式
		*/
		var formData = new FormData(document.getElementById("release_form"));
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

	//上传悬赏贴
	$("#doReward").click(function() {
		//这里用jquery获取form获取不到
		//var formData=new FormData($("#reward_form"));获取不到
		/* data可以用$('#reward_form').serialize(),
		 * 但这里还要上传图片 只能用这种方式
		 */
		var formData = new FormData(document.getElementById("reward_form"));
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
					$("#reward_form")[0].reset();
				}
			},
			error : function(data) {
				alert(data);
			}
		})
	});

	//显示评论列表
	$("#comment").click(function() {
		$.ajax({
			type : "get",
			dataType : "html",
			url : "comments",
			success : function(data) {
				$("#detail-content").html(data);
			},
			error : function(data) {
				alert(data);
			}
		})
	});

})
/*
 * 悬赏贴和技能贴点赞实现
 */
function support(base, id, type) {
	$.ajax({
		type : "post",
		dataType : "json",
		url : base + "/v1/skills/praise/creation",
		data : {
			id : id,
			type : type
		},
		success : function(result) {
			alert(result.msg);
			if (result.flag) {
				//刷新div里面的内容
				$("#supportDiv").load(base + "/v1/skills/praise/refresh", {
					'id' : id,
					'type' : type
				});

				$("#release_support").hide();
				$("#releaseSupportTips").show();

				$("#reward_support").hide();
				$("#rewardSupportTips").show();
			}
		},
		error : function(data) {
			alert("请求失败" + data);
		}
	})
}
;

/*
 * 函数的定义需要放到$(document).ready(function()外实现
 * 发送私信函数
 */
function personalLetter(base, receiverId) {
	$.ajax({
		type : "post",
		dataType : "json",
		url : base + "/v1/messages/personalLetters/creation",
		data : {
			receiver : receiverId,
			content : $("#letterContent").val()
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
}
;