/*package yiji;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.chendi.jiyi.dao.LetterDAO;
import com.chendi.jiyi.entity.Letter;

*//**
 * 配置spring和junit整合，为了让junit启动时加载spring IOC容器
 * 
 * @author cd
 *//*
// 让junit启动时加载spring IOC容器
@RunWith(SpringJUnit4ClassRunner.class)
// 告诉junit spring的配置文件
@ContextConfiguration({ "classpath:spring-dao.xml", 
	           			"classpath:spring-mvc.xml",
	           			"classpath:spring.xml"})
public class MessageTest {

	// 注入dao实现类依赖
	@Resource
	private LetterDAO messageDao;
	
	@Test
	public void AddMessage() {
		Letter message = new Letter();
		message.setmSender("dishen");
		message.setmReceiver("1409030240");
		message.setmType(1);
		SimpleDateFormat sdf=new SimpleDateFormat("yyyy年MM月dd日 HH:mm:ss");
		message.setmSendTime(sdf.format(new Date()));
		message.setmContent("消息3，用于测试");
		messageDao.addMessage(message);
	}

	@Test
	public void testQueryById() throws Exception {
		List<Letter> list = messageDao.queryByBothId("1409030239","");
		for(Letter message:list){
			System.out.println(message.toString());
		}
	}

	@Test
	public void updateRead() {
		messageDao.updateRead(1, 1);
	}

}
*/