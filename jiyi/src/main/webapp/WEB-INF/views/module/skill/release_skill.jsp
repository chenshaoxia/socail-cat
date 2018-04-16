<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@include file="../common/header.jsp"%>
<div id="release_skills" class="container-fluid nav_shadow">
	<div id="release_head" class="container-fluid">
		<div class="container">
			<div class="row py-4 justify-content-around">
				<div class="release_logo px-3">
					<span class="release_title pr-3">技能贴</span> <span
						class="release_sub">三人行 必有我师</span>
				</div>
				<div class="px-5 mx-5"></div>
				<div class="px-5 mx-5"></div>
				<span class="release_i_want row nav-link px-3"> <i
					class="fa fa-cog"></i>&nbsp;我要发帖： <a
					href="<%=request.getContextPath()%>/user/user_release">技能</a>&nbsp;&nbsp;<a
					href="<%=request.getContextPath()%>/user/user_reward">悬赏</a>
				</span>
			</div>
		</div>
	</div>
	<div id="release_skill_content" class="container nav_shadow">
		<div class="row pt-3 px-3">
			<div class="release_nav release_nav_large nav container-fluid">
				<span class="nav-link nav-item release_search_head">分类：</span> <a
					class="nav-link nav-item px-3" href="#">全部</a> <a
					class="nav-link nav-item" href="#">球类运动</a> <a
					class="nav-link nav-item" href="#">乐器教学</a> <a
					class="nav-link nav-item" href="#">软件学习</a> <a
					class="nav-link nav-item" href="#">闲置物品</a> <a
					class="nav-link nav-item" href="#">期末辅导</a> <a
					class="nav-link nav-item" href="#">教材考试</a> <a
					class="nav-link nav-item" href="#">街舞指导</a> <a
					class="nav-link nav-item" href="#">强行分类</a> <a
					class="nav-link nav-item" href="#">强行分类</a> <a
					class="nav-link nav-item" href="#">强行分类</a>
			</div>
		</div>
		<hr />
		<div class="row pb-5">
			<!--release_left-->
			<div id="release_left" class="col-12">
				<div id="release_filter"
					class="release_nav nav container-fluid justify-content-between ">
					<div class="row px-3">
						<span class="nav-link px-3 nav-item release_search_head">筛选：</span>
						<a class="nav-link px-3 nav-item" href="#">综合排序</a> <a
							class="nav-link px-3 nav-item" href="#">最新</a> <a
							class="nav-link px-3 nav-item" href="#">最热</a> <a
							class="nav-link px-3 nav-item" href="#">价格↑↓</a>
					</div>
				</div>
				<hr />
				<div class="container-fluid">
					<div class="row">
						<c:forEach var="skill" items="${skillList}">
							<div class="col-lg-3 col-md-4 col-sm-12 my-2">
								<div class="release_item ">
									<div class="row my-3 justify-content-around">
										<h3 class="skill_category_head mt-3">${skill.rsTitle}</h3>
										<div class="skill_category_pic">
											<img src="<%=request.getContextPath()%>/${skill.rsPublisher.picture}" height="50"
												width="50" />
										</div>
									</div>
									<div class="row justify-content-center">
										<p class="skill_category_content col-10">${skill.rsDetails}</p>
									</div>
									<div class="row mb-3 px-1 justify-content-around">
										<span class="skill_thumb"> <i class="fa fa-users">&nbsp;<span>7</span></i>
										</span> <a class="skill_category_link" href="release_details?id=${skill.rsId}">查看详情</a>
									</div>
								</div>
							</div>
						</c:forEach>
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