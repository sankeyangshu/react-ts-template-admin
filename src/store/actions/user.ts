/*
 * @Description: 用户模块 action 方法
 * @Author: 王振
 * @Date: 2022-03-24 14:50:35
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-24 16:26:12
 */

import { SET_TOKEN } from '../actionTypes/user';
import { postLoginAPI, loginParams } from '@/api/login';

/**
 * @description: 设置token
 * @param {string} token token 数据
 */
export const setToken = (token: string) => {
  return {
    type: SET_TOKEN,
    payload: token,
  };
};

/**
 * @description: 设置用户信息
 * @param {object} userInfo 用户信息
 */
// const setUserinfo = (userInfo: object) => {
//   return {
//     type: SET_USERINFO,
//     payload: userInfo,
//   };
// };

/**
 * @description: 用户登录
 * @param {loginParams} userInfo 账号密码
 */
export const login = (userInfo: loginParams) => {
  return (dispatch) => {
    const { userName, password } = userInfo;
    return new Promise<void>((resolve, reject) => {
      postLoginAPI({ userName: userName.trim(), password: password })
        .then((res) => {
          const { data } = res;
          dispatch(setToken(data.token)); // 保存用户token
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
};
