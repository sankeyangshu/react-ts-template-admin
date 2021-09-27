/*
 * @Description: 路由文件
 * @Author: 王振
 * @Date: 2021-09-27 08:52:11
 * @LastEditors: 王振
 * @LastEditTime: 2021-09-27 13:20:22
 */

import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Admin from '@/layout/Admin';
import { routerConfigModel } from '@/types';

/**
 * path 跳转的路径
 * component 对应路径显示的组件
 */
const routes: routerConfigModel[] = [
  {
    path: '/',
    name: '首页',
    component: Home,
  },
  {
    path: '/login',
    name: '登录',
    component: Login,
  },
  {
    path: '/admin',
    name: '模版',
    component: Admin,
  },
];

export default routes;
