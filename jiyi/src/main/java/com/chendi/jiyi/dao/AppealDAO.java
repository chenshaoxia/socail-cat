package com.chendi.jiyi.dao;

import java.util.List;

import com.chendi.jiyi.entity.Appeal;

public interface AppealDAO {

	public int addAppeal(Appeal appealm);

	public Appeal queryById(int aId);

	public List<Appeal> queryByAccuserId(String aAccuser);
	
	public List<Appeal> queryByDefendantId(String aDefendant);
	
	public List<Appeal> queryByTransactorId(String aTransactor);
	
	public List<Appeal> queryAll();

	public int updateById(int aId);
	
	public int transact(int aId);
	
	public int deleteById(int aId);
}
