<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%> 

<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!DOCTYPE html>
<html lang="en" ng-app="App">
<head>
<meta charset="UTF-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<title>技易网</title>

<script src="<%=path%>/lib/jquery.min.js"></script>
<script src="<%=path%>/lib/jquery.goup.min.js"></script>
<script src="<%=path%>/lib/popper.min.js"></script>
<script src="<%=path%>/lib/bootstrap.min.js"></script>

<script src="<%=path%>/js/user_order.js"></script>
<script src="<%=path%>/js/goup.js"></script>
<link rel="stylesheet" href="<%=path%>/lib/bootstrap.min.css">
<link rel="stylesheet" href="<%=path%>/lib/font-awesome.min.css">

<link rel="stylesheet" href="<%=path%>/css/common.css">
<link rel="stylesheet" href="<%=path%>/css/user.css">
<link rel="stylesheet" href="<%=path%>/css/show.css">
<link rel="stylesheet" href="<%=path%>/css/admin.css">
<link rel="stylesheet" href="<%=path%>/css/skill.css">
<link rel="stylesheet" href="<%=path%>/css/notice.css">
<script type="text/javascript">
	$(document).ready(function() {
		if ("${hasSupport}">0) {
			$("#reward_support").hide();
			$("#rewardSupportTips").show();
		}
	})
</script>
</head>
<body>
	<%@include file="../../module/common/header.jsp"%>
	<div id="detail" class="container-fluid">

		<!--hack block-->
		<div class="p-4"></div>
		<!--hack block-->

		<!--detail_head-->
		<div id="detail_head" class="container py-4 px-5 mb-5">

			<span class="detail_verifier px-2">审核人：${skill.rsAuditor.name}</span>

			<div class="row">

				<!--detail_pic_offer-->
				<div class="detail_pic_offer col-lg-3 col-md-3 col-sm-12">
					<div class="row pt-2 pl-1">
						<span class="col">需要试用： <c:choose>
								<c:when test="${skill.rsNeedTry==1}">
							需要
						</c:when>
								<c:otherwise>
							不需要
						</c:otherwise>
							</c:choose>
						</span>
					</div>
					<div class="row pt-1 pl-1">
						<span class="col">完成期限：${skill.rsTerm}</span>
					</div>
					<div class="row pt-2 pl-1">
						<span class="col">要求地点：${skill.rsPlace}</span>
					</div>
					<div class="row pt-1 pl-1">
						<span class="col">完成目标：${skill.rsTarget}</span>
					</div>
				</div>
				<!--detail_pic-->

				<!--detail_word-->
				<div class="detail_word col py-1 px-5">
					<div class="row px-3 justify-content-between">
						<div>
							<h5 class="d-inline">${skill.rsTitle}</h5>
							<span id="rewardSupportTips" class="detail_truename mx-4"
								style="display:none">已为TA实名</span>
							<button id="reward_support" name="${skill.rsId}"
								class="detail_truename detail_ready mx-4">为TA实名</button>
						</div>
						<div class="detail_buy">
							<a id="accept" name="${skill.rsId}" href="#">接受悬赏</a>
							<!--&nbsp;-->
							<!--<a href="#">试用</a>-->
						</div>
					</div>
					<p class="p-1 detail_detail_offer">${skill.rsDetails}</p>
					<span class="detail_price">悬赏金额：<i class="fa fa-won"></i> <span>${skill.rsCost}</span></span>
					<!--<span class="detail_price px-3">试用：<i class="fa fa-won"></i> <span>100</span></span>-->
					<span class="detail_price pull-right">${skill.rsCreateTime}</span>
					<div class="row px-3 detail_more justify-content-between">
						<div class="row px-3 py-0">
							<span>已有${fn:length(praiseList)}人为他实名：</span> 
							<c:forEach var="praise" items="${praiseList}">
								<img class="detail_user_pic" src="<%=path%>/${praise.pUser.picture}" height="30" width="30" />
							</c:forEach>
						</div>
						<span class="btn p-0 m-0"><i
							class="like_btn fa fa-thumbs-up"></i> 11</span>
					</div>
				</div>
				<!--detail_word-->

				<!--detail_user-->
				<div class="detail_user col-lg-3 col-md-3 col-sm-12">
					<!--<div class="container">-->
					<div class="row py-3">
						<a class="detail_user_pic" ui-sref="userInfo.user_myInfo"> <img
							class="detail_user_pic"
							src="<%=path%>/${skill.rsPublisher.picture}" height="100"
							width="100" />
						</a>
					</div>
					<div class="row">
						<span class="col ml-4">信用：${skill.rsPublisher.credit}</span> <span
							class="col">获赞：17</span>
					</div>
					<div class="row my-2">
						<span class="col ml-4">已发布技能帖：${skill.rsPublisher.releaseNum}</span>
						<span class="col">已悬赏技能帖：${skill.rsPublisher.rewardNum}</span>
					</div>
					<!--<div class="row justify-content-center my-3">-->
					<!--<a href="#">他的其他技能贴：</a>-->
					<!--<span><i class="fa fa-won"></i> <span>100</span></span>-->
					<!--</div>-->
					<!--</div>-->
				</div>
				<!--detail_user-->

			</div>
		</div>
		<!-- detail_head End -->

		<!--detail_comment-->
		<%@include file="../../module/comment/comment_page.jsp"%>
		<!--detail_comment-->

		<!--hack block-->
		<div class="p-5"></div>
		<!--hack block-->
	</div>
	<%@include file="../../module/common/footer.jsp"%>
</body>
</html>