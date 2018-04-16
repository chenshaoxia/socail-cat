package yiji;

import java.text.SimpleDateFormat;
import java.util.Date;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.chendi.jiyi.dao.NoticeDAO;
import com.chendi.jiyi.entity.Notice;

/**
 * 配置spring和junit整合，为了让junit启动时加载spring IOC容器
 * 
 * @author cd
 */
// 让junit启动时加载spring IOC容器
@RunWith(SpringJUnit4ClassRunner.class)
// 告诉junit spring的配置文件
@ContextConfiguration({ "classpath:spring-dao.xml", 
	           			"classpath:spring-mvc.xml",
	           			"classpath:spring.xml"})
public class NoticeTest {

	// 注入dao实现类依赖
	@Resource
	private NoticeDAO noticeDao;
	
	@Test
	public void AddNotice() {
		Notice notice = new Notice();
		notice.setnId(1);
		notice.setnTitle("公告1");
		notice.setnDetails("公告详情1");
		SimpleDateFormat sdf=new SimpleDateFormat("yyyy年MM月dd日 HH:mm:ss");
		notice.setnCreateTime(sdf.format(new Date()));
		notice.setnPublisher("dishen");
		notice.setnIsTop(1);
		noticeDao.addNotice(notice);
	}

	@Test
	public void testQueryById() throws Exception {
		int id = 1;
		Notice notice = noticeDao.queryById(id);
		System.out.println(notice.toString());
	}

	@Test
	public void testUpdate() {
		Notice notice = new Notice();
		notice.setnId(1);
		notice.setnTitle("公告1");
		notice.setnDetails("公告详情1");
		SimpleDateFormat sdf=new SimpleDateFormat("yyyy年MM月dd日 HH:mm:ss");
		notice.setnCreateTime(sdf.format(new Date()));
		notice.setnPublisher("dishen");
		notice.setnIsTop(0);
		noticeDao.updateById(notice);
	}

	@Test
	public void testDelete(){
		noticeDao.deleteById(1);
	}

}
