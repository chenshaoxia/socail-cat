package com.chendi.jiyi.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.chendi.jiyi.entity.User;

public interface UserDAO {
	// 添加用户
	public int addUser(User user);
	// 根据id查询用户
	public User queryById(@Param("id")String id,@Param("status")Integer status);
	// 根据id查询用户姓名
	public User queryName(String id);
	// 根据id查询用户金币
	public int queryWealthById(String id);
	//登录 验证用户名 密码
	public User login(@Param("id")String id,@Param("password")String password);
	// 查询所有用户
	public List<User> queryAll();
	// 查询所有用户
	public List<User> queryByStatus(int status);
	// 查询所有未审核的用户
	public List<User> queryAllNotActive();
	// 管理员审核后的激活账户
	public int updateStatusById(@Param("id") String id, @Param("status") int status, @Param("auditingMsg") String auditingMsg,@Param("auditor") String auditor);
	// 更新用户信息
	public int updateById(User user);
	// 更新头像信息
	public int updatePicById(User user);
	//更改金币
	public int updateWealth(@Param("id")String id,@Param("wealth")int wealth);
}
