<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
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

<script src="<%=path%>/js/send_order.js"></script>
<script src="<%=path%>/js/goup.js"></script>

<link rel="stylesheet" href="<%=path%>/lib/bootstrap.min.css">
<link rel="stylesheet" href="<%=path%>/lib/font-awesome.min.css">

<link rel="stylesheet" href="<%=path%>/css/common.css">
<link rel="stylesheet" href="<%=path%>/css/user.css">
<link rel="stylesheet" href="<%=path%>/css/show.css">
<link rel="stylesheet" href="<%=path%>/css/admin.css">
<link rel="stylesheet" href="<%=path%>/css/skill.css">
<link rel="stylesheet" href="<%=path%>/css/notice.css">
</head>
<body>
	<%@include file="../../module/common/header.jsp"%>
	<div id="admin" class="container-fluid ng-scope">
		<!-- user_head End -->
		<div class="container-fluid">

			<!--hack block-->
			<div class="p-3"></div>
			<!--hack block-->

			<div id="user_content" class="row justify-content-center">

				<!--user_content_nav-->
				<%@include file="../../module/admin/manage_header.jsp"%>
				<!--user_content_nav-->

				<!--user_content_cont-->
				<div id="user_content_cont" class="col-12">
					<!-- uiView: -->
					<%@include file="../../module/admin/user_permit.jsp"%>
				</div>
				<!--user_content_cont-->

				<!--hack block-->
				<div class="p-5"></div>
				<!--hack block-->

			</div>
		</div>
	</div>
	<%@include file="../../module/common/footer.jsp"%>
	<%-- <%@include file="../../module/user/user_page.jsp"%> --%>
</body>
</html>