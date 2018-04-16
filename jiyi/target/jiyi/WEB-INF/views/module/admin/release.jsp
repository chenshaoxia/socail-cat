<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>

<body>
	<div id="admin_post" class="border_shadow container py-4">
		<div class="row justify-content-between admin_user_title mb-3">
			<h3 class="px-4 pb-2">技能管理</h3>
			<div class="col-5">
				<div class="row mt-2">
					<div class="col-4">
						<select class="form-control" id="exampleSelect1">
							<option>创建时间</option>
							<option>类别</option>
							<option>课时数</option>
							<option>状态</option>
						</select>
					</div>
					<div class="input-group input-group-sm col-8">
						<input class="form-control col-9" type="search"
							placeholder="输入您要搜索的内容">
						<button class="btn btn-outline-success col-2" type="submit">
							<i class="fa fa-search"></i>
						</button>
					</div>
				</div>
			</div>
		</div>
		<table class="table table_center table-bordered table-sm">
			<thead>
				<tr>
					<th>#</th>
					<th>名称</th>
					<th>发布人</th>
					<th>创建时间</th>
					<th>类别</th>
					<th>课时数</th>
					<th>每个课时时间</th>
					<th>教学地点</th>
					<th>完成期限</th>
					<th>易币</th>
					<th>赞</th>
					<th>状态</th>
					<th>操作</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>1</td>
					<td>口琴教学</td>
					<td>Kant</td>
					<td>2018/1/1</td>
					<td>0</td>
					<td>11</td>
					<td>2</td>
					<td>波泰高速</td>
					<td>2011/11/1</td>
					<td>100</td>
					<td>20</td>
					<td>0</td>
					<td>
						<button class="btn btn-sm btn-primary admin_btn"
							ui-sref="admin.admin_post_more">详情</button>
					</td>
				</tr>
			</tbody>
			</table>
			</div>
</body>
