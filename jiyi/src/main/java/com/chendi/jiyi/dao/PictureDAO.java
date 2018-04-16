package com.chendi.jiyi.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.chendi.jiyi.entity.Picture;

public interface PictureDAO {

	public int addPicture(Picture picture);

	public Picture queryById(int id);

	public List<Picture> queryByFk(@Param("fkId")int fkId,@Param("fkType")int fkType);
	
	public List<Picture> queryRelease(int fkId);
	
	public Picture queryReleaseCover(int fkId);
	
	public List<Picture> queryAll();

	public int updateById(Picture picture);

	public int deleteById(int id);
	
	public int deleteByFk(int fkId,int fkType);
}
