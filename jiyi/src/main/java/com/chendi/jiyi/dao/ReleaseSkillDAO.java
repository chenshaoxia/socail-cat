package com.chendi.jiyi.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.chendi.jiyi.entity.ReleaseSkill;

public interface ReleaseSkillDAO {
	public int addReleaseSkill(ReleaseSkill releaseSkill);

	public ReleaseSkill queryById(@Param("id")int id,@Param("status")int status);
	
	public List<ReleaseSkill> queryByPublisher(@Param("id")String id, @Param("exceptStatus") int exceptStatus);

	public List<ReleaseSkill> queryByBuyer(@Param("id")String id, @Param("exceptStatus") int exceptStatus);

	public ReleaseSkill queryCost(int id);
	
	public List<ReleaseSkill> queryAll();
	
	public List<ReleaseSkill> queryByStatusToUser(@Param("status")int status,@Param("orderBy")String orderBy,@Param("order")String order);
	
	public List<ReleaseSkill> queryByCategory(int category);

	/*public List<ReleaseSkill> queryNoPermit(int status);*/
	
	public List<ReleaseSkill> queryByStatus(int status);

	public int queryStatusById(@Param("id") int id);
	
	public int updateStatusById(@Param("id") int id, @Param("status") int status,@Param("auditingMsg") String auditingMsg, @Param("auditor") String auditor);

	public int updateById(ReleaseSkill releaseSkill);

	public int buyOrTry(@Param("id") int id, @Param("status") int status, @Param("buyer") String buyer);

	public int updateCover(@Param("id")int fkId, @Param("coverPath")String coverPath);
}
