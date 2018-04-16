<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<nav class="navbar navbar-expand-lg  container-fluid py-3 nav_shadow">
	<!-- bg-light\navbar-light 的设置导致无法改变颜色-->
	<button class="navbar-toggler" type="button" data-toggle="collapse"
		data-target="#navbarSupportedContent">
		<span class="fa fa-reorder"></span>
	</button>
	<a class="navbar-brand " ui-sref="home">Logo</a>

	<div class="collapse navbar-collapse justify-content-between"
		id="navbarSupportedContent">
		<div class="col mx-5">
			<ul class="navbar-nav">
				<li class="nav-item px-1"><a class="nav-link"
					href="<%=request.getContextPath()%>/index/display">主页</a></li>
				<li class="nav-item px-1"><a class="nav-link"
					href="<%=request.getContextPath()%>/skill/release_skill">技能帖</a></li>
				<li class="nav-item px-1"><a class="nav-link"
					href="<%=request.getContextPath()%>/skill/reward_skill">悬赏帖</a></li>
				<li class="nav-item px-1"><a class="nav-link"
					href="<%=request.getContextPath()%>/notice/notice_list">公告栏</a></li>
				<li class="nav-item px-2 py-2"><a class="" ui-sref="search">(搜索)</a>
					<a class="" ui-sref="notice">(公告)</a> <a class="" ui-sref="detail">(技能)</a>
					<a class="" ui-sref="detail_offer">(悬赏)</a> <a class=""
					ui-sref="userInfo">(信息)</a> <c:if
						test="${sessionScope.admin!=null}">
						<a class="" href="<%=request.getContextPath()%>/admin/release_permit">(管理)</a>
					</c:if></li>
			</ul>
		</div>

		<div class="col row justify-content-between">
			<form class="col-lg-6 row">
				<input class="form-control col-8" type="search" placeholder="Search"
					aria-label="Search" data-toggle="collapse"
					data-target="#searchCollapse">
				<button class="btn btn-outline-success col-4" type="submit">Search</button>
				<div class="collapse" id="searchCollapse">
					<ul class="card card-block px-4">
						<li class="py-1"><a href="#">这里是搜索信息1</a></li>
						<li class="py-1"><a href="#">这里是搜索信息2</a></li>
					</ul>
				</div>
			</form>
			<div class="col-lg-6 row">
				<c:choose>
					<c:when test="${sessionScope.tourist!=null}">
						<div class="col-6">
							<a href="/jiyi/user/user_page"><img class="head_img"
								src="<%=request.getContextPath()%>/${sessionScope.tourist.picture}"
								height="35" width="35" /> hi~ 请等待审核 </a>
						</div>
						<a href="/jiyi/user/user_message"><i class="fa fa-envelope-o"></i><span
							class="header_num"><i class="header_icon p-2"></i>1</span></a>
					</c:when>
					<c:when test="${sessionScope.user!=null}">
						<div class="col-6">
							<a href="/jiyi/user/user_page"><img class="head_img"
								src="<%=request.getContextPath()%>/${sessionScope.user.picture}"
								height="35" width="35" /> hi~ ${sessionScope.user.name} </a>
						</div>
						<a href="/jiyi/user/user_message"><i class="fa fa-envelope-o"></i><span
							class="header_num"><i class="header_icon p-2"></i>1</span></a>
					</c:when>
					<c:when test="${sessionScope.admin!=null}">
						<div class="col-lg-2 row justify-content-end">
							<a href="user.html"><img class="head_img"
								src="<%=request.getContextPath()%>/img/kant.jpg" height="35"
								width="35" /></a> <a class="nav-link" href="/jiyi/user/user">
								hi~ ${sessionScope.admin.name}</a>
						</div>
						<a href="/jiyi/user/user_message"><i class="fa fa-envelope-o"></i><span
							class="header_num"><i class="header_icon p-2"></i>1</span></a>
					</c:when>
					<c:otherwise>
						<div class="col-lg-2 row justify-content-end">
							<ul class="navbar-nav">
								<li class="nav-item"><a class="nav-link"
									href="/jiyi/enter/register">注册</a></li>
								<li class="nav-item"><a class="nav-link"
									href="/jiyi/enter/login">登陆</a></li>
							</ul>
						</div>
					</c:otherwise>
				</c:choose>
			</div>
		</div>
	</div>
</nav>