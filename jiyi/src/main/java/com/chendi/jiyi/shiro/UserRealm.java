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
import org.apache.shiro.util.ByteSource;
import org.springframework.beans.factory.annotation.Autowired;

import com.chendi.jiyi.Enum.UserStatus;
import com.chendi.jiyi.entity.User;
import com.chendi.jiyi.service.UserService;

public class UserRealm extends AuthorizingRealm {

	@Autowired
	private UserService userService;
	
	@Override
	protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals) {
		User user=(User) principals.getPrimaryPrincipal();
		SimpleAuthorizationInfo authorizationInfo=new SimpleAuthorizationInfo();
		
		Set<String> roleName= new HashSet<String>();
		if (user.getStatus()==UserStatus.REGULAR.getIndex()) {
//			Set<String> permissionName= new HashSet<String>();
			roleName.add("no_permission_user");
			roleName.add("general_user");
//			permissionName.add("user_regular");
			authorizationInfo.setRoles(roleName);
//			authorizationInfo.setStringPermissions(permissionName);
		}else if (user.getStatus()==UserStatus.UNDER_AUDITING.getIndex()) {
			roleName.add("no_permission_user");
			authorizationInfo.setRoles(roleName);
		}
		return authorizationInfo;
	}

	@Override
	protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) throws AuthenticationException {
		String id=(String) token.getPrincipal();
		User user=userService.queryById(id,null);
		if (user==null) {
			 // 用户名不存在抛出异常
            throw new UnknownAccountException();
		}
		ByteSource credentialsSalt = ByteSource.Util.bytes(id);
		SimpleAuthenticationInfo authenticationInfo=new SimpleAuthenticationInfo(user
				,user.getPassword(),credentialsSalt,this.getName());
		return authenticationInfo;
	}

}
