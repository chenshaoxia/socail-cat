package com.chendi.jiyi.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.chendi.jiyi.entity.Praise;

public interface PraiseDAO {
	
	public List<Praise> queryByFk(@Param("fkId")int fkId,@Param("fkType")int fkType);
	public int queryForComment(int fkId,int fkType);
	public int checkBeforeAdd(Praise praise);
	public int addPraise(Praise praise);
	
}
