<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>

<div id="user_edit" class="border_shadow container p-4">
	<h3 class="skill_title pb-3">编辑技能</h3>
	<form class="col-lg-8 m-4">
		<div class="form-group row">
			<input type="text" class="form-control" id="post_name2"
				placeholder="帖子名称">
		</div>
		<div class="form-group row">
			<textarea type="text" class="form-control" id="skill_detail2"
				placeholder="技能详情"></textarea>
		</div>
		<div class="form-group row">
			<textarea type="text" class="form-control" id="skill_ability2"
				placeholder="个人技能描述"></textarea>
		</div>
		<div class="form-group row">
			<input type="text" class="form-control" id="post_admin2"
				placeholder="课程目标">
		</div>
		<div class="form-group row">
			<input type="text" class="form-control" id="post_dead2"
				placeholder="完成期限">
		</div>
		<div class="form-group row">
			<select class="custom-select" required>
				<option value="0">类别1</option>
				<option value="1">类别2</option>
				<option value="2">类别3</option>
				<option value="3">类别4</option>
			</select>
		</div>
		<div class="form-group row">
			<input type="number" class="form-control" id="post_time2"
				placeholder="课时数">
		</div>

		<!--<div class="input-group row">-->
		<!--<div class="input-group-prepend">-->
		<!--<span class="input-group-text">$</span>-->
		<!--</div>-->
		<!--<input type="number" class="form-control" id="post_price2" placeholder="所需易币数">-->
		<!--<div class="input-group-append">-->
		<!--<span class="input-group-text">.00</span>-->
		<!--</div>-->
		<!--</div>-->
		<!--<div class="row my-3">-->
		<!--<div class="form-check">-->
		<!--<input type="checkbox" class="form-check-input" id="open_message2">-->
		<!--<label class="form-check-label" for="open_message2">公开我的QQ、微信</label>-->
		<!--</div>-->
		<!--</div>-->
		<div class="form-group row my-3">
			<div class="custom-file">
				<input type="file" class="custom-file-input"
					id="validatedCustomFile2" required> <label
					class="custom-file-label" for="validatedCustomFile2">上传证明图片</label>\
			</div>
		</div>
		<div class="row">
			<button type="submit" class="btn btn-primary">保存</button>
		</div>
	</form>
</div>
<!--user_edit-->


