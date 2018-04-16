<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<div id="admin_upload" class="border_shadow container py-4">
	<div class="row justify-content-between admin_user_title mb-3">
		<h3 class="px-4 pb-2">技能许可</h3>
	</div>
	<!-- <form action="release_details" method="get"> -->
	<table id="release_table"
		class="table table_center table-bordered table-sm">
		<thead>
			<tr>
				<th>#</th>
				<th>名称</th>
				<!--<th>详情</th>-->
				<th>发布人</th>
				<!--<th>购买人</th>-->
				<th>创建时间</th>
				<th>类别</th>
				<th>课时数</th>
				<th>每个课时时间</th>
				<th>教学地点</th>
				<!--<th>教学目标</th>-->
				<th>完成期限</th>
				<!--<th>个人技能描述</th>-->
				<!--<th>易币</th>-->
				<th>是否可以试用</th>
				<th>试用课时数</th>
				<!--<th>赞</th>-->
				<!--<th>状态</th>-->
				<th>操作</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach var="skill" items="${releasePermitList}" varStatus="order">
				<tr>
					<td>${order.count}</td>
					<td>${skill.rsTitle}</td>
					<td>${skill.rsPublisher.name}</td>
					<td>${skill.rsCreateTime}</td>
					<td>${skill.rsCategory}</td>
					<td>${skill.rsClassNum}</td>
					<td>${skill.rsClassTime}</td>
					<td>${skill.rsPlace}</td>
					<td>${skill.rsTerm}</td>
					<!--<td>100</td>-->
					<c:choose>
						<c:when test="${skill.rsCanTry==1}">
							<td>可以</td>
							<td>${skill.rsTryClassNum}</td>
						</c:when>
						<c:otherwise>
							<td>不可以</td>
							<td></td>
						</c:otherwise>
					</c:choose>
					<td>
						<button type="button" class="btn btn-sm btn-primary admin_btn"
							id="release" name="${skill.rsId}">详情</button>
					</td>
				</tr>
			</c:forEach>
		</tbody>
	</table>
	<!-- </form> -->
</div>
