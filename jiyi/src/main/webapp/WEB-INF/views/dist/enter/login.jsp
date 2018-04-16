<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
	//${pageContext.request.contextPath}/student
%>
<!DOCTYPE html>
<html lang="en" ng-app="App">
<head>
<meta charset="UTF-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<title>技易网</title>

<script src="<%=path%>/lib/jquery.slim.min.js"></script>
<script src="<%=path%>/lib/popper.min.js"></script>
<script src="<%=path%>/lib/bootstrap.min.js"></script>
<link rel="stylesheet" href="<%=path%>/lib/bootstrap.min.css">
<link rel="stylesheet" href="<%=path%>/lib/font-awesome.min.css">

<link rel="stylesheet" href="<%=path%>/css/common.css">
<link rel="stylesheet" href="<%=path%>/css/user.css">
<link rel="stylesheet" href="<%=path%>/css/show.css">
<link rel="stylesheet" href="<%=path%>/css/admin.css">
<link rel="stylesheet" href="<%=path%>/css/skill.css">
<link rel="stylesheet" href="<%=path%>/css/notice.css">

<script type="text/javascript">
	$(document).ready(function() {
		if ("${msg}" != null && "${msg}" != "") {
			alert("${msg}");
		}
	});
</script>
</head>
<body>
	<%@include file="../../module/common/header.jsp"%>
	<form action="doLogin" method="post">
		<div class="container my-5">
			<div id="login_box" class="border_with_shadow container col-lg-4 p-3">
				<div class="signup_box_head row p-3">
					<h3 class="sign_head col">用户登陆</h3>
					<a class="sign_sub col" href="/jiyi/enter/register">用户注册<img
						class="pb-1" src="<%=path%>/img/icon/right_arrow.png" height="18"
						width="18" /></a>
				</div>
				<div class="input-group">
					<input type="text" class="form-control" name="id" placeholder="用户名">
				</div>
				<div class="input-group my-3">
					<input type="password" class="form-control" name="password"
						placeholder="密码">
				</div>
				<div class="row justify-content-between px-4">
					<div class="form-check">
						<input type="checkbox" class="form-check-input" id="login_check">
						<label class="form-check-label" for="login_check">记住密码</label>
					</div>
					<div class="form-check">
						<input type="checkbox" class="form-check-input" name="admin_check"
							id="admin_check"> <label class="form-check-label"
							for="login_check">管理员登陆</label>
					</div>
				</div>
				<button class="btn btn-primary btn-block my-3" type="submit">登陆</button>
			</div>
			<div id="login_hack_block" class="col-lg-12 py-lg-3 my-lg-5"></div>
		</div>
	</form>
	<%@include file="../../module/common/footer.jsp"%>
</body>
</html>