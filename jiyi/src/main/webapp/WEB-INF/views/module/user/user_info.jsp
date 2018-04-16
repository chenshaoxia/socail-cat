<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>

<div id="user_info" class="border_shadow container p-4">
    <h3 class="skill_title pb-3" data-toggle="modal" data-target="#edit_user">
        个人资料
        <!-- <a class="skill_title_edit px-3" ui-sref=".user_message">编辑</a> -->
    </h3>
    <!-- <div class="modal fade" id="edit_user" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="myModalLabel">编辑资料</h4>
                </div>
                modal-header
                <div class="modal-body">
                    <form>
                        <div class="input-group my-3">
                            <input type="text" class="form-control" placeholder="学号">
                        </div>
                        <div class="input-group my-3">
                            <input type="text" class="form-control" placeholder="真实姓名">
                        </div>
                        <div class="input-group my-3">
                            <input type="password" class="form-control" placeholder="密码">
                        </div>
                        <div class="input-group my-3">
                            <div class="input-group-prepend">
                                <div class="input-group-text">@</div>
                            </div>
                            <input type="email" class="form-control" placeholder="电子邮箱">
                        </div>
                        <div class="input-group my-3">
                            <input type="text" class="form-control" placeholder="手机号">
                            <div class="input-group-prepend">
                                <div class="input-group-text">+86</div>
                            </div>
                        </div>
                        <div class="input-group my-3">
                            <input type="text" class="form-control" placeholder="QQ">
                        </div>
                        <fieldset class="form-group">
                            <label for="genderSelect">性别</label>
                            <select class="form-control" id="genderSelect">
                                <option>不公开性别</option>
                                <option>男</option>
                                <option>女</option>
                            </select>
                        </fieldset>
                        <fieldset class="form-group">
                            <select class="form-control" id="academy">
                                <option>不公开学院</option>
                                <option>经济学院</option>
                                <option>统数学院</option>
                            </select>
                        </fieldset>
                        <fieldset class="form-group">
                            <select class="form-control" id="major">
                                <option>不公开专业</option>
                                <option>民商法</option>
                                <option>边管</option>
                            </select>
                        </fieldset>
                        <div class="form-group">
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" id="validatedCustomFile1" required>
                                <label class="custom-file-label" for="validatedCustomFile1">修改头像</label>
                            </div>
                        </div>
                    </form>
                </div>
                modal-body
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary">保存</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">关闭</button>
                </div>
                modal-footer
            </div>
            modal-content
        </div>
    </div> -->
    <!--modal-->
    <div class="col-lg-10 offset-lg-1">
        <div class="text-center">
            <table class="table table-bordered">
                <thead>
                <tr>
                    <th>项目</th>
                    <th>内容</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">学号</th>
                    <td>${sessionScope.user.id}</td>
                </tr>
                <tr>
                    <th scope="row">姓名</th>
                    <td>${sessionScope.user.name}</td>
                </tr>
                <%-- <tr>
                    <th scope="row">密码</th>
                    <td>${sessionScope.user.picture}</td>
                </tr> --%>
                <tr>
                    <th scope="row">邮箱</th>
                    <td>${sessionScope.user.email}</td>
                </tr>
                <tr>
                    <th scope="row">手机</th>
                    <td>${sessionScope.user.phone}</td>
                </tr>
                <tr>
                    <th scope="row">QQ</th>
                    <td>${sessionScope.user.qq}</td>
                </tr>
                <tr>
                    <th scope="row">性别</th>
                    <td>${sessionScope.user.sex}</td>
                </tr>
                <tr>
                    <th scope="row">学院</th>
                    <td>${sessionScope.user.institute}</td>
                </tr>
                <tr>
                    <th scope="row">专业</th>
                    <td>${sessionScope.user.specialty}</td>
                </tr>
               <!--  <tr>
                    <th scope="row">头像</th>
                    <td><img src="img/kant.jpg" height="16" width="16"/></td>
                </tr> -->
                <tr>
                    <th scope="row">状态</th>
                    <c:choose>
                    	<c:when test="${sessionScope.user.status==0}">
                    		 <td>等待管理员审核中...</td>
                    	</c:when>
                    	<c:when test="${sessionScope.user.status==1}">
                    		 <td>正常</td>
                    	</c:when>
                    </c:choose>
                </tr>
                <tr>
                    <th scope="row">信用</th>
                    <td>${sessionScope.user.credit}</td>
                </tr>
                <tr>
                    <th scope="row">喵币</th>
                    <td>${sessionScope.user.wealth}</td>
                </tr>
                <tr>
                    <th scope="row">已发布的技能贴</th>
                    <td>${sessionScope.user.releaseNum}</td>
                </tr>
                <tr>
                    <th scope="row">已发布的悬赏帖</th>
                    <td>${sessionScope.user.rewardNum}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
<!--user_edit-->
