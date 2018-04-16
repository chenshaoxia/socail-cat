<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<%@include file="../common/header.jsp"%>
<div id="notice"
	class="notice_page container-fluid nav_shadow justify-content-center">
	<!-- hack block -->
	<div class="p-2"></div>
	<!-- hack block -->

	<div class="container">

		<!-- notice_plate_nav -->
		<nav class="notice_plate_nav px-1">
			<ol class="breadcrumb notice_plate_nav_inner">
				<li class="breadcrumb-item"><a href="<%=request.getContextPath()%>/index/display">首页</a></li>
				<li class="breadcrumb-item"><a href="notice_list">公告栏</a></li>
				<li class="breadcrumb-item"><a href="#">一个公告</a></li>
			</ol>
		</nav>
		<!-- notice_plate_nav -->

		<div class="row">

			<!-- notice_main -->
			<div id="notice_main"
				class="container px-4 col-lg-9 col-md-9 col-sm-12 mb-4">

				<!-- notice_content -->
				<div class="container">
					<div class="notice_plate_head row pt-5">
						<div class="col px-5 mb-4">
							<div class="row justify-content-between">
								<h4>${notice.nTitle}</h4>
								<div>
									<a href="#"><img
										src="<%=request.getContextPath()%>/img/icon/weixin.png"
										height="24" width="24" /></a> <a href="#"><img
										src="<%=request.getContextPath()%>/img/icon/weibo.png"
										height="24" width="24" /></a>
								</div>
							</div>
							<div class="row notice_plate_sub mt-3 justify-content-between">
								<div>
									<span>创建于： ${notice.nCreateTime}</span> <span>&nbsp;&nbsp;&nbsp;</span>
									<span>浏览 200</span> <span>&nbsp;&nbsp;&nbsp;</span> <span>评论
										17</span>
								</div>
								<span class="btn p-0"><i class="like_btn fa fa-thumbs-up"></i>
									11</span>
							</div>
						</div>
					</div>

					<!--notice_plate_head-->
					<div class="notice_plate_content p-4">
						<h5>小标题</h5>
						<p class="notice_content">${notice.nDetails}</p>
						<c:forEach var="picture" items="${pictureList}">
							<img src="<%=request.getContextPath()%>/${picture.pPath}"
								height="400" width="600" />
						</c:forEach>
					</div>
					<!--notice_plate_content-->

					<!-- notice_comment -->
					<%@include file="../comment/comment_page.jsp" %>
					<!-- notice_comment -->
				</div>
				<!-- notice_content -->
			</div>
			<!-- notice_main -->

			<!-- release_right -->
			<div id="release_right" class="col-lg-3 col-md-3 col-sm-12">
				<div class="notice_hot pb-2">
					<h3 class="release_hot_head px-4 pt-3 pb-1">
						<i class="fa fa-fire"></i>&nbsp;&nbsp;站内热点
					</h3>
					<ul>
						<li><a href="#">这里是一条咨询</a></li>
						<li class="py-1"><a href="#">这里是一条咨询</a></li>
						<li><a href="#">这里是一条咨询</a></li>
						<li class="py-1"><a href="#">这里是一条咨询</a></li>
					</ul>
				</div>
				<div class="notice_contact_us mt-4">
					<h3 class="release_hot_head px-4 pt-3 pb-1">
						<i class="fa fa-telegram"></i>&nbsp;&nbsp;联系我们
					</h3>
					<div class="row pl-5">
						<img src="img/the_old_man.jpg" height="120" width="120"
							class="mr-1" />
						<div class="contact_us_message d-inline pl-4 pt-2">
							<span class="row"><i class="fa fa-user-circle-o pt-1 pr-1"></i>扫码联系客服</span>
							<span class="row pt-1"><i
								class="fa fa-envelope-open pt-1 pr-1"></i>fensi@qq.com</span> <span
								class="row pt-1"><i class="fa fa-phone pt-1 pr-1"></i>110-110-111</span>
							<span class="row pt-1"><i
								class="fa fa-comments-o pt-1 pr-1"></i>客服论坛(建设中)</span>
						</div>
						<div class="contact_us_ad px-1 py-1 my-2">
							<span>羽贝团队 * 持续招新中</span>
						</div>
					</div>
				</div>
			</div>
			<!-- release_right -->
		</div>
	</div>

	<!-- hack block -->
	<div class="p-4"></div>
	<!-- hack block -->
</div>
<%@include file="../common/footer.jsp"%>