<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<div id="admin_auth" class="border_shadow container py-4">
	<div class="row justify-content-between admin_user_title mb-3">
		<h3 class="px-4 pb-2">用户认证</h3>
	</div>
	<table id="user_table" class="table table_center table-bordered table-sm">
		<thead>
			<tr>
				<th scope="col">#</th>
				<th scope="col">学号</th>
				<th scope="col">姓名</th>
				<th scope="col">学院</th>
				<th scope="col">专业</th>
				<th scope="col">性别</th>
				<th scope="col">手机号码</th>
				<th scope="col">电子邮箱</th>
				<th scope="col">操作</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach var="user" items="${userList}" varStatus="order">
				<tr>
					<th scope="row">${order.count}</th>
					<td>${user.id}</td>
					<td>${user.name}</td>
					<td>${user.institute}</td>
					<td>${user.specialty}</td>
					<td>${user.sex}</td>
					<td>${user.phone}</td>
					<td>${user.email}</td>
					<td>
						<button class="btn btn-sm btn-primary admin_btn"
							id="${user.id}">详情</button>
					</td>
				</tr>
			</c:forEach>
		</tbody>
	</table>
</div>

