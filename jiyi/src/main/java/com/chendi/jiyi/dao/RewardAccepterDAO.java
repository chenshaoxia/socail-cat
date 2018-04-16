package com.chendi.jiyi.dao;

import java.util.List;

import com.chendi.jiyi.entity.RewardAccepter;

public interface RewardAccepterDAO {

	public int addAccepter(RewardAccepter accepter);

//	public RewardAccepter queryById(int id);

	public List<RewardAccepter> queryByFkId(int rsId);

	public int updateById(RewardAccepter accepter);

	public int deleteById(int id);
}
