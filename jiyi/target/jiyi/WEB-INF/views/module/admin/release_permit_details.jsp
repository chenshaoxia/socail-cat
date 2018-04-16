<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<div id="admin_post_more" class="border_shadow container  py-4">
	<div class="row justify-content-between admin_user_title mb-3">
		<h3 class="px-4 pb-2">技能许可</h3>
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
					<th scope="row">名称</th>
					<td>${skill.rsTitle}</td>
				</tr>
				<tr>
					<th scope="row">详情 *</th>
					<td>${skill.rsDetails}</td>
				</tr>
				<tr>
					<th scope="row">发布人</th>
					<td>${skill.rsPublisher.name}</td>
				</tr>
				<tr>
					<th scope="row">创建时间</th>
					<td>${skill.rsCreateTime}</td>
				</tr>
				<tr>
					<th scope="row">类别</th>
					<td>${skill.rsCategory}</td>
				</tr>
				<tr>
					<th scope="row">课时数</th>
					<td>${skill.rsClassNum}</td>
				</tr>
				<tr>
					<th scope="row">每个课时时间</th>
					<td>${skill.rsClassTime}</td>
				</tr>
				<tr>
					<th scope="row">教学地点</th>
					<td>${skill.rsPlace}</td>
				</tr>
				<tr>
					<th scope="row">教学目标 *</th>
					<td>${skill.rsTarget}</td>
				</tr>
				<tr>
					<th scope="row">完成期限</th>
					<td>${skill.rsTerm}</td>
				</tr>
				<tr>
					<th scope="row">个人技能描述 *</th>
					<td>${skill.rsPersonalDescribe}</td>
				</tr>
				<!-- <tr>
					<th scope="row">易币</th>
					<td>100</td>
				</tr> -->
				<c:choose>
					<c:when test="${skill.rsCanTry==1}">
						<tr>
							<th scope="row">是否可以试用 *</th>
							<td>可以</td>
						</tr>
						<tr>
							<th scope="row">课时数试用 *</th>
							<td>${skill.rsTryClassNum}</td>
						</tr>
					</c:when>
					<c:otherwise>
						<tr>
							<th scope="row">是否可以试用 *</th>
							<td>不可以</td>
						</tr>
					</c:otherwise>
				</c:choose>
				<tr>
					<th scope="row">证明图片</th>
					<td><c:forEach var="picture" items="${skill.rsPictureList}">
							<img src="<%=request.getContextPath()%>/${picture.pPath}"
								height="200" width="200" />
						</c:forEach></td>
				</tr>
				<tr>
					<th scope="row">操作</th>
					<td>
						<button type="button" class="btn btn-sm btn-primary admin_btn"
							data-toggle="modal" data-target="#edit_message1">许可</button>
						<form action="set_release_price" method="post">
							<div class="modal fade" id="edit_message1" tabindex="-1"
								role="dialog">
								<div class="modal-dialog" role="document">
									<div class="modal-content px-3">
										<div class="modal-header">
											<h5 class="modal-title" id="admin_edit_message">购买所需喵币</h5>
										</div>
										<!--modal-header-->
										<div class="modal-body">
											<div class="input-group row">
												<div class="input-group-prepend">
													<span class="input-group-text">$</span>
												</div>
												<input type="number" name="rsCost" class="form-control"
													id="post_price2" placeholder="购买所需喵币">
												<div class="input-group-append">
													<span class="input-group-text">.00</span>
												</div>
											</div>
										</div>
										<!--modal-body-->
										<c:if test="${skill.rsCanTry==1}">
											<div class="modal-header">
												<h5 class="modal-title" id="admin_edit_message">试用所需喵币</h5>
											</div>
											<!--modal-header-->
											<div class="modal-body">
												<div class="input-group row">
													<div class="input-group-prepend">
														<span class="input-group-text">$</span>
													</div>
													<input type="number" name="rsTryCost" class="form-control"
														id="post_price2" placeholder="试用所需喵币">
													<div class="input-group-append">
														<span class="input-group-text">.00</span>
													</div>
												</div>
											</div>
											<!--modal-body-->
										</c:if>
										<div class="modal-footer">
											<input type="hidden" name="rsId" value="${skill.rsId}">
											<button type="submit" class="btn btn-primary">保存</button>
											<button type="button" class="btn btn-secondary"
												data-dismiss="modal">关闭</button>
										</div>
										<!--modal-footer-->
									</div>
									<!--modal-content-->
								</div>
							</div>
							<!--modal-->
						</form>
						<button class="btn btn-sm btn-primary admin_btn btn-danger">拒绝</button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>