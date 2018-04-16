<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

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

<script src="<%=path%>/lib/jquery.slim.min.js"></script>
<script src="<%=path%>/lib/jquery.min.js"></script>
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
	<form action="doRegister" method="post" onsubmit="return check(this)"
		enctype="multipart/form-data">
		<div class="container my-5">
			<div id="signup_box"
				class="border_with_shadow container col-lg-5 p-3">
				<div class="signup_box_head row p-3">
					<h3 class="sign_head col">用户注册</h3>
					<a class="sign_sub col" href="login">用户登陆<img class="pb-1"
						src="<%=path%>/img/icon/right_arrow.png" height="18" width="18" /></a>
				</div>
				<div class="form-group my-3">
					<input id="student_num" type="text" name="id" class="form-control"
						placeholder="学号">
					<div id="student_num_empty" class="invalid-feedback">学号不能为空</div>
					<div id="student_num_invalid" class="invalid-feedback">学号应为10位数字</div>
				</div>
				<div class="input-group my-3">
					<input id="student_name" type="text" name="name"
						class="form-control" placeholder="真实姓名">
					<div id="student_name_empty" class="invalid-feedback">真实姓名不能为空</div>
				</div>
				<div class="from-group my-3  has-feedback">
					<input id="password" type="password" name="password"
						class="form-control" placeholder="密码">
					<div id="password_empty" class="invalid-feedback">密码不能为空</div>
					<div id="password_invalid" class="invalid-feedback">密码应至少为8位数字字母组合</div>
				</div>
				<div class="from-group my-3">
					<input id="repassword" type="password" class="form-control"
						placeholder="确认密码">
					<div id="repassword_invalid" class="invalid-feedback">两次密码不一致</div>
				</div>
				<div class="input-group my-3">
					<div class="input-group-prepend">
						<div class="input-group-text">@</div>
					</div>
					<input id="email" type="email" name="email" class="form-control"
						placeholder="电子邮箱">
					<div id="email_empty" class="invalid-feedback">邮箱不能为空</div>
					<div id="email_invalid" class="invalid-feedback">邮箱格式不正确</div>
				</div>
				<label class="px-1 comment">* 完善的用户信息将使你获得80的<a href="#">信用积分</a></label>
				<div class="input-group my-3">
					<input id="tel" type="text" name="phone" class="form-control"
						placeholder="手机号">
					<div class="input-group-prepend">
						<div class="input-group-text">+86</div>
					</div>
					<div id="tel_invalid" class="invalid-feedback">手机号格式不正确</div>
				</div>
				<div class="input-group my-3">
					<input type="text" name="qq" class="form-control" placeholder="QQ">
				</div>
				<fieldset class="form-group">
					<select class="form-control" name="sex" id="genderSelect">
						<option>男</option>
						<option>女</option>
					</select>
				</fieldset>
				<fieldset class="form-group">
					<select class="form-control" name="institute" id="academy">
						<c:forEach var="i" items="${instituteList}">
							<option>${i.name}</option>
						</c:forEach>
					</select>
				</fieldset>
				<fieldset class="form-group">
					<select class="form-control" name="specialty" id="major">
						<option>不公开专业</option>
						<option>民商法</option>
						<option>边管</option>
					</select>
				</fieldset>
				<label class="px-1 comment">* 请通过校园卡、学生证照片进行实名认证</label>
				<!-- <div class="input-group mb-3">
					<div class="custom-file" id="custom-file">
						<input type="file" name="picture1" class="custom-file-input"
							id="inputGroupFile"> <label class="custom-file-label"
							for="inputGroupFile">Choose file</label>
					</div>
				</div> -->
				<input id="fileUpload" type="file" name="picture1"
					data-show-preview="true" required />
				<div class="form-check my-3">
					<input type="checkbox" class="form-check-input" id="login_check">
					<label class="form-check-label" for="login_check">我已阅读并同意<a
						href="#">《霸王条款》</a></label>
				</div>
				<button class="btn btn-primary btn-block my-3" type="submit">注册</button>
			</div>
		</div>
	</form>
	<%@include file="../../module/common/footer.jsp"%>
</body>
</html>