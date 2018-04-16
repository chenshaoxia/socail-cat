<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@include file="../common/header.jsp"%>
<%@include file="info.jsp"%>

<!--classified_nav-->
<div id="classified_nav" class="container-fluid py-3 plate_shadow">
    <div class="container mb-5">
        <div class="row my-3 justify-content-center">
            <h3 class="classified_nav_head">
                <i class="fa fa-anchor mx-3 blue_icon"></i>
                分<span class="head_divid"> / </span>类<span class="head_divid"> / </span>导<span
                    class="head_divid"> / </span>航
                <i class="fa fa-anchor mx-3 blue_icon"></i>
            </h3>
        </div>
        <div class="row my-2">
            <a class="classified_nav_item border_shadow col classified_nav_img3" href="#notices">公告墙</a>
            <a class="classified_nav_item border_shadow col classified_nav_img1" href="#show_skills">技能贴</a>
        </div>
        <div class="row my-2">
            <a class="classified_nav_item border_shadow col classified_nav_img2" href="#post_skills">悬赏帖</a>
            <a class="classified_nav_item border_shadow col classified_nav_img4" ui-sref="user.user_my_skill">我的技能</a>
        </div>
    </div>
</div>
<!--classified_nav-->

<!--notices-->
<div id="notices" class="notices_plate container-fluid py-3">
    <div class="row my-3 justify-content-center">
        <a href="#">
            <h3 class="classified_nav_head">
                <i class="fa fa-window-restore mx-3 blue_icon"></i> 公<span class="head_divid"> / </span>告<span class="head_divid"> / </span>墙<i class="fa fa-window-restore mx-3 blue_icon"></i>
            </h3>
        </a>
    </div>
    <div class="notices container pb-5">
        <div class="row">
            <div class="notice border_shadow col-lg-4 col-md-6 px-5 py-4">
                <div class="notice_head row justify-content-between mb-3">
                    <h5># 公告题目</h5>
                    <img src="img/kant.jpg" height="60" width="60"/>
                </div>
                <div class="notice_content row mb-3">
                    <p>这里是公告的内容，我觉得这样更好看，可以把最新的公告置顶</p>
                </div>
                <div class="notice_foot row justify-content-between">
                    <div>
                        <span>浏览 200</span>
                        <span>&nbsp;&nbsp;&nbsp;</span>
                        <span>评论 17</span>
                    </div>
                    <div>
                        <span><a ui-sref="notice">了解详情—></a></span>
                    </div>
                </div>
            </div><!-- a notice End-->
        </div><!-- notice_row End-->
        <p class="py3"><a ui-sref="notices" class="show_skill_more">查看更多<i class="fa fa-arrow-circle-right ml-1"></i></a></p><hr />
    </div><!-- notices End -->
</div><!-- notices_plate End-->
<!--notices-->

<!--classified_nav-->
<div id="show_skills" class="skill_category container-fluid py-3">
    <div class="container">
        <div class="row my-3 justify-content-center">
            <a ui-sref="releases">
                <h3 class="classified_nav_head" id="skill_category_1">
                    <i class="fa fa-child mx-3 purple_icon"></i> 技<span class="head_divid"> / </span>能<span class="head_divid"> / </span>贴<i class="fa fa-child mx-3 purple_icon"></i>
                </h3>
            </a>
        </div>
        <div class="row my-2">
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="skill_category_item border_shadow">
                    <div class="row my-3 justify-content-around">
                        <h3 class="skill_category_head mt-3">【类别】技能标题</h3>
                        <div class="skill_category_pic"><img src="img/kant.jpg" height="50" width="50"/></div>
                    </div>
                    <div class="row justify-content-center">
                        <p class="skill_category_content col-10">这里是一大堆有的没的的技能介绍，我会的不会的都在这里</p>
                    </div>
                    <div class="row my-3 justify-content-around">
                        <span class="skill_thumb">
                            <i class="fa fa-thumbs-up">&nbsp;<span>11</span></i>
                            <i class="fa fa-users px-3">&nbsp;<span>7</span></i>
                        </span>
                        <a class="skill_category_link" ui-sref="detail">查看详情</a>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="skill_category_item border_shadow">
                    <div class="row my-3 justify-content-around">
                        <h3 class="skill_category_head mt-3">【类别】技能标题</h3>
                        <div class="skill_category_pic"><img src="img/kant.jpg" height="50" width="50"/></div>
                    </div>
                    <div class="row justify-content-center">
                        <p class="skill_category_content col-10">这里是一大堆有的没的的技能介绍，我会的不会的都在这里</p>
                    </div>
                    <div class="row my-3 justify-content-around">
                        <span class="skill_thumb">
                            <i class="fa fa-thumbs-up">&nbsp;<span>11</span></i>
                            <i class="fa fa-users px-3">&nbsp;<span>7</span></i>
                        </span>
                        <a class="skill_category_link" ui-sref="detail">查看详情</a>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="skill_category_item border_shadow">
                    <div class="row my-3 justify-content-around">
                        <h3 class="skill_category_head mt-3">【类别】技能标题</h3>
                        <div class="skill_category_pic"><img src="img/kant.jpg" height="50" width="50"/></div>
                    </div>
                    <div class="row justify-content-center">
                        <p class="skill_category_content col-10">这里是一大堆有的没的的技能介绍，我会的不会的都在这里</p>
                    </div>
                    <div class="row my-3 justify-content-around">
                        <span class="skill_thumb">
                            <i class="fa fa-thumbs-up">&nbsp;<span>11</span></i>
                            <i class="fa fa-users px-3">&nbsp;<span>7</span></i>
                        </span>
                        <a class="skill_category_link" ui-sref="detail">查看详情</a>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="skill_category_item border_shadow">
                    <div class="row my-3 justify-content-around">
                        <h3 class="skill_category_head mt-3">【类别】技能标题</h3>
                        <div class="skill_category_pic"><img src="img/kant.jpg" height="50" width="50"/></div>
                    </div>
                    <div class="row justify-content-center">
                        <p class="skill_category_content col-10">这里是一大堆有的没的的技能介绍，我会的不会的都在这里</p>
                    </div>
                    <div class="row my-3 justify-content-around">
                        <span class="skill_thumb">
                            <i class="fa fa-thumbs-up">&nbsp;<span>11</span></i>
                            <i class="fa fa-users px-3">&nbsp;<span>7</span></i>
                        </span>
                        <a class="skill_category_link" ui-sref="detail">查看详情</a>
                    </div>
                </div>
            </div>
        </div>
        <p class="py-3"><a ui-sref="releases" class="show_skill_more">查看更多<i class="fa fa-arrow-circle-right ml-1"></i></a></p><hr />
    </div>
</div>
<!--show_skills-->

<div id="post_skills" class="post_plate container-fluid py-3 plate_shadow">
    <div class="skill_category container">
        <div class="row my-3 justify-content-center">
            <a ui-sref="releases">
                <h3 class="classified_nav_head" id="skill_category_2">
                    <i class="fa fa-blind mx-3 purple_icon"></i> 悬<span class="head_divid"> / </span>赏<span class="head_divid"> / </span>帖<i class="fa fa-blind mx-3 purple_icon trans"></i>
                </h3>
            </a>
        </div>
        <div class="row my-2">
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="skill_category_item border_shadow">
                    <div class="row my-3 justify-content-around">
                        <h3 class="skill_category_head mt-3">技能标题</h3>
                        <div class="skill_category_pic"><img src="img/kant.jpg" height="50" width="50"/></div>
                    </div>
                    <div class="row justify-content-center">
                        <p class="skill_category_content col-10">这里是一大堆有的没的的技能介绍，我会的不会的都在这里</p>
                    </div>
                    <div class="row my-3 justify-content-around">
                        <span class="skill_thumb">
                            <i class="fa fa-thumbs-up">&nbsp;<span>11</span></i>
                            <i class="fa fa-users px-4">&nbsp;<span>7</span></i>
                        </span>
                        <a class="skill_category_link" ui-sref="detail">查看详情</a>
                    </div>
                </div>
            </div>
        </div>
        <p class="py-3"><a ui-sref="releases" class="show_skill_more">查看更多<i class="fa fa-arrow-circle-right ml-1"></i></a></p><hr />
    </div>
</div>
<!--post_skills-->
<%@include file="../common/footer.jsp"%>