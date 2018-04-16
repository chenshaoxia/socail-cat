<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<%@include file="../common/header.jsp"%>
<div id="release_skills" class="container-fluid nav_shadow">
	<div id="release_head" class="container-fluid">
		<div class="container">
			<div class="row py-4 justify-content-around">
				<div class="release_logo px-3">
					<span class="release_title pr-3">公告栏</span> <span
						class="release_sub">有趣的校园活动都在这里！</span>
				</div>
				<!--<div class="px-5 mx-5"></div><div class="px-5 mx-5"></div>-->
				<!--<span class="release_i_want row nav-link px-3">-->
				<!--<i class="fa fa-cog"></i>&nbsp;我要发帖：-->
				<!--<a ui-sref="user.user_upload">技能</a>&nbsp;&nbsp;<a ui-sref="user.user_post">悬赏</a>-->
				<!--</span>-->
			</div>
		</div>
	</div>
	<div id="release_skill_content" class="container nav_shadow">
		<!--<div class="row pt-3 px-3">-->
		<!--<div class="release_nav release_nav_large nav container-fluid">-->
		<!--<span class="nav-link nav-item release_search_head">分类：</span>-->
		<!--<a class="nav-link nav-item px-3" href="#">全部</a>-->
		<!--<a class="nav-link nav-item" href="#">球类运动</a>-->
		<!--<a class="nav-link nav-item" href="#">乐器教学</a>-->
		<!--<a class="nav-link nav-item" href="#">软件学习</a>-->
		<!--<a class="nav-link nav-item" href="#">闲置物品</a>-->
		<!--<a class="nav-link nav-item" href="#">期末辅导</a>-->
		<!--<a class="nav-link nav-item" href="#">教材考试</a>-->
		<!--<a class="nav-link nav-item" href="#">街舞指导</a>-->
		<!--<a class="nav-link nav-item" href="#">强行分类</a>-->
		<!--<a class="nav-link nav-item" href="#">强行分类</a>-->
		<!--<a class="nav-link nav-item" href="#">强行分类</a>-->
		<!--</div>-->
		<!--</div>-->
		<!--<hr />-->
		<div class="row pb-5 pt-3">
			<!--release_left-->
			<div id="release_left" class="col-12">
				<div id="release_filter"
					class="release_nav nav container-fluid justify-content-between ">
					<div class="row px-3">
						<span class="nav-link px-3 nav-item release_search_head">筛选：</span>
						<a class="nav-link px-3 nav-item" href="#">综合排序</a> <a
							class="nav-link px-3 nav-item" href="#">最新</a> <a
							class="nav-link px-3 nav-item" href="#">最热</a>
						<!--<a class="nav-link px-3 nav-item" href="#">价格↑↓</a>-->
					</div>
				</div>
				<hr />
				<div class="container-fluid">
					<div class="row">
						<!--notice-->
						<c:forEach var="notice" items="${noticeList}">
							<div class="col-lg-4 col-md-6 col-sm-12">
								<div class="notice border_shadow px-5 py-4 my-3">
									<div class="notice_head row justify-content-between mb-3">
										<h5>${notice.nTitle}</h5>
										<img src="#" height="60" width="60" />
									</div>
									<div class="notice_content row mb-3">
										<p>${notice.nDetails}</p>
									</div>
									<div class="notice_foot row justify-content-between">
										<div>
											<span>浏览 200</span> <span>&nbsp;&nbsp;&nbsp;</span> <span>评论
												17</span>
										</div>
										<div>
											<span><a href="notice_details?id=${notice.nId}">了解详情—></a></span>
										</div>
									</div>
								</div>
							</div>
						</c:forEach>
						<!--notice-->
					</div>
				</div>
				<!-- container-fluid End -->
			</div>
			<!-- release_left End -->

		</div>
	</div>
	<div class="container-fluid p-5"></div>
</div>
<%@include file="../common/footer.jsp"%>