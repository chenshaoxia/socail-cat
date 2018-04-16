<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta charset="UTF-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<title>技易网</title>

<script src="node_modules/angular/angular.js"></script>
<script
	src="node_modules/angular-ui-router/release/angular-ui-router.js"></script>


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
	/* function check(form) {
		alert("有效");
	} */
	$(document).ready(function() {
		if ("${msg}" != null && "${msg}" != "") {
			alert("${msg}");
		}
	});
</script>
</head>
<body>
	<%@include file="title.jsp"%>
	<form action="doRegister" method="post" onsubmit="return check(this)"
		enctype="multipart/form-data">
		<div class="container my-5">
			<div id="signup_box"
				class="border_with_shadow container col-lg-5 p-3">
				<div class="signup_box_head row p-3">
					<h3 class="sign_head col">用户注册</h3>
					<a class="sign_sub col" href="login.html">用户登陆<img class="pb-1"
						src="<%=path%>/img/icon/right_arrow.png" height="18" width="18" /></a>
				</div>
				<div class="input-group my-3">
					<input type="text" class="form-control" name="id" placeholder="学号">
				</div>
				<div class="input-group my-3">
					<input type="text" class="form-control" name="name"
						placeholder="真实姓名">
				</div>
				<div class="input-group my-3">
					<input type="password" class="form-control" name="password"
						placeholder="密码">
				</div>
				<div class="input-group my-3">
					<input type="password" class="form-control" placeholder="确认密码">
				</div>
				<div class="input-group my-3">
					<div class="input-group-prepend">
						<div class="input-group-text">@</div>
					</div>
					<input type="email" class="form-control" name="email"
						placeholder="电子邮箱">
				</div>
				<label class="px-1 comment">* 完善的用户信息将使你获得80的<a href="#">信用积分</a></label>
				<div class="input-group my-3">
					<div class="input-group-prepend">
						<div class="input-group-text">86+</div>
					</div>
					<input type="text" class="form-control" name="phone"
						placeholder="手机号">
				</div>
				<div class="input-group my-3">
					<input type="text" class="form-control" name="qq" placeholder="QQ">
				</div>
				<fieldset class="form-group">
					<!--<label for="genderSelect">性别</label>-->
					<select class="form-control" name="sex" id="genderSelect">
						<option>男</option>
						<option>女</option>
					</select>
				</fieldset>
				<fieldset class="form-group">
					<select class="form-control" name="institute" id="academy">
						<option>经济学院</option>
						<option>统数学院</option>
						<option>信息与安全工程学院</option>
					</select>
				</fieldset>
				<fieldset class="form-group">
					<select class="form-control" name="specialty" id="major">
						<option>民商法</option>
						<option>边管</option>
					</select>
				</fieldset>
				<div class="form-group">
					<div class="custom-file">
						<input type="file" class="custom-file-input"
							id="validatedCustomFile1"> <label
							class="custom-file-label" for="validatedCustomFile1">上传头像</label>
					</div>
				</div>
				<label class="px-1 comment">* 请通过校园卡、学生证照片进行实名认证</label>
				<div class="form-group">
					<div class="custom-file">
						<input type="file" class="custom-file-input" name="picture1"
							id="validatedCustomFile2" required> <label
							class="custom-file-label" for="validatedCustomFile2">上传认证照片</label>
					</div>
				</div>
				<div class="form-check my-3">
					<input type="checkbox" class="form-check-input" id="login_check">
					<label class="form-check-label" for="login_check">我已阅读并同意<a
						href="#">《霸王条款》</a></label>
				</div>
				<button class="btn btn-primary btn-block my-3" type="submit">注册</button>
			</div>
		</div>
	</form>
	<%@include file="footer.jsp"%>
</body>
</html>