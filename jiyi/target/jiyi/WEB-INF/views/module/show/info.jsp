<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>

<div id="info" class="container-fluid py-5">
	<div class="container">
		<div id="carouselIndicators" class="carousel slide"
			data-ride="carousel">
			<ol class="carousel-indicators">
				<li data-target="#carouselIndicators" data-slide-to="0"
					class="active limit_show"></li>
				<li data-target="#carouselIndicators" data-slide-to="1"></li>
				<li data-target="#carouselIndicators" data-slide-to="2"></li>
				<li data-target="#carouselIndicators" data-slide-to="3"></li>
			</ol>
			<div id="imgwarp" class="carousel-inner">
				<div class="carousel-item active">
					<img class="d-block w-100 limit_size"
						src="<%=request.getContextPath()%>/img/carousel/carousel1.jpg"
						alt="carousel1">
					<div class="carousel-caption d-none d-md-block">
						<h3>网站活动</h3>
						<p>这里是有关网站活动的一些信息</p>
					</div>
				</div>
				<div class="carousel-item">
					<img class="d-block w-100 limit_size"
						src="<%=request.getContextPath()%>/img/carousel/carousel2.jpg"
						alt="carousel2">
					<div class="carousel-caption d-none d-md-block">
						<h3>校园活动</h3>
						<p>这里是有关校园活动的一些信息</p>
					</div>
				</div>
				<div class="carousel-item">
					<img class="d-block w-100 limit_size"
						src="<%=request.getContextPath()%>/img/carousel/carousel3.jpg"
						alt="carousel3">
					<div class="carousel-caption d-none d-md-block">
						<h3>网站活动</h3>
						<p>这里是有关网站活动的一些信息</p>
					</div>
				</div>
				<div class="carousel-item">
					<img class="d-block w-100 limit_size"
						src="<%=request.getContextPath()%>/img/carousel/carousel4.jpg"
						alt="carousel4">
					<div class="carousel-caption d-none d-md-block">
						<h2>网站活动</h2>
						<p>这里是有关网站活动的一些信息</p>
					</div>
				</div>
			</div>
			<a class="carousel-control-prev" href="#carouselIndicators"
				role="button" data-slide="prev"> <span
				class="carousel-control-prev-icon" aria-hidden="true"></span> <span
				class="sr-only">Previous</span>
			</a> <a class="carousel-control-next" href="#carouselIndicators"
				role="button" data-slide="next"> <span
				class="carousel-control-next-icon" aria-hidden="true"></span> <span
				class="sr-only">Next</span>
			</a>
		</div>
	</div>
</div>