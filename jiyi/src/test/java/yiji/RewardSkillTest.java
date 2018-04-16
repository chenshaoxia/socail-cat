/*package yiji;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.chendi.jiyi.dao.RewardSkillDAO;
import com.chendi.jiyi.entity.RewardSkill;
import com.chendi.jiyi.service.RewardSkillService;

//让junit启动时加载spring IOC容器
@RunWith(SpringJUnit4ClassRunner.class)
// 告诉junit spring的配置文件
@ContextConfiguration({ "classpath:spring-dao.xml", "classpath:spring-mvc.xml", "classpath:spring.xml" })
public class RewardSkillTest {

	@Resource
	private RewardSkillDAO skillDAO;
	
	@Autowired
	private RewardSkillService rsService;
	@Test
	public void addRewardSkillTest() {
		RewardSkill skill = new RewardSkill();
		skill.setRsTitle("测试3");
		skill.setRsDetails("测试3");
//		skill.setRsPublisher("1409030240");
//		skill.setRsBuyer("1409030240");
		skill.setRsCreateTime("测试3");
		skill.setRsCategory("测试3");
		skill.setRsPlace("测试3");
		skill.setRsTarget("测试3");
		skill.setRsTerm("测试3");
//		skill.setRsCost(100);
//		skill.setRsCanTry(0);
//		skill.setRsTryCost(10);
//		skill.setRsPrase(0);
		skill.setRsStatus(0);
		skill.setRsAuditor(null);
		skillDAO.addRewardSkill(skill);
	}
	
	@Test
	public void queryTest(){
		RewardSkill skill=skillDAO.queryById(1);
		System.err.println(skill.toString());
	}
	
	@Test
	public void queryAllTest(){
		List<RewardSkill> list=new ArrayList<RewardSkill>();
		list=skillDAO.queryAll();
		for(RewardSkill skill:list){
			System.out.println(skill.toString());
		}
	}
	
	@Test
	public void auditingTest(){
//		System.out.println(skillDAO.auditing(1, 1, 100,0, "dishen"));
	}
	
	@Test
	public void acceptTest(){
//		System.out.println(skillDAO.buyOrTry(1, 2, "1409030239"));
//		rsService.acceptOrTry(1, 1, null);
//		rsService.acceptOrTry(1, 3, "1409030239");
	}
}
*/