<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<script src="<%=request.getContextPath()%>/js/send_order.js"></script>

<div id="admin_auth_more" class="border_shadow container  py-4">
	<div class="row justify-content-between admin_user_title mb-3">
		<h3 class="px-4 pb-2">认证详情</h3>
		<span class="skill_sub px-4">带 * 的信息没有在简略视图中显示</span>
	</div>
	<div class="text-center">
		<table class="table table-bordered table-hover table-sm">
			<thead>
				<tr>
					<th>项目</th>
					<th>内容</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">学号</th>
					<td>${user.id}</td>
				</tr>
				<tr>
					<th scope="row">姓名</th>
					<td>${user.name}</td>
				</tr>
				<tr>
					<th scope="row">密码 *</th>
					<td>nopassword</td>
				</tr>
				<tr>
					<th scope="row">学院</th>
					<td>${user.institute}</td>
				</tr>
				<tr>
					<th scope="row">专业</th>
					<td>${user.specialty}</td>
				</tr>
				<tr>
					<th scope="row">性别</th>
					<td>${user.sex}</td>
				</tr>
				<tr>
					<th scope="row">头像 *</th>
					<td><img src="<%=request.getContextPath()%>/${user.picture}"
						height="50" width="50" /></td>
				</tr>
				<tr>
					<th scope="row">手机号码</th>
					<td>${user.phone}</td>
				</tr>
				<tr>
					<th scope="row">电子邮箱</th>
					<td>${user.email}</td>
				</tr>
				<tr>
					<th scope="row">认证照片 *</th>
					<td><img src="<%=request.getContextPath()%>/${user.realName}"
						height="320" width="320" /></td>
				</tr>
				<tr>
					<th scope="row">操作</th>
					<td>
						<button id="user_auditing" name="${user.id}" class="btn btn-sm btn-primary admin_btn">许可</button>
						<button class="btn btn-sm btn-primary admin_btn btn-danger">拒绝</button>
					</td>
				</tr>
				<tr id="user_auditing_info"></tr>
			</tbody>
		</table>
	</div>
</div>