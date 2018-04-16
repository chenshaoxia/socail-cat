<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
%>
<!DOCTYPE html>
<html lang="en" ng-app="App">
<head>
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

</head>
<body>
	<%@include file="title.jsp"%>
	<div class="container-fluid">
		<div id="user_head" class="row justify-content-around">
			<div class="col-lg-4 col-md-4 col-sm-12">
				<div class="row my-5 justify-content-center">
					<div id="user_photo"></div>
					<div class="col">
						<div id="user_name" class="my-2">Kant</div>
						<p id="user_describe" class="text-nowrap">这个人很懒，什么都没说</p>
					</div>
				</div>
			</div>
			<div class="col-lg-2 col-md-2 col-sm-12">
				<div id="user_data" class="row my-5 justify-content-center">
					<span class="col pt-3">发帖</span> <span class="col pt-3">易币</span> <span
						class="col pt-3">信用</span>
					<div class="w-100"></div>
					<span class="col user_data_number">4</span> <span
						class="col user_data_number">0</span> <span
						class="col user_data_number">0</span>
				</div>
			</div>
		</div>
		<!--user_head-->
		<div class="container">
			<div id="user_content" class="row justify-content-center">
				<div id="user_content_nav" class="col my-5">
					<div class="nav nav-pills flex-column border_shadow d-block">
						<a class="nav-link" href="user.html">我的技能</a> <a class="nav-link"
							href="user_in_study.html">正在学习</a>
						<hr />
						<a class="nav-link active" href="user_upload.html">上传技能</a> <a
							class="nav-link" href="user_post.html">悬赏技能</a>
						<hr />
						<a class="nav-link" href="user_message.html">个人资料</a> <a
							class="nav-link disabled" href="user_edit.html">编辑技能</a> <a
							class="nav-link disabled" href="user_appeal.html">我要申诉</a>
					</div>
					<!-- nav-pills End -->
				</div>
				<div id="user_content_cont"
					class="col-lg-10 col-md-10 col-sm-12 my-3">
					<div id="user_upload" class="border_shadow container p-4">
						<h3 class="skill_title pb-3">上传技能</h3>
						<form class="col-lg-8 m-4" action="doUpload" method="post">
							<div class="form-group row">
								<input type="text" class="form-control" name="rsTitle"
									id="post_name" placeholder="帖子名称">
							</div>
							<div class="form-group row">
								<textarea type="text" class="form-control" name="rsDetails"
									id="skill_detail" placeholder="技能详情"></textarea>
							</div>
							<div class="form-group row">
								<select class="custom-select" name="rsCategory" required>
									<option value="0">类别1</option>
									<option value="1">类别2</option>
									<option value="2">类别3</option>
									<option value="3">类别4</option>
								</select>
							</div>
							<div class="form-group row">
								<input type="number" class="form-control" name="rsClassNum1"
									id="post_time" placeholder="课时数">
							</div>
							<div class="form-group row">
								<input type="number" class="form-control" name="rsClassTime1"
									id="post_pre_time" placeholder="单课时时间">
							</div>
							<div class="form-group row">
								<input type="text" class="form-control" name="rs_place"
									id="postPlace" placeholder="教学地点">
							</div>
							<div class="form-group row">
								<input type="text" class="form-control" name="rsTarget"
									id="post_admin" placeholder="课程目标">
							</div>
							<div class="form-group row">
								<input type="text" class="form-control" name="rsTerm"
									id="post_dead" placeholder="完成期限">
							</div>
							<div class="form-group row">
								<textarea type="text" class="form-control"
									name="rsPersonalDescribe" id="skill_ability"
									placeholder="个人技能描述"></textarea>
							</div>
							<div class="input-group row">
								<div class="input-group-prepend">
									<span class="input-group-text">$</span>
								</div>
								<input type="number" class="form-control" name="rsCost"
									id="post_price" placeholder="所需易币数">
								<div class="input-group-append">
									<span class="input-group-text">.00</span>
								</div>
							</div>
							<div class="row my-3">
								<div class="form-check">
									<input type="checkbox" class="form-check-input"
										id="open_message"> <label class="form-check-label"
										for="open_message">公开我的QQ、微信</label>
								</div>
							</div>
							<div class="form-group row my-3">
								<div class="custom-file">
									<input type="file" class="custom-file-input"
										id="validatedCustomFile" name=""> <label
										class="custom-file-label" for="validatedCustomFile">上传证明技能掌握程度的图片，决定学习所需易币</label>
								</div>
							</div>
							<div class="row my-3">
								<div class="form-check">
									<input type="checkbox" class="form-check-input"
										name="rsCanTry" value="1" id="try"> <label
										class="form-check-label" for="open_message">允许试用 * 选填</label>
								</div>
							</div>
							<div class="form-group row">
								<input type="number" class="form-control" name="rs_title"
									id="rsTryClassNum" placeholder="试用课时数">
							</div>
							<div class="input-group row my-3">
								<div class="input-group-prepend">
									<span class="input-group-text">$</span>
								</div>
								<input type="number" class="form-control" name="rsTryCost"
									id="try_post_price" placeholder="试用易币数">
								<div class="input-group-append">
									<span class="input-group-text">.00</span>
								</div>
							</div>
							<div class="row">
								<button type="submit" class="btn btn-primary">上传</button>
							</div>
						</form>
					</div>
					<!-- upload_skill End -->
				</div>
			</div>
		</div>
	</div>
	<%@include file="footer.jsp"%>
</body>
</html>