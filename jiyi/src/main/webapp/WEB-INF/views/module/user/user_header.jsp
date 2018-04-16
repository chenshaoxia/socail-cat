<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<div id="user_head" class="row justify-content-around">
	<div class="col-lg-6 col-md-6 col-sm-12">
		<div class="row my-5 justify-content-center">
			<div id="user_photo" class="d-inline">
				<img class="detail_user_pic"
					src="<%=request.getContextPath()%>/${sessionScope.user.picture}"
					height="100" width="100">
			</div>
			<div class="d-inline px-4">
				<div id="user_name" class="my-2">${sessionScope.user.name}</div>
				<p id="user_describe" class="text-nowrap">这个人很懒，什么都没说</p>
			</div>
		</div>
	</div>
	<div class="col-lg-6 col-md-6 col-sm-12">
		<div id="user_data" class="row my-5 justify-content-center">
			<table>
				<thead>
					<tr>
						<th>发帖</th>
						<th>喵币</th>
						<th>信用</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>${sessionScope.user.releaseNum+sessionScope.user.rewardNum}</td>
						<td>${sessionScope.user.wealth}</td>
						<td>${sessionScope.user.credit}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</div>