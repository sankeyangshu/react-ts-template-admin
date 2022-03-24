/*
 * @Description: 用户模块 actionTypes 文件
 * @Author: 王振
 * @Date: 2022-03-24 14:25:08
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-24 17:15:33
 */

/**
 * 设置个人信息
 */
export const SET_USERINFO = 'SET_USERINFO';

/**
 * 设置用户token
 */
export const SET_TOKEN = 'SET_TOKEN';

/**
 * token 时间戳
 */
export const TIME_STAMP = 'TIME_STAMP';

/**
 * token 超时时长(毫秒) 两小时
 */
export const TOKEN_TIMEOUT_VALUE = 2 * 3600 * 1000;
