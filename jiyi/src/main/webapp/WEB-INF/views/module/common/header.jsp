<%@ page language="java" contentType="text/html; charset=utf-8"
         pageEncoding="utf-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<div class="header-container">
    <header class="header">
        <img class="header-logo" src="<%=request.getContextPath()%>/img/logo.png"/>

        <div class="header-nav">
            <a href="<%=request.getContextPath()%>/index/display" class="header-nav-item">主页</a>
            <a href="<%=request.getContextPath()%>/skill/release_skill" class="header-nav-item">技能贴</a>
            <a href="<%=request.getContextPath()%>/skill/reward_skill" class="header-nav-item">悬赏贴</a>
            <a href="<%=request.getContextPath()%>/notice/notice_list" class="header-nav-item">公告栏</a>
            <c:if test="${sessionScope.admin!=null}">
                <a href="<%=request.getContextPath()%>/admin/release_permit" class="header-nav-item">管理</a>
            </c:if>
        </div>

        <div class="header-search">
            <input type="search" placeholder="search" class="header-search-input" id="header-search-input"/>
            <i class="fa fa-search header-search-icon" id="header-search-icon"></i>
        </div>

        <div class="header-user">
            <c:choose>
                <c:when test="${sessionScope.tourist!=null}">
                    <a href="/jiyi/user/user_message" class="header-user-message">
                        <i class="fa fa-bell-o header-user-message-bell">
                            <span class="header-user-message-bell-count">11</span>
                        </i>
                    </a>
                    <a href="/jiyi/user/user_page">
                        <img class="header-user-img"
                             src="<%=request.getContextPath()%>/${sessionScope.tourist.picture}"/>
                        hi~ 请等待审核
                    </a>
                </c:when>
                <c:when test="${sessionScope.user!=null}">
                    <a href="/jiyi/user/user_message" class="header-user-message">
                        <i class="fa fa-bell-o header-user-message-bell">
                            <span class="header-user-message-bell-count">11</span>
                        </i>
                    </a>
                    <a href="/jiyi/user/user_page">
                        <img class="header-user-img"
                             src="<%=request.getContextPath()%>/${sessionScope.user.picture}"/>
                        hi~ ${sessionScope.user.name}
                    </a>
                </c:when>
                <c:when test="${sessionScope.admin!=null}">
                    <a href="/jiyi/user/user_message" class="header-user-message">
                        <i class="fa fa-bell-o header-user-message-bell">
                            <span class="header-user-message-bell-count">11</span>
                        </i>
                    </a>
                    <a href="user.html">
                        <img class="header-user-img"
                             src="<%=request.getContextPath()%>/img/kant.jpg"/>
                    </a>
                    <a class="nav-link" href="/jiyi/user/user">hi~ ${sessionScope.admin.name}</a>
                </c:when>

                <c:otherwise>
                    <a href="/jiyi/enter/login" class="header-user-login">登录</a>
                    <a href="/jiyi/enter/register" class="header-user-login">注册</a>
                </c:otherwise>

            </c:choose>

        </div>
    </header>
</div>