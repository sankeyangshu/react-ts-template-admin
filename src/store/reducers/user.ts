/*
 * @Description: 用户模块 reducer 文件
 * @Author: 王振
 * @Date: 2022-03-24 14:13:59
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-24 16:07:13
 */

import { StoreActionType } from '@/types';
import { SET_TOKEN, SET_USERINFO } from '../actionTypes/user';

/**
 * 用户state初始数据类型
 */
export interface userStateType {
  token: string;
  userInfo: object;
  roles: any[];
}

/**
 * 用户state数据
 */
const userInitState: userStateType = {
  token: '', // 用户认证token
  userInfo: {}, // 用户基本信息
  roles: [], // 权限角色
};

/**
 * @description: 用户 reducer 方法
 * @param {userStateType} state 用户 state 初始数据
 * @param {StoreActionType} action 用户 action 方法 { type：action类型, payload: state新数据 }
 * @return {userStateType} 修改后的state值
 */
const storeData = (state = userInitState, { type, payload }: StoreActionType): userStateType => {
  switch (type) {
    case SET_TOKEN:
      return {
        ...state,
        token: payload,
      };
    case SET_USERINFO:
      return {
        ...state,
        userInfo: payload,
      };
    default:
      return state;
  }
};

export default storeData;
