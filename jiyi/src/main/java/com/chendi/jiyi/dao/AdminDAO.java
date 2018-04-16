package com.chendi.jiyi.dao;

import org.apache.ibatis.annotations.Param;

import com.chendi.jiyi.entity.Admin;

public interface AdminDAO {
    public Admin login(@Param("id") String id, @Param("password") String password);

    public Admin queryById(String id);

    public Admin queryName(String id);

    public int updatePassword(@Param("id") String id, @Param("password") String password);

    //更新头像信息,图片以二进制还是保存路径
    public int updatePicById(String id);
}
