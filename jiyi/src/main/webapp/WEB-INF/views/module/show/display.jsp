<%@ page language="java" contentType="text/html; charset=utf-8"
         pageEncoding="utf-8" %>
<%@include file="../common/header.jsp" %>
<%@include file="info.jsp" %>

<div class="index-wrapper">

    <!-- 首页导航 -->
    <div class="index-nav">
        <hr>
        <a class="index-nav-item" href="#">首页推荐</a>
        <a class="index-nav-item" href="#">最新发布</a>
        <a class="index-nav-item" href="#">最热上升</a>
        <hr>
    </div>
    <div class="items">
        <%@include file="../common/post-item.jsp" %>
    </div>
    <div class="items-line"></div>

    <!-- 技能贴 -->
    <div class="items-header">
        <div class="items-header-left">
            <span class="items-title">技能贴</span>
            <span class="items-new">新动态</span>
        </div>
        <a href="<%=request.getContextPath()%>/skill/release_skill"><span class="items-more">查看更多></span></a>
    </div>
    <div class="items">
        <%@include file="../common/post-item.jsp" %>
    </div>
    <div class="items-line"></div>

    <!-- 悬赏贴 -->
    <div class="items-header">
        <div class="items-header-left">
            <span class="items-title">悬赏贴</span>
            <span class="items-new">新动态</span>
        </div>
        <a href="<%=request.getContextPath()%>/skill/reward_skill"><span class="items-more">查看更多></span></a>
    </div>
    <div class="items">
        <%@include file="../common/post-item.jsp" %>
    </div>
    <div class="items-line"></div>

</div>
<!--post_skills-->
<%@include file="../common/footer.jsp" %>