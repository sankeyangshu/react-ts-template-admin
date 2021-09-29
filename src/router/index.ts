/*
 * @Description: 路由文件
 * @Author: 王振
 * @Date: 2021-09-27 08:52:11
 * @LastEditors: 王振
 * @LastEditTime: 2021-09-28 16:05:06
 */

import Home from '@/pages/Home';
import Login from '@/pages/Login';
import ErrorPage from '@/pages/ErrorPage';
import UserList from '@/pages/User/UserList';
import UserEdit from '@/pages/User/UserEdit';
// import { routerConfigModel } from '@/types';

/**
 * path 跳转的路径
 * component 对应路径显示的组件
 */
const routes = [
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
    path: '/user',
    name: '用户管理',
    routes: [
      {
        path: '/user/list',
        name: '用户列表',
        component: UserList,
      },
      {
        path: '/user/list/add',
        name: '新增用户',
        component: UserEdit,
      },
    ],
  },
  {
    path: '/403',
    name: '403',
    component: ErrorPage,
  },
];

export default routes;
