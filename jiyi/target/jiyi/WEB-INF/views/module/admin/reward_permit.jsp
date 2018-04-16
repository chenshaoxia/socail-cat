<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<div id="admin_upload" class="border_shadow container py-4">
	<div class="row justify-content-between admin_user_title mb-3">
		<h3 class="px-4 pb-2">悬赏许可</h3>
	</div>
	<table id="reward_table"
		class="table table_center table-bordered table-sm">
		<thead>
			<tr>
				<th>#</th>
				<th>名称</th>
				<!--<th>详情</th>-->
				<th>发布人</th>
				<!--<th>接单人</th>-->
				<th>创建时间</th>
				<th>类别</th>
				<th>教学地点</th>
				<!--<th>教学目标</th>-->
				<th>完成期限</th>
				<!-- <th>易币</th> -->
				<th>是否需要试用</th>
				<!--<th>试用易币数</th>-->
				<!--<th>赞</th>-->
				<!--<th>状态</th>-->
				<th>操作</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach var="reward" items="${rewardPermitList}" varStatus="order">
				<tr>
					<td>${order.count}</td>
					<td>${reward.rsTitle}</td>
					<!--<td>这里是一大堆详情</td>-->
					<td>${reward.rsPublisher.name}</td>
					<!--<td>Jack\Rose</td>-->
					<td>${reward.rsCreateTime}</td>
					<td>${reward.rsCategory}</td>
					<td>${reward.rsPlace}</td>
					<!--<td>完全掌握抄书技巧</td>-->
					<td>${reward.rsTerm}</td>
					<!-- <td>20</td> -->
					<c:choose>
						<c:when test="${reward.rsNeedTry==1}">
							<td>需要</td>
						</c:when>
						<c:otherwise>
							<td>不需要</td>
						</c:otherwise>
					</c:choose>
					<!--<td>18</td>-->
					<!--<td>20</td>-->
					<!--<td>0</td>-->
					<td>
						<button class="btn btn-sm btn-primary admin_btn"
							name="${reward.rsId}">详情</button>
					</td>
				</tr>
			</c:forEach>
		</tbody>
	</table>
</div>