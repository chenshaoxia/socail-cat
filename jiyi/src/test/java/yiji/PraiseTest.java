package yiji;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.chendi.jiyi.dao.PraiseDAO;
import com.chendi.jiyi.service.PraiseService;

/**
 * 配置spring和junit整合，为了让junit启动时加载spring IOC容器
 * 
 * @author cd
 */
// 让junit启动时加载spring IOC容器
@RunWith(SpringJUnit4ClassRunner.class)
// 告诉junit spring的配置文件
@ContextConfiguration({ "classpath:spring-dao.xml", "classpath:spring-mvc.xml", "classpath:spring.xml" })
public class PraiseTest {

	// 注入dao实现类依赖
	@Resource
	private PraiseDAO praiseDao;

	@Autowired 
	private PraiseService praiseService;
	@Test
	public void AddPraise() {
//		Praise praise = new Praise();
//		praise.setuId("1409030239");
//		praise.setFkCategory(Category.COMMENT);
//		praise.setFkId(3);
//		praiseDao.addPraise(praise);
//		praiseService.addPraise("1409030240", 6, 3);
	}
}
