/*
 * @Description: 前端鉴权组件-用来做路由守卫
 * @Author: 王振
 * @Date: 2021-09-27 09:10:11
 * @LastEditors: 王振
 * @LastEditTime: 2021-09-27 10:44:11
 */

import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import { routerConfigModel } from '@/types';
import { useSelector } from '@/store/hooks';

// 组件参数类型
interface propsModel {
  config: routerConfigModel[];
}

const FrontendAuth: React.FC<propsModel> = ({ config }) => {
  const location = useLocation(); // 获取location实例
  const { pathname } = location; // 获取当前路径
  const isLogin = useSelector((state) => state.storeData.userInfo.token); // 获取token，判断用户是否登录

  // 如果该路由不用进行权限校验，登录状态下登陆页除外
  // 因为登陆后，无法跳转到登陆页
  // 这部分代码，是为了在非登陆状态下，访问不需要权限校验的路由
  const targetRouterConfig = config.find((val) => val.path === pathname);
  if (targetRouterConfig && !targetRouterConfig.auth && !isLogin) {
    const { component } = targetRouterConfig;
    return <Route exact path={pathname} key={pathname} component={component} />;
  }

  if (isLogin) {
    // 如果是登录状态，想要跳转到登陆，重定向到主页
    if (pathname === '/login') {
      return <Redirect to="/" />;
    } else {
      // 如果路由合法，就跳转到相应的路由
      if (targetRouterConfig) {
        return (
          <Route exact path={pathname} key={pathname} component={targetRouterConfig.component} />
        );
      } else {
        // 如果路由不合法，但是因为已经登录了，重定向到主页
        return <Redirect to="/" />;
      }
    }
  } else {
    // 非登录状态下，跳转到登陆页面，要求登陆
    return <Redirect to="/login" />;
  }
};

export default FrontendAuth;
