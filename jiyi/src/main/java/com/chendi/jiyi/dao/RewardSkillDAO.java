package com.chendi.jiyi.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.chendi.jiyi.entity.RewardSkill;

public interface RewardSkillDAO {

	public int addRewardSkill(RewardSkill RewardSkill);

	public RewardSkill queryById(int id);
	
	public RewardSkill queryByIdNoAccepter(int id);

	public List<RewardSkill> queryAll();
	
	public List<RewardSkill> queryByStatus(int status);
	
	public List<RewardSkill> queryByStatusToUser(@Param("status")int status,
			@Param("orderBy")String orderBy,@Param("order")String order);

	public List<RewardSkill> queryByCategory(int category);
	
	public int auditing(@Param("id") int id, @Param("status") int status, @Param("cost") int cost,
			@Param("tryCost") int tryCost, @Param("auditor") String auditor,@Param("auditingMsg") String auditingMsg);

	public int updateById(RewardSkill RewardSkill);
	
	public int updateStatus(@Param("id") int id,@Param("status")int status );

	public int accept(@Param("id") int id, @Param("status") int status, @Param("accepter") String accepter);
	
	public int updateAccepterNum(@Param("id") int id);
}
