/*
 * @Description: 系统模块 action 方法
 * @Author: 王振
 * @Date: 2022-03-24 16:41:13
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-24 16:53:37
 */

import { SET_COLLAPSED, SET_CURTAB, SET_RELOADPATH, SET_THEME } from '../actionTypes/app';

/**
 * @description: 设置菜单收纳状态
 * @param {boolean} collapsed 是否收纳
 */
export const setCollapsed = (collapsed: boolean) => {
  return {
    type: SET_COLLAPSED,
    payload: collapsed,
  };
};

/**
 * @description: 设置tab
 * @param {string} curTab tab列表
 */
export const setCurtab = (curTab: string[]) => {
  return {
    type: SET_CURTAB,
    payload: curTab,
  };
};

/**
 * @description: 重定向
 * @param {string} reloadPath 需要刷新的tab路径
 */
export const setReloadpath = (reloadPath: string) => {
  return {
    type: SET_RELOADPATH,
    payload: reloadPath,
  };
};

/**
 * @description: 设置主题
 * @param {string} theme 主题
 */
export const setTheme = (theme: string) => {
  return {
    type: SET_THEME,
    payload: theme,
  };
};
