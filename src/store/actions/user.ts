/*
 * @Description: 用户模块 action 方法
 * @Author: 王振
 * @Date: 2022-03-24 14:50:35
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-24 17:36:47
 */

import { SET_TOKEN, TIME_STAMP } from '../actionTypes/user';
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
 * @description: 设置时间戳
 * @param {number} timeStamp 时间戳
 */
export const setTimeStamp = (timeStamp: number) => {
  return {
    type: TIME_STAMP,
    payload: timeStamp,
  };
};

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
          dispatch(setTimeStamp(Date.now())); // 保存登录时间
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
};

/**
 * 用户退出登录
 */
export const logout = () => {
  return (dispatch) => {
    dispatch(setToken('')); // 清空token
    dispatch(setTimeStamp(0)); // 清空登录时间
  };
};
