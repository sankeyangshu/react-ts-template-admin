/*
 * @Description: 路由文件
 * @Author: 王振
 * @Date: 2021-09-27 08:52:11
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-25 15:41:41
 */

import { routerConfigModel } from '@/types';
import loadable from '@/components/Loadable';

const Home = loadable(() => import(/* webpackChunkName: 'home' */ '@/pages/Home'));
const Login = loadable(() => import(/* webpackChunkName: 'login' */ '@/pages/Login'));
const ErrorPage = loadable(() => import(/* webpackChunkName: 'errorpage' */ '@/pages/ErrorPage'));
const UserList = loadable(() => import(/* webpackChunkName: 'userlist' */ '@/pages/User/UserList'));
const UserEdit = loadable(() => import(/* webpackChunkName: 'useredit' */ '@/pages/User/UserEdit'));

/**
 * path 跳转的路径
 * component 对应路径显示的组件
 */
const routes: routerConfigModel[] = [
  {
    path: '/',
    name: '首页',
    component: Home,
    auth: true,
  },
  {
    path: '/login',
    name: '登录',
    component: Login,
  },
  {
    path: '/user',
    name: '用户管理',
    auth: true,
    routes: [
      {
        path: '/user/list',
        name: '用户列表',
        component: UserList,
        auth: true,
      },
      {
        path: '/user/list/add',
        name: '新增用户',
        component: UserEdit,
        auth: true,
      },
    ],
  },
  {
    path: '/403',
    name: '403',
    component: ErrorPage,
    auth: true,
  },
];

export default routes;
