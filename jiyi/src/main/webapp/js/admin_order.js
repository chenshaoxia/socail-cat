$(document).ready(function() {
	//技能贴审核通过
	$("#release_approval").click(function() {
		$.ajax({
			type : "post",
			dataType : "json",
			url : "approval",
			success : function(result) {
				alert(result.msg);
				if (result.flag) {
					window.location.href = result.obj;
				}
			},
			error : function(data) {
				alert("系统错误！");
			}
		})
	});

	//技能贴审核不通过
	$("#release_refusal").click(function() {
		$.ajax({
			type : "post",
			dataType : "json",
			url : "refusal",
			data : {
				auditingMsg : $("#auditingMsg").val()
			},
			success : function(result) {
				alert(result.msg);
				if (result.flag) {
					window.location.href = result.obj;
				}
			},
			error : function(data) {
				alert("系统错误！");
			}
		})
	});

	//悬赏贴审核通过
	$("#reward_approval").click(function() {
		$.ajax({
			type : "post",
			dataType : "json",
			url : "approval",
			success : function(result) {
				alert(result.msg);
				if (result.flag) {
					window.location.href = result.obj;
				}
			},
			error : function(data) {
				alert("系统错误！");
			}
		})
	});

	//悬赏贴审核不通过
	$("#reward_refusal").click(function() {
		$.ajax({
			type : "post",
			dataType : "json",
			url : "refusal",
			data : {
				auditingMsg : $("#auditingMsg").val()
			},
			success : function(result) {
				alert(result.msg);
				if (result.flag) {
					window.location.href = result.obj;
				}
			},
			error : function(data) {
				alert("系统错误！");
			}
		})
	});

	//用户审核通过
	$("#user_approval").click(function() {
		$.ajax({
			type : "put",
			dataType : "json",
			url : "approval",
			success : function(result) {
				alert(result.msg);
				if (result.flag) {
					window.location.href = result.obj;
				}
			},
			error : function(data) {
				alert("系统错误！");
			}
		})
	});

	//用户审核不通过
	$("#user_refusal").click(function() {
		$.ajax({
			type : "post",
			dataType : "json",
			url : "refusal",
			data : {
				auditingMsg : $("#auditingMsg").val()
			},
			success : function(result) {
				alert(result.msg);
				if (result.flag) {
					window.location.href = result.obj;
				}
			},
			error : function(data) {
				alert("系统错误！");
			}
		})
	});
})