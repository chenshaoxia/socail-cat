package com.chendi.jiyi.shiro;

import java.util.HashSet;
import java.util.Set;

import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.springframework.beans.factory.annotation.Autowired;

import com.chendi.jiyi.entity.Admin;
import com.chendi.jiyi.entity.Permission;
import com.chendi.jiyi.entity.Role;
import com.chendi.jiyi.service.AdminService;

public class AdminRealm extends AuthorizingRealm {

	@Autowired
	private AdminService adminService;
	
	@Override
	protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals) {
		Admin admin=(Admin) principals.getPrimaryPrincipal();
		SimpleAuthorizationInfo authorizationInfo=new SimpleAuthorizationInfo();
		
		//根据Id查询角色
		Set<Role> roles= adminService.queryRoles(admin.getId());
		Set<String> roleName=new HashSet<String>();
		Set<Integer> roleId=new HashSet<Integer>();
		if (!roles.isEmpty()) {
			for (Role role : roles) {
				roleName.add(role.getrName());
				roleId.add(role.getrId());
				System.out.println(role.getrName());
			}
			authorizationInfo.setRoles(roleName);
		}
		
		
		// 根据角色名查询角色权限
        Set<Permission> permissions = adminService.queryPermissions(roleId);
        Set<String> permissionName = new HashSet<String>();
        if (!permissions.isEmpty()) {
        	 for (Permission permission : permissions) {
                 permissionName.add(permission.getpName());
                 System.out.println(permission.getpName());
             }
             // 将权限名称提供给info
             authorizationInfo.setStringPermissions(permissionName);
		}
		return authorizationInfo;
	}

	@Override
	protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) throws AuthenticationException {
		String id=(String) token.getPrincipal();
		Admin admin=adminService.queryById(id);
		if (admin==null) {
			 // 用户名不存在抛出异常
            throw new UnknownAccountException();
		}
		SimpleAuthenticationInfo authenticationInfo=new SimpleAuthenticationInfo(admin
				,admin.getPassword(),this.getName());
		return authenticationInfo;
	}

}
