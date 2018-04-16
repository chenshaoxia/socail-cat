<#assign ctx=request.contextPath />
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>技能贴</title>
    <link rel="stylesheet" href="${ctx}/styles/reset.css">
    <link rel="stylesheet" href="${ctx}/styles/font-awesome.min.css">
    <link rel="stylesheet" href="${ctx}/styles/shared.css">
    <link rel="stylesheet" href="${ctx}/styles/index.css">
    <link rel="stylesheet" href="${ctx}/styles/skills.css">
    <script src="${ctx}/lib/jquery.min.js"></script>
    <script src="${ctx}/js/index.js"></script>
</head>
<body>
<header>
    <div class="header-container">
        <img class="header-logo" src="../images/logo.png" height="66" width="158"/>
        <div class="header-nav">
            <a href="index.html">主页</a>
            <a href="post-skills.html">技能贴</a>
            <a href="reward-skills.html">悬赏贴</a>
        </div>
        <div class="header-search">
            <input type="search" placeholder="search" />
            <i class="fa fa-search"></i>
        </div>
        <div class="header-uesr">
            <a href="message-info.html"><i class="fa fa-bell-o"></i></a>
            <a href="user.html"><img class="header-head" src="../images/stupid.jpg" /></a>
        </div>
        <div class="header-post">
            <a href="login.html"><i class="fa fa-send fa-3x"></i></a>
            <!--<span>发帖</span>-->
        </div>
    </div>
</header>


<div class="skills-header">
    <span class="skills-title"><span class="skills-line"></span>技能<span class="skills-line"></span></span>
    <div class="skills-cate">
        <a href="#" style="color:rgb(240, 129, 129);">全部</a>
        <a href="#">球类运动</a>
        <a href="#">乐器教学</a>
        <a href="#">软件学习</a>
        <a href="#">闲置物品</a>
        <a href="#">期末辅导</a>
        <a href="#">教材考试</a>
        <a href="#">街舞指导</a>
        <a href="#">强行分类</a>
    </div>
    <div class="skills-filter">
        <a href="#" style="color: #101010">精选</a>
        <a href="#">最新</a>
        <a href="#">最热</a>
        <a href="#">价格↑↓</a>
    </div>
</div>


<div class="index-wrapper">
<div class="items">
    <a href="post-detail.html">
    <div class="item-wrapper">
        <div class="item-img"></div>
        <div class="item-message">
            <div class="item-message-top">
                <span class="item-title">技能标题</span>
                <span class="item-like"><i class="fa fa-thumbs-o-up ">&nbsp;</i>11</span>
            </div>
            <div class="item-message-bottom">
                <span class="item-cate">类别</span>
            </div>
        </div>
        <div class="item-footer">
            <div class="item-footer-left">
                <img class="item-head" src="images/stupid.jpg" />
                <span class="item-name">Kant</span>
            </div>
            <span class="item-time">六小时前</span>
        </div>
    </div>
    </a>
    <!--item-wrapper-->
</div>
<!--items-->
</div>
</body>
</html>