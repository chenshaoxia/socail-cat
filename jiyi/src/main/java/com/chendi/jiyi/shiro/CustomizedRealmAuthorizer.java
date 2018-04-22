package com.chendi.jiyi.shiro;

import java.util.Collection;
import java.util.List;

import org.apache.shiro.authz.Authorizer;
import org.apache.shiro.authz.ModularRealmAuthorizer;
import org.apache.shiro.authz.Permission;
import org.apache.shiro.realm.Realm;
import org.apache.shiro.subject.PrincipalCollection;

import com.chendi.jiyi.entity.Admin;
import com.chendi.jiyi.entity.User;

/*
 * y用于选择哪一个realm进行授权
 */
public class CustomizedRealmAuthorizer extends ModularRealmAuthorizer{

	//重新判断是否具有permitt方法
	@Override
	public boolean isPermitted(PrincipalCollection principals, String permission) {
		assertRealmsConfigured();
		Object primaryPrincipal=principals.getPrimaryPrincipal();
		for (Realm realm : getRealms()) {
			if (!(realm instanceof Authorizer)) {
				continue;
			}
			if (primaryPrincipal instanceof Admin) {
				if (realm instanceof AdminRealm) {
					return ((AdminRealm) realm).isPermitted(principals, permission);
				}
			}
			if (primaryPrincipal instanceof User) {
				if (realm instanceof UserRealm) {
					return ((UserRealm) realm).isPermitted(principals, permission);
				}
			}
		}
		return false;
	}
	
	//重新判断是否具有role方法
	@Override
	public boolean hasRole(PrincipalCollection principals, String roleIdentifier) {
		assertRealmsConfigured();
		Object primaryPrincipal=principals.getPrimaryPrincipal();
		for (Realm realm : getRealms()) {
            if (!(realm instanceof Authorizer)) continue;
            if (primaryPrincipal instanceof Admin) {
				if (realm instanceof AdminRealm) {
					return ((AdminRealm) realm).hasRole(principals, roleIdentifier);
				}
            	
			}
            if (primaryPrincipal instanceof User) {
				if (realm instanceof UserRealm) {
					return ((UserRealm) realm).hasRole(principals, roleIdentifier);
				}
            	
			}
        }
		return false;
	}
	
}
