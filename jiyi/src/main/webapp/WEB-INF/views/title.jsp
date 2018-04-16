<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<nav
	class="nav_index navbar navbar-expand-lg navbar-light bg-light container-fluid py-3">

	<button class="navbar-toggler" type="button" data-toggle="collapse"
		data-target="#navbarSupportedContent"
		aria-controls="navbarSupportedContent" aria-expanded="false"
		aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	</button>
	<a class="navbar-brand " ui-sref="home">Logo</a>

	<div class="collapse navbar-collapse" id="navbarSupportedContent">
		<ul class="navbar-nav col-lg-5 offset-lg-1">
			<li class="nav-item px-1"><a class="nav-link" href="index.html">主页</a>
			</li>
			<li class="nav-item px-1"><a class="nav-link"
				href="releases.html">技能\悬赏帖</a></li>
			<li class="nav-item px-1"><a class="nav-link" href="notice.html">（公告）</a></li>
			<li class="nav-item px-1"><a class="nav-link" href="detail.html">（详情）</a></li>
			<c:if test="${sessionScope.admin!=null}">
				<li class="nav-item px-1"><a class="nav-link" href="admin.html">管理</a>
				</li>
			</c:if>
		</ul>

		<form class="my-2 col-lg-3 offset-lg-1 row">
			<input class="form-control col-8" type="search" placeholder="Search"
				aria-label="Search">
			<button class="btn btn-outline-success col-4" type="submit">Search</button>
		</form>

		<c:choose>
			<c:when test="${sessionScope.user!=null}">
				<div class="col-lg-2 row justify-content-end">
					<a href="user.html"><img class="head_img"
						src="<%=request.getContextPath()%>/img/kant.jpg" height="35"
						width="35" /></a> <a class="nav-link" href="/jiyi/user/user">${sessionScope.user.name}，欢迎您</a>
				</div>
			</c:when>
			<c:when test="${sessionScope.admin!=null}">
				<div class="col-lg-2 row justify-content-end">
					<a href="user.html"><img class="head_img"
						src="<%=request.getContextPath()%>/img/kant.jpg" height="35"
						width="35" /></a> <a class="nav-link" href="/jiyi/user/user">管理员
						${sessionScope.admin.name}，欢迎您</a>
				</div>
			</c:when>
			<c:otherwise>
				<div class="col-lg-2 row justify-content-end">
					<a class="nav-link" href="/jiyi/user/login">您好！请登录</a>
				</div>
			</c:otherwise>
		</c:choose>

		<%-- <div class="col-lg-2 row justify-content-end">
			<a href="user.html"><img class="head_img"
				src="<%=request.getContextPath()%>/img/kant.jpg" height="35" width="35" /></a>
			<ul class="navbar-nav">
				<li class="nav-item"><a class="nav-link" href="signup.html">注册</a>
				</li>
				<li class="nav-item"><a class="nav-link" href="login.html">登陆</a>
				</li>
			</ul>
		</div> --%>
	</div>
</nav>