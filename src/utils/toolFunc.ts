/*
 * @Description: 工具函数
 * @Author: 王振
 * @Date: 2021-09-28 10:48:55
 * @LastEditors: 王振
 * @LastEditTime: 2021-09-29 09:41:51
 */

import routes from '@/router';
import ErrorPage from '@/pages/ErrorPage';
import { CommonObject, routerConfigModel } from '@/types';

/**
 * @description: 隐藏手机号
 * @param {string} phone
 */
export const hidePhone = (phone: string) =>
  phone && phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');

/**
 * @description: 深拷贝操作，简单类型的对象的可以直接用 JSON.parse(JSON.stringify())或 [...]/{...}
 * @param {CommonObject} obj 需要拷贝的对象
 */
export const deepClone = (obj: CommonObject) => {
  if (obj === null || typeof obj !== 'object' || obj instanceof Date || obj instanceof Function) {
    return obj;
  }
  const cloneObj = Array.isArray(obj) ? [] : {};
  Object.keys(obj).map((key) => {
    cloneObj[key] = deepClone(obj[key]);
    return cloneObj;
  });
  return cloneObj;
};

/**
 * @description: 以递归的方式展平react router数组
 * @param {routerConfigModel[]} arr 路由数组
 */
export const flattenRoutes = (arr: routerConfigModel[]) =>
  arr.reduce((prev: routerConfigModel[], item: routerConfigModel) => {
    if (Array.isArray(item.routes)) {
      prev.push(item);
    }
    return prev.concat(Array.isArray(item.routes) ? flattenRoutes(item.routes) : item);
  }, []);

/**
 * @description: 根据路径获取路由的name和key
 * @param {string} path 路由
 * @return {*}
 */
export const getKeyName = (path: string = '/403') => {
  const truePath = path.split('?')[0];
  const curRoute = flattenRoutes(routes).filter((item: { path: string | string[] }) =>
    item.path.includes(truePath)
  );
  if (!curRoute[0]) return { title: '暂无权限', tabKey: '403', component: ErrorPage };
  const { name, key, component } = curRoute[0];
  return { title: name, tabKey: key, component };
};
