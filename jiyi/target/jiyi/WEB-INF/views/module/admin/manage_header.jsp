<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<div id="user_content_nav" class="user_content_nav_admin container pb-4">
	<div class="nav nav-pills flex-row flex-row border_shadow">
		<a class="nav-link" href="release_permit"> <i
			class="fa fa-paw fa-2x m-1"></i>
			<div class="w-100"></div> 技能许可
		</a> <a class="nav-link" id="reward_permit" href="reward_permit"> <i
			class="fa fa-krw fa-2x m-1"></i>
			<div class="w-100"></div> 悬赏许可
		</a> <a class="nav-link" href="user_permit" > <i
			class="fa fa-user-plus fa-2x m-1"></i>
			<div class="w-100"></div> 用户认证
		</a> <a class="nav-link"></a> <a class="nav-link" id="release_manage"
			href="#"> <i class="fa fa-file fa-2x m-1"></i>
			<div class="w-100"></div> 技能管理
		</a> <a class="nav-link" id="reward_manage" href="#"> <i
			class="fa fa-file-text fa-2x m-1"></i>
			<div class="w-100"></div> 悬赏管理
		</a> <a class="nav-link" id="user_manage" href="#"> <i
			class="fa fa-users fa-2x m-1"></i>
			<div class="w-100"></div> 用户管理
		</a> <a class="nav-link"></a> <a class="nav-link" id="notice_manage"
			href="#"> <i class="fa fa-list-alt fa-2x m-1"></i>
			<div class="w-100"></div> 公告管理
		</a> <a class="nav-link" id="add_notice" href="add_notice" href="#"> <i
			class="fa fa-newspaper-o fa-2x m-1"></i>
			<div class="w-100"></div> 添加公告
		</a>
		<!--<hr/>-->
		<a class="nav-link" id="dispute_manage" href="#"> <i
			class="fa fa-warning fa-2x m-1"></i>
			<div class="w-100"></div> 争议处理
		</a>

		<div class="col">
			<a class=" disabled" href="admin.admin_upload_more"
				href="#!/admin/admin_upload_more">技能许可\</a> <a class=" disabled"
				href="admin.admin_upload_offer_more"
				href="#!/admin/admin_upload_offer_more">悬赏许可\</a> <a
				class=" disabled" href="admin.admin_auth_more"
				href="#!/admin/admin_auth_more">认证详情</a>
			<div class="w-100"></div>
			<a class=" disabled" href="admin.admin_post_more"
				href="#!/admin/admin_post_more">技能详情\</a> <a class=" disabled"
				href="admin.admin_offer_more" href="#!/admin/admin_offer_more">悬赏详情\</a>
			<a class=" disabled" href="admin.admin_user_more"
				href="#!/admin/admin_user_more">用户详情</a>
			<div class="w-100"></div>
			<a class=" disabled" href="admin.admin_notice_more"
				href="#!/admin/admin_notice_more">公告详情\</a> <a class=" disabled"
				href="admin.admin_judge_more" href="#!/admin/admin_judge_more">申诉详情</a>
		</div>
	</div>
</div>