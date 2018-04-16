<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!DOCTYPE html>
<html lang="en" ng-app="App">
<head>
<meta charset="UTF-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<title>技易网</title>

<script src="<%=path%>/lib/jquery.min.js"></script>
<script src="<%=path%>/lib/jquery.goup.min.js"></script>
<script src="<%=path%>/lib/popper.min.js"></script>
<script src="<%=path%>/lib/bootstrap.min.js"></script>
<link rel="stylesheet" href="<%=path%>/lib/bootstrap.min.css">
<link rel="stylesheet" href="<%=path%>/lib/font-awesome.min.css">

<link rel="stylesheet" href="<%=path%>/css/common.css">
<link rel="stylesheet" href="<%=path%>/css/user.css">
<link rel="stylesheet" href="<%=path%>/css/skill.css">

<script type="text/javascript">
	$(document).ready(function() {
		// 回到顶部
		$("#user_content a").click(function() {
			$.ajax({
				type : "get",
				/* dataType : "html", */
				url : "choose",
				data : {
					page : $(this).attr("id")
				},
				success : function(data) {
					$("#user_div").html(data);
				},
				error : function(data) {
					alert(data);
				}
			})
		});
		$.goup({
			containerColor : '#7097c6',
			containerRadius : 50,
			trigger : 50,
			bottomOffset : 50,
			locationOffset : 50,
			titleAsText : true
		});
	})
</script>
</head>
<body>
	<%@include file="../../module/common/header.jsp"%>
	<div id="user" class="container-fluid">
		<%@include file="../../module/user/user_header.jsp"%>
		<!--user_head-->
		<div class="container pb-5">
			<div id="user_content" class="row justify-content-center">
				<div id="user_content_nav" class="col">
					<div class="nav nav-pills flex-column border_shadow d-block">
						<a class="nav-link" id="user_info" href="#">个人资料</a>
						<hr />
						<a class="nav-link" id="user_my_skill" href="#">我的技能</a> <a
							class="nav-link" id="user_in_study" href="#">正在学习</a>
						<hr />
						<a class="nav-link active" id="user_release" href="#">上传技能</a> <a
							class="nav-link" id="user_reward" href="#">悬赏技能</a>
						<hr />
						<a class="nav-link" id="user_message" href="#">我的消息</a> <a
							class="nav-link" id="user_feedback" href="#">意见反馈</a> <a
							class="nav-link disabled" id="user_edit" href="#">编辑技能</a> <a
							class="nav-link disabled" id="user_appeal" href="#">我要申诉</a>
					</div>
					<!-- nav-pills End -->
				</div>
				<div id="user_div" class="col-lg-10 col-md-9 col-sm-12">
					<%@include file="../../module/user/user_release.jsp"%>
				</div>
			</div>
			<!--modal-->
		</div>
	</div>
	<%@include file="../../module/common/footer.jsp"%>
</body>
</html>