<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
	
<div id="admin_notice" class="border_shadow container  py-4">
    <div class="row justify-content-between admin_user_title mb-3">
        <h3 class="px-4 pb-2">添加公告</h3>
    </div>
    <form class="container" action="do_add_notice" method="post" enctype="multipart/form-data">
        <input type="text" name="nTitle" class="form-control my-3" placeholder="公告题目">
        <textarea type="text" name="nDetails" class="form-control my-3" placeholder="公告内容"></textarea>
         <label class="px-1 comment">* 选择公告图片</label>
            <input id="fileUpload" type="file" name="pictureList" data-show-preview="true" value=""  multiple>
        <button class="btn btn-primary">添加</button>
    </form>
</div>