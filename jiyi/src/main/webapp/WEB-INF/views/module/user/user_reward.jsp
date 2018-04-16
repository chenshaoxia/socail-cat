<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>


<script src="<%=request.getContextPath()%>/js/user_order.js"></script>
<div id="user_post" class="border_shadow container p-4">
	<h3 class="skill_title pb-3">悬赏技能</h3>
	<form id="reward_form" class="col-lg-8 m-4" enctype="multipart/form-data"
		action="<%=request.getContextPath()%>/skill/doReward" method="post">
		<div class="form-group row">
			<input type="text" class="form-control" name="rsTitle" id="offer_name"
				placeholder="悬赏名称">
		</div>
		<div class="form-group row">
			<textarea type="text" class="form-control" name="rsDetails" id="skill_detail"
				placeholder="悬赏详情"></textarea>
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
			<input type="text" class="form-control" name="rsPlace" id="post_place"
				placeholder="要求地点">
		</div>
		<div class="form-group row">
			<input type="text" class="form-control" name="rsTarget" id="post_admin"
				placeholder="要求目标">
		</div>
		<div class="form-group row">
			<input type="text" class="form-control" name="rsTerm" id="post_dead"
				placeholder="完成期限">
		</div>
		<!--<div class="row mb-1">-->
		<!--<div class="form-check">-->
		<!--<input type="checkbox" class="form-check-input" id="open_message">-->
		<!--<label class="form-check-label" for="open_message">公开我的QQ、微信</label>-->
		<!--</div>-->
		<!--</div>-->
		<!-- <div class="input-group row my-3">
            <div class="input-group-prepend">
                <span class="input-group-text">$</span>
            </div>
            <input type="text" class="form-control" placeholder="悬赏金额">
            <div class="input-group-append">
                <span class="input-group-text">.00</span>
            </div>
        </div> -->
        
        <!-- 悬赏贴需要试用功能暂时保留 -->
		<!-- <div class="row my-3">
			<div class="form-check">
				<input type="checkbox" class="form-check-input" name="rsNeedTry" value=1 id="try"> <label
					class="form-check-label" for="open_message">需要试用（试用结束后你再决定是否继续技能的传授。试用支付接受者20%喵币。）</label>
			</div>
		</div> -->
		<div class="input-group row my-3">
            <div class="input-group-prepend">
                <span class="input-group-text">$</span>
            </div>
            <input type="text" name="rsCost" class="form-control" placeholder="您愿意花多少喵币发起悬赏">
            <div class="input-group-append">
                <span class="input-group-text">.00</span>
            </div>
        </div>
		<div class="form-group row">
			<input id="input-id" name="picture" multiple="multiple" type="file"
				data-preview-file-type="text">
		</div>
		<div class="row">
			<button type="button" id="doReward" class="btn btn-primary">悬赏</button>
		</div>
	</form>
</div>
<!-- offer_skill End -->


