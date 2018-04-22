<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>

<!-- 轮播图 -->
<div id="carouselIndicators" class="carousel slide" data-ride="carousel">
	<ol class="carousel-indicators">
		<li data-target="#carouselIndicators" data-slide-to="0" class="active"></li>
		<li data-target="#carouselIndicators" data-slide-to="1"></li>
		<li data-target="#carouselIndicators" data-slide-to="2"></li>
	</ol>
	<div class="carousel-inner">
		<div class="carousel-item active">
			<a href="notice.html"><img class="d-block w-100 index-carousel-item" src="<%=request.getContextPath()%>/img/carousel/carousel1.jpg" alt="First slide" /></a>
			<div class="carousel-caption d-none d-md-block">
				<h3>网站活动</h3>
				<p>这里是有关网站活动的一些信息</p>
			</div>
		</div>
		<div class="carousel-item">
			<a href="notice.html"><img class="d-block w-100 index-carousel-item" src="<%=request.getContextPath()%>/img/carousel/carousel1.jpg" alt="Second slide" /></a>
			<div class="carousel-caption d-none d-md-block">
				<h3>网站活动</h3>
				<p>这里是有关网站活动的一些信息</p>
			</div>
		</div>
		<div class="carousel-item">
			<a href="notice.html"><img class="d-block w-100 index-carousel-item" src="<%=request.getContextPath()%>/img/carousel/carousel1.jpg" alt="Third slide" /></a>
			<div class="carousel-caption d-none d-md-block">
				<h3>网站活动</h3>
				<p>这里是有关网站活动的一些信息</p>
			</div>
		</div>
	</div>
	<a class="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
		<span class="carousel-control-prev-icon" aria-hidden="true"></span>
		<span class="sr-only">Previous</span>
	</a>
	<a class="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
		<span class="carousel-control-next-icon" aria-hidden="true"></span>
		<span class="sr-only">Next</span>
	</a>
</div>
<!-- 轮播图 -->