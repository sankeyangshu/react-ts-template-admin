/*
 * @Description: 前端鉴权组件-用来做路由守卫
 * @Author: 王振
 * @Date: 2021-09-27 09:10:11
 * @LastEditors: 王振
 * @LastEditTime: 2021-09-29 09:27:30
 */

import React from 'react';
import Admin from '@/layout/Admin';
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

  // 递归返回路由合法的组件
  const findRouterConfig = (config: routerConfigModel[]) => {
    const obj = config.find((val) => {
      if (val.routes) {
        return findRouterConfig(val.routes);
      }
      return val.path === pathname;
    });
    if (obj?.routes) {
      return obj.routes.find((item) => item.path === pathname);
    }
    return obj;
  };

  // 如果该路由不用进行权限校验，登录状态下登陆页除外
  // 因为登陆后，无法跳转到登陆页
  // 这部分代码，是为了在非登陆状态下，访问不需要权限校验的路由
  // const targetRouterConfig = config.find((val) => val.path === pathname); // 旧版检测路由是否合法
  const targetRouterConfig = findRouterConfig(config) as routerConfigModel; // 新版检测路由是否合法，并强制赋予类型
  if (targetRouterConfig && !targetRouterConfig.auth && !isLogin) {
    const { component } = targetRouterConfig;
    return (
      <Admin>
        <Route exact path={pathname} key={pathname} component={component} />
      </Admin>
    );
  }

  if (isLogin) {
    // 如果是登录状态，想要跳转到登陆，重定向到主页
    if (pathname === '/login') {
      return <Redirect to="/" />;
    } else {
      // 如果路由合法，就跳转到相应的路由
      if (targetRouterConfig) {
        return (
          <Admin>
            <Route exact path={pathname} key={pathname} component={targetRouterConfig.component} />
          </Admin>
        );
      } else {
        // 如果路由不合法，但是因为已经登录了，重定向到错误页面
        return <Redirect to="/403" />;
      }
    }
  } else {
    // 非登录状态下，跳转到登陆页面，要求登陆
    return <Redirect to="/login" />;
  }
};

export default FrontendAuth;
