/*
 * @Description: redux的 type常量集合
 * @Author: 王振
 * @Date: 2021-09-24 14:44:06
 * @LastEditors: 王振
 * @LastEditTime: 2021-09-24 14:44:46
 */

/**
 * @description: redux的 type常量
 * @param {name} string action 要 diapatch 的类型
 * @param {field} string action 要操作的字段名
 */
export default {
  // 设置个人信息
  SET_USERINFO: {
    name: 'SET_USERINFO',
    field: 'userInfo',
  },

  // 设置菜单收纳状态
  SET_COLLAPSED: {
    name: 'SET_COLLAPSED',
    field: 'collapsed',
  },

  // 设置tab
  SET_CURTAB: {
    name: 'SET_CURTAB',
    field: 'curTab',
  },

  // 设置主题
  SET_THEME: {
    name: 'SET_THEME',
    field: 'theme',
  },

  // 重定向
  SET_RELOADPATH: {
    name: 'SET_RELOADPATH',
    field: 'reloadPath',
  },
};
