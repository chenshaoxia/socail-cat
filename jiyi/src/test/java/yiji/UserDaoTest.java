/*package yiji;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.chendi.jiyi.Enum.ReleaseSkillStatus;
import com.chendi.jiyi.Enum.UserStatus;
import com.chendi.jiyi.dao.LetterDAO;
import com.chendi.jiyi.dto.CommonTools;
import com.chendi.jiyi.dto.Result;
import com.chendi.jiyi.entity.Admin;
import com.chendi.jiyi.entity.Letter;
import com.chendi.jiyi.entity.Permission;
import com.chendi.jiyi.entity.Role;
import com.chendi.jiyi.entity.User;
import com.chendi.jiyi.service.AdminService;
import com.chendi.jiyi.service.LetterService;
import com.chendi.jiyi.service.ReleaseSkillService;
import com.chendi.jiyi.service.UserService;

*//**
 * 配置spring和junit整合，为了让junit启动时加载spring IOC容器
 * 
 * @author cd
 *//*
// 让junit启动时加载spring IOC容器
@RunWith(SpringJUnit4ClassRunner.class)
// 告诉junit spring的配置文件
@ContextConfiguration({ "classpath:spring-dao.xml", 
	           			
	           			"classpath:spring.xml"})
public class UserDaoTest {

	// 注入dao实现类依赖
	
	@Autowired
	private UserService userService;
	@Autowired
	private AdminService adminService;
	@Autowired
	private ReleaseSkillService releaseService;
	@Autowired
	private LetterService letterService;
	@Autowired
	private LetterDAO letterDAO;
	
	
	private String algorithmName="md5";
	 //散列迭代次数
	private final int hashIterations = 2;
   
	@Test
	public void addLetter(){
//		System.out.println(releaseService.queryStatusById(8));
		Admin admin=adminService.queryById("dishen");
		User user=userService.queryById("1409030239");
		letterService.addLetter(admin, user, "you are best000");
//		Letter letter=new Letter();
//		letter.setlSender(admin);
//		letter.setlReceiver(user);
//		letter.setlSendTime(CommonTools.getCurrentDate());
//		letter.setlContent("xxxxx");
//		letter.setlHasRead(0);
//		letterDAO.addLetter(letter);
	}

	@Test
	public void queryRoles() {
		Set<Role> set=adminService.queryRoles("dishen");
		Set<Integer> roleList=new HashSet<Integer>();
		for (Role role : set) {
			System.out.println(role.getrName());
			roleList.add(role.getrId());
		}
		Set<Permission> set1=adminService.queryPermissions(roleList);
		for (Permission p : set1) {
			System.out.println(p.getpName());
		}
	}
	
	@Test
	public void queryPermissions() {
		Set<Integer> roleList=new HashSet<Integer>();
		roleList.add(1);
		roleList.add(2);
		Set<Permission> set1=adminService.queryPermissions(roleList);
		for (Permission p : set1) {
			System.out.println(p.getpName());
		}
		System.out.println(set1.size());
	}
	
	@Test
	public void activateById() {
		adminService.activateById("1409030240", "dishen");
	}
	@Test
	public void login() {
		System.out.println(userService.login("1409030240", "hanxin"));
	}
//	@Test
	public void addUser() {
		User user = new User();
		user.setId("1409030241");
		user.setName("刘彻");
		user.setPassword("liuche");
		user.setInstitute("信息与安全工程学院");
		user.setSpecialty("信息管理与信息系统");
		user.setSex("男");
		user.setPhone("17385301231");
		user.setEmail("296931089@qq.com");
		user.setStatus(UserStatus.UNDER_AUDITING);
		SimpleDateFormat sdf=new SimpleDateFormat("yyyy年MM月dd日 HH:mm:ss");
		user.setCreateTime(sdf.format(new Date()));
//		userService.addUser(user);
	}

	@Test
	public void queryById() throws Exception {
		String id = "1409030239";
		User user = userService.queryById(id);
		System.out.println(user.toString());
	}

	@Test
	public void queryAllNotActive() {
		List<User> list=adminService.queryAllNotActive();
		for (User user : list) {
			System.out.println(user.toString());
		}
	}
	
	@Test
	public void addWealth(){
		System.out.println(userService.updateWealth("1409030241", -300));
	}

	Test
	public void testUpdateById() throws IOException {
		File file = new File("C:/Users/cd/Desktop/新建文件夹/2715746_809319.jpg");
		String path = "H:/MyEclipse 2016/WorkSpace/yiji/src/main/webapp/1409030239";
		File excelFile = new File(path);
		ByteArrayOutputStream baos=new ByteArrayOutputStream();
		FileInputStream fis=new FileInputStream(file);
		byte[] b = new byte[1024];
		int n;
		while ((n=fis.read(b))!=-1) {
			baos.write(b,0,n);
		}
		 fis.close();
         baos.close();
//		BufferedImage bi;
//		bi=ImageIO.read(file);
//		ByteArrayOutputStream baos=new ByteArrayOutputStream();
//		ImageIO.write(bi, "jpg", baos);
//		byte[] bytes=baos.toByteArray();
		User user=new User();
		user.setId("1409030239");
		user.setPassword("dishen");
		user.setPhone("15623032411");
		user.setPicture(baos.toByteArray());
		userDao.updateById(user);
	}

}
*/