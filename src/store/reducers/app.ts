/*
 * @Description: 系统基本模块 reducers 文件
 * @Author: 王振
 * @Date: 2022-03-24 16:28:59
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-24 16:38:12
 */

import { SET_COLLAPSED, SET_CURTAB, SET_RELOADPATH, SET_THEME } from '@/store/actionTypes/app';
import { StoreActionType } from '@/types';

/**
 * 系统state初始数据类型
 */
export interface appStateType {
  collapsed: boolean;
  curTab: string[];
  theme: string;
  reloadPath: string;
}

/**
 * 用户state数据
 */
const appInitState: appStateType = {
  collapsed: false, // 菜单收纳状态
  curTab: [], // 当前tab页面
  theme: '', // 网站主题
  reloadPath: 'null', // 需要刷新的tab路径
};

/**
 * @description: 用户 reducer 方法
 * @param {appStateType} state 用户 state 初始数据
 * @param {StoreActionType} action 用户 action 方法 { type：action类型, payload: state新数据 }
 * @return {appStateType} 修改后的state值
 */
const storeData = (state = appInitState, { type, payload }: StoreActionType): appStateType => {
  switch (type) {
    case SET_COLLAPSED:
      return {
        ...state,
        collapsed: payload,
      };
    case SET_CURTAB:
      return {
        ...state,
        curTab: payload,
      };
    case SET_THEME:
      return {
        ...state,
        theme: payload,
      };
    case SET_RELOADPATH:
      return {
        ...state,
        reloadPath: payload,
      };
    default:
      return state;
  }
};

export default storeData;
