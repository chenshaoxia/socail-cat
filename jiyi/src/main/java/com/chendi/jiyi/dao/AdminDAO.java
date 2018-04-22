package com.chendi.jiyi.dao;

import java.util.Set;

import org.apache.ibatis.annotations.Param;

import com.chendi.jiyi.entity.Admin;
import com.chendi.jiyi.entity.Permission;
import com.chendi.jiyi.entity.Role;

public interface AdminDAO {
    public Admin login(@Param("id") String id, @Param("password") String password);

    public Admin queryById(String id);

    public Admin queryName(String id);
    
    public Set<Role> queryRoles(String id);
    
    public Set<Permission> queryPermissions(@Param("roleList")Set<Integer> roleList);

    public int updatePassword(@Param("id") String id, @Param("password") String password);

    //更新头像信息,图片以二进制还是保存路径
    public int updatePicById(String id);
}
