/*package yiji;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import com.chendi.jiyi.Enum.ReleaseSkillStatus;
import com.chendi.jiyi.dao.ReleaseSkillDAO;
import com.chendi.jiyi.entity.ReleaseSkill;
import com.chendi.jiyi.entity.User;
import com.chendi.jiyi.service.ReleaseSkillService;

//让junit启动时加载spring IOC容器
@RunWith(SpringJUnit4ClassRunner.class)
// 告诉junit spring的配置文件
@ContextConfiguration({ "classpath:spring-dao.xml", "classpath:spring-mvc.xml", "classpath:spring.xml" })
@WebAppConfiguration
public class ReleaseSkillTest {

	@Resource
	private ReleaseSkillDAO skillDAO;
	
	@Autowired
	private ReleaseSkillService rsService;
	@Test
	public void addReleaseSkillTest() {
		ReleaseSkill skill = new ReleaseSkill();
		skill.setRsTitle("测试2");
		skill.setRsDetails("测试2");
		User user=new User();
		user.setId("1409030239");
		skill.setRsPublisher(user);
//		skill.setRsBuyer("1409030240");
		skill.setRsCreateTime("测试2");
//		skill.setRsCategory("测试2");
		skill.setRsClassNum(20);
		skill.setRsClassTime(4);
		skill.setRsPlace("测试2");
		skill.setRsTarget("测试2");
		skill.setRsTerm("测试2");
		skill.setRsPersonalDescribe("测试2");
//		skill.setRsCost(100);
		skill.setRsCanTry(0);
		skill.setRsTryClassNum(0);
//		skill.setRsTryCost(10);
		skill.setRsPraise(0);
		skill.setRsStatus(0);
		skill.setRsAuditor(null);
		skillDAO.addReleaseSkill(skill);
	}
	
	@Test
	public void queryTest(){
		ReleaseSkill skill=skillDAO.queryById(1);
		System.err.println(skill.toString());
	}
	
	@Test
	public void queryAllTest(){
		List<ReleaseSkill> list=new ArrayList<ReleaseSkill>();
		list=skillDAO.queryAll();
		for(ReleaseSkill skill:list){
			System.out.println(skill.toString());
		}
	}
	
	@Test
	public void auditingTest(){
		System.out.println(skillDAO.auditing(1, 1, 300,20, "dishen"));
	}
	
	@Test
	public void updateCoverTest(){
		System.out.println(skillDAO.updateCover(47, "xxx"));
	}
	
	@Test
	public void buyTest(){
//		System.out.println(skillDAO.buyOrTry(1, 2, "1409030239"));
		try {
//			System.out.println(rsService.buyOrTry(1, ReleaseSkillStatus.BE_SOLD, "1409030239"));
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
}
*/