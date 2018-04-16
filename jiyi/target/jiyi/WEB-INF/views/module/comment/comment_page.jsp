<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>

<script type="text/javascript">
	$(document).ready(function() {
		/*Integer fkId,Integer fkType,String cDetails*/
		function refreshComment(){
			$.ajax({
				type : "get",
				dataType : "html",
				/* contentType : "application/json", */
				url : "../comment/refresh_comment",
				data : {
					fkId : ${commentFkId},
					fkType:${commentFkType},
				},
				success : function(data) {
					$("#detail_comment").html(data)
				},
				error : function(data) {
					alert("错误"+data);
				}
			})
		}
		
		$("#add_comment").click(function() {
			$.ajax({
				type : "post",
				dataType : "json",
				/* contentType : "application/json", */
				url : "../comment/add_comment",
				data : {
					fkId : ${commentFkId},
					fkType:${commentFkType},
					cDetails:$("#comment_text").val()
				},
				success : function(data) {
					/* $("#user_content_cont").html(data); */
					alert(data.msg);
					if(data.nextPage=="../enter/login"){
					 window.location.href = data.nextPage;
					}if(data.refresh=="refresh"){
					 refreshComment();
					 }
				},
				error : function(data) {
					/* alert(data); */
					alert(data.msg);
				}
			})
		});
	})
</script>
<div id="detail_comment" class="container">
	<div class="notice_comment py-4 px-4">
		<div class="notice_comment_header">
			<div class="notice_comment_nav">
				<a href="detail.detail_comment"><h5
						class="d-inline notice_comment_nav_selected">评论</h5></a> <a
					href="detail.detail_leaveword"><h5 class="d-inline mx-4">私信</h5></a>
			</div>
			<a href="#notice_my_comment"><span
				class="pull-right notice_want_comment mr-3">我要评论</span></a>
		</div>
		<hr />
		<div>
			<c:forEach var="comment" items="${commentList}">
				<div class="notice_comment_floor row justify-content-center">
					<div class="col-1 mr-3">
						<img class="notice_comment_floor_pic"
							src="<%=request.getContextPath()%>/${comment.cUser.picture}"
							height="60" width="60" />
					</div>
					<div class="col-10">
						<div class="row justify-content-between px-1">
							<div class="notice_comment_floor_header">
								<a class="px-1" href="#">${comment.cUser.name}</a>
							</div>
							<div>
								<!--<span>#1 楼</span>-->
								<span class="btn p-0"><i class="like_btn fa fa-thumbs-up"></i>
									11</span>
							</div>
						</div>
						<div class="row p-3">${comment.cDetails}</div>
						<div
							class="row justify-content-between notice_comment_floor_footer px-1 mb-2">
							<div>
								<span class="btn px-0">回复</span>
								<span class="btn px-0">举报</span> <span class="btn px-1">${comment.cCreateTime}</span>
							</div>
							<!--<div>-->
							<!--</div>-->
						</div>
						<!--<hr/>-->

						<c:if
							test="${comment.replyList!=null&&fn:length(comment.replyList)>=0}">

							<div class="notice_comment_floor_comment container px-4 py-2">
								<div class="notice_comment_floor row justify-content-center">
									<div class="col">
										<div class="row justify-content-between px-1">
											<div class="notice_comment_floor_header_sub">
												<a class="px-1" href="#">用户名</a> 回复了 <a class="px-1"
													href="#">用户名</a>
											</div>
											<div>
												<!--<span>#1</span>-->
												<span class="btn p-0"><i
													class="like_btn fa fa-thumbs-up"></i> 11</span>
											</div>
										</div>
										<div class="row px-3 py-1">这里是回复的内容</div>
										<div
											class="row justify-content-between notice_comment_floor_footer px-1">
											<div class="d-inline">
												<span class="btn px-0">&nbsp;回复</span> <span
													class="btn px-0">举报</span> <span class="btn px-1">${comment.cCreateTime}</span>
											</div>
											<div></div>
										</div>
										<!--<hr/>-->
										<a
											class="comment_floor_more pull-right mb-0 comment_floor_more_top"
											data-toggle="collapse" href="#comment_floor_morethings">
											查看全部<span>11</span>条回复 >
										</a>
										<div id="comment_floor_morethings"
											class="collapse row px-3 mt-2">
											<div class="notice_comment_floor row justify-content-center">
												<div class="col">
													<div class="row px-1 justify-content-between">
														<div class="notice_comment_floor_header_sub">
															<a class="px-1" href="#">用户名</a> 回复了 <a class="px-1"
																href="#">用户名</a>
														</div>
														<div>
															<!--<span>#1</span>-->
															<span class="btn p-0"><i
																class="like_btn fa fa-thumbs-up"></i> 11</span>
														</div>
													</div>
													<div class="row px-3 py-1">这里是回复的内容</div>
													<div
														class="row justify-content-between notice_comment_floor_footer px-1">
														<div class="d-inline">
															<span class="btn px-0">&nbsp;回复</span> <span
																class="btn px-0">举报</span> <span class="btn px-1">2
																天前</span>
														</div>
														<div></div>
													</div>
													<p
														class="comment_floor_more pull-right mb-0 d-inline comment_floor_more_bottom"
														data-toggle="collapse" href="#comment_floor_morethings">收起回复</p>
													<a class="comment_floor_more pull-right mb-0 px-3 d-inline"
														data-toggle="collapse" href="#comment_floor_mythings">我也说一句</a>
													<form class="collapse" id="comment_floor_mythings">
														<div class="form-group mb-1">
															<textarea class="form-control mt-2" rows="1"
																placeholder="我想说..."></textarea>
														</div>
														<button type="submit"
															class="btn btn-primary btn-sm pull-right">发表</button>
													</form>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

						</c:if>
					</div>
				</div>
			</c:forEach>
		</div>
		<!--notice_comment_floor-->
		<div id="notice_my_comment" class="row justify-content-center mt-5">
			<div class="col-1 mr-3">
				<img class="notice_comment_floor_pic pull-right" src="img/kant.jpg"
					height="60" width="60" />
			</div>
			<div class="col-10">
				<%-- <form action="<%=request.getContextPath()%>/comment/addComment"> --%>
				<div class="form-group">
					<textarea id="comment_text" class="form-control" rows="3"
						placeholder="扯淡、吐槽想说啥说啥！"></textarea>
				</div>
				<button id="add_comment" type="button"
					class="btn btn-primary pull-right">发表评论</button>
				<!-- </form> -->
			</div>
		</div>
	</div>
</div>
