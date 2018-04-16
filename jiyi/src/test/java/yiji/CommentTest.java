package yiji;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.chendi.jiyi.dao.CommentDAO;
import com.chendi.jiyi.entity.Comment;

/**
 * 配置spring和junit整合，为了让junit启动时加载spring IOC容器
 * 
 * @author cd
 */
// 让junit启动时加载spring IOC容器
@RunWith(SpringJUnit4ClassRunner.class)
// 告诉junit spring的配置文件
@ContextConfiguration({ "classpath:spring-dao.xml", "classpath:spring-mvc.xml", "classpath:spring.xml" })
public class CommentTest {

	// 注入dao实现类依赖
	@Resource
	private CommentDAO commentDao;

	@Test
	public void AddComment() {
		Comment comment = new Comment();
//		comment.setnId(1);
//		comment.setuId("1409030240");
		comment.setcDetails("评论2");
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy年MM月dd日 HH:mm:ss");
		comment.setcCreateTime(sdf.format(new Date()));
		commentDao.addComment(comment);
	}

	@Test
	public void testQueryById() throws Exception {
		int nId = 1;
//		List<Comment> list = commentDao.queryByNoticeId(nId);
//		for (Comment comment : list) {
//			System.out.println(comment.toString());
//		}
	}

//	@Test
//	public void testdelete() {
//		Comment comment = new Comment();
//		comment.setnId(1);
//		comment.setnTitle("公告1");
//		comment.setnDetails("公告详情1");
//		SimpleDateFormat sdf = new SimpleDateFormat("yyyy年MM月dd日 HH:mm:ss");
//		comment.setnCreateTime(sdf.format(new Date()));
//		comment.setnPublisher("dishen");
//		comment.setnIsTop(0);
//		commentDao.updateById(comment);
//	}

	@Test
	public void testDelete() {
		commentDao.deleteByCommentId(1);
	}

}
