<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>

<div id="user_upload" class="border_shadow container p-4">
	<h3 class="skill_title pb-3">上传技能</h3>
	<form class="col-lg-8 m-4" enctype="multipart/form-data"
		action="<%=request.getContextPath()%>/skill/doRelease" method="post">
		<div class="form-group row">
			<input type="text" name="rsTitle" class="form-control" id="post_name"
				placeholder="帖子名称">
		</div>
		<div class="form-group row">
			<textarea type="text" name="rsDetails" class="form-control"
				id="skill_detail" placeholder="技能详情"></textarea>
		</div>
		<div class="form-group row">
			<select name="rsCategory" class="custom-select" required>
				<option value="0">类别1</option>
				<option value="1">类别2</option>
				<option value="2">类别3</option>
				<option value="3">类别4</option>
			</select>
		</div>
		<div class="form-group row">
			<input type="number" name="rsClassNum" class="form-control"
				id="post_time" placeholder="课时数">
		</div>
		<div class="form-group row">
			<input type="number" name="rsClassTime" class="form-control"
				id="post_pre_time" placeholder="单课时时间">
		</div>
		<div class="form-group row">
			<input type="text" name="rsPlace" class="form-control"
				id="post_place" placeholder="教学地点">
		</div>
		<div class="form-group row">
			<input type="text" name="rsTarget" class="form-control"
				id="post_admin" placeholder="课程目标">
		</div>
		<div class="form-group row">
			<input type="text" name="rsTerm" class="form-control" id="post_dead"
				placeholder="完成期限">
		</div>
		<div class="form-group row">
			<textarea type="text" name="rsPersonalDescribe" class="form-control"
				id="skill_ability" placeholder="个人技能描述"></textarea>
		</div>
		<!--<div class="row my-3">-->
		<!--<div class="form-check">-->
		<!--<input type="checkbox" class="form-check-input" id="open_message">-->
		<!--<label class="form-check-label" for="open_message">公开我的QQ、微信</label>-->
		<!--</div>-->
		<!--</div>-->
		<!--<div class="custom-file row">-->
		<input id="input-id" name="picture1" multiple="multiple" type="file"
			data-preview-file-type="text">
		<!--</div>-->
		<div class="row my-3">
			<div class="form-check">
				<input type="checkbox" name="rsCanTry" value=1 class="form-check-input"
					id="try"> <label class="form-check-label"
					for="open_message">允许试用 * 选填</label>
			</div>
		</div>
		<div class="form-group row">
			<input type="number" name="rsTryClassNum" class="form-control"
				id="try_post_time" placeholder="试用课时数">
		</div>
		<div class="row">
			<button type="submit" class="btn btn-primary">上传</button>
		</div>
	</form>
</div>
<!-- upload_skill End -->


