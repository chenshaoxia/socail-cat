package yiji;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;


import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.chendi.jiyi.dto.UserStatus;
import com.chendi.jiyi.entity.User;
import com.chendi.jiyi.service.AdminService;
import com.chendi.jiyi.service.UserService;

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
public class UserDaoTest {

	// 注入dao实现类依赖
	
	@Autowired
	private UserService userService;
	@Autowired
	private AdminService adminService;
	
	@Test
	public void activateById() {
		/*adminService.activateById("1409030240", "dishen");*/
	}
	@Test
	public void login() {
		System.out.println(userService.login("1409030240", "hanxin"));
	}
	@Test
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

	/*Test
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
	}*/

}
