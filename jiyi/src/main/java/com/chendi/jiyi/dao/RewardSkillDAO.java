package com.chendi.jiyi.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.chendi.jiyi.entity.ReleaseSkill;
import com.chendi.jiyi.entity.RewardSkill;

public interface RewardSkillDAO {

	public int addRewardSkill(RewardSkill RewardSkill);

	public RewardSkill queryById(@Param("id")int id,@Param("status")int status);
	
	public RewardSkill queryByIdNoAccepter(@Param("id")int id,@Param("status")int status);

	public List<RewardSkill> queryByPublisher(@Param("id")String id,@Param("exceptStatus")int exceptStatus);

	public List<RewardSkill> queryByAccepter(String id);
	
	public List<RewardSkill> queryAll();
	
	public List<RewardSkill> queryByStatus(int status);
	
	public List<RewardSkill> queryByStatusToUser(@Param("status")int status,
			@Param("orderBy")String orderBy,@Param("order")String order);

	public List<RewardSkill> queryByCategory(int category);
	
	public int auditing(@Param("id") int id, @Param("status") int status,@Param("auditor") String auditor,@Param("auditingMsg") String auditingMsg);

	public int updateById(RewardSkill RewardSkill);
	
	public int updateStatus(@Param("id") int id,@Param("status")int status );

	public int accept(@Param("id") int id, @Param("status") int status
			, @Param("accepter") String accepter, @Param("originalStatus") int originalStatus);
	
	public int updateAccepterNum(@Param("id") int id, @Param("originalStatus") int originalStatus);
	
	public int updateCover(@Param("id")int fkId, @Param("coverPath")String coverPath);

	
}
