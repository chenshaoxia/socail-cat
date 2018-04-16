<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>

<div id="user_message" class="border_shadow container p-4">
	<h3 class="skill_title pb-3">
		消息提醒<span class="pull-right btn btn-sm px-3">清空消息记录</span>
	</h3>

	<div class="m-3">
		<div class="border_shadow user_message_row">
			<div class="row justify-content-between p-3">
				<div class="col-lg col-md col-sm-12">
					<span>Kant</span>&nbsp;回复&nbsp;<span>Jack</span>
				</div>
				<div class="col-lg col-md col-sm-12">
					<span class="pull-right comment">02-17 14:23</span>
				</div>
			</div>
			<div class="row px-4">
				<p class="col user_message_content">这里是回复的内容</p>
			</div>
			<div class="row px-3 pb-1">
				<div class="col-lg col-md col-sm-12 comment">
					回复我的帖子：“<a ui-sref="detail">帖子的名字</a>”
				</div>
				<div class="col-lg col-md col-sm-12">
					<span class="pull-right comment btn"><i
						class="fa fa-comment-o px-2" aria-hidden="true"></i>回复</span>
				</div>
			</div>
			<p class="px-4 py-2 user_message_re">
				@Kant：<span>内容</span>
			</p>
		</div>
	</div>
	<div class="m-3">
		<div class="border_shadow user_message_row">
			<div class="row justify-content-between p-3">
				<div class="col-lg col-md col-sm-12">
					<span>Kant</span>&nbsp;私信&nbsp;<span>Jack</span>
				</div>
				<div class="col-lg col-md col-sm-12">
					<span class="pull-right comment">02-17 14:23</span>
				</div>
			</div>
			<div class="row px-4">
				<p class="col user_message_content">这里是私信的内容</p>
			</div>
			<div class="row px-3 pb-1">
				<div class="col-lg col-md col-sm-12 comment">
					回复我的帖子：“<a ui-sref="detail">帖子的名字</a>”
				</div>
				<div class="col-lg col-md col-sm-12">
					<span class="pull-right comment btn"><i
						class="fa fa-comment-o px-2" aria-hidden="true"></i>回复</span>
				</div>
			</div>
		</div>
	</div>
	<form class="container my-5">
		<div class="form-group">
			<textarea class="form-control" placeholder="回复XXX"></textarea>
		</div>
		<button class="btn btn-primary btn-sm pull-right">回复</button>
	</form>
</div>


