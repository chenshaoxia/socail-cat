package com.chendi.jiyi.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chendi.jiyi.dao.RewardAccepterDAO;
import com.chendi.jiyi.entity.RewardAccepter;

@Service
public class RewardAccepterService {

	@Autowired
	private RewardAccepterDAO raDAO;

	public int addAccepter(RewardAccepter accepter){
		return raDAO.addAccepter(accepter);
	}

//	public RewardAccepter queryById(int id);

	public List<RewardAccepter> queryByFkId(int rsId){
		return raDAO.queryByFkId(rsId);
	}

	public int deleteById(int id){
		return raDAO.deleteById(id);
	}
}
