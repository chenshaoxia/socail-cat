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

<script src="<%=path%>/js/goup.js"></script>
<link rel="stylesheet" href="<%=path%>/lib/bootstrap.min.css">
<link rel="stylesheet" href="<%=path%>/lib/font-awesome.min.css">

<link rel="stylesheet" href="<%=path%>/css/common.css">
<link rel="stylesheet" href="<%=path%>/css/show.css">
<link rel="stylesheet" href="<%=path%>/css/skill.css">
<link rel="stylesheet" href="<%=path%>/css/notice.css">

</head>
<body>
	<%@include file="../../module/show/notice_details.jsp"%>
</body>
</html>