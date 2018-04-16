<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
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

<script src="<%=path%>/lib/jquery.slim.min.js"></script>
<script src="<%=path%>/lib/jquery.min.js"></script>
<script src="<%=path%>/lib/jquery.goup.min.js"></script>
<script src="<%=path%>/lib/popper.min.js"></script>
<script src="<%=path%>/lib/bootstrap.min.js"></script>

<script src="<%=path%>/js/goup.js"></script>
<link rel="stylesheet" href="<%=path%>/lib/bootstrap.min.css">
<link rel="stylesheet" href="<%=path%>/lib/font-awesome.min.css">

<link rel="stylesheet" href="<%=path%>/css/common.css">
<link rel="stylesheet" href="<%=path%>/css/user.css">
<link rel="stylesheet" href="<%=path%>/css/skill.css">

<script type="text/javascript">
	$(document).ready(function() {
		// 回到顶部
		$("#user_content_nav a").click(function() {
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
	})
</script>
</head>
<body>
	<%@include file="../../module/common/header.jsp"%>
	<div id="user" class="container-fluid">
		<!--user_head-->
		<%@include file="../../module/user/user_header.jsp"%>
		<!--user_head-->
		<div class="container pb-5">
			<div id="user_content" class="row justify-content-center">
				<!-- 用户页面侧边导航栏 -->
				<%@include file="../../module/user/user_content_nav.jsp"%>
				<div id="user_div" class="col-lg-10 col-md-9 col-sm-12">
					<%@include file="../../module/user/user_info.jsp"%>
				</div>
			</div>
			<!--modal-->
		</div>
	</div>
	<%@include file="../../module/common/footer.jsp"%>
</body>
</html>