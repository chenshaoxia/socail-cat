package com.chendi.jiyi.dao;

import java.util.List;

import com.chendi.jiyi.entity.Notice;

public interface NoticeDAO {

	public int addNotice(Notice notice);

	public Notice queryById(int id);

	public List<Notice> queryAll();

	public int updateById(Notice notice);

	public int deleteById(int id);
}
