/*
 * @Description: reducer 文件
 * @Author: 王振
 * @Date: 2021-09-24 14:42:11
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-24 16:39:24
 */

import { combineReducers } from 'redux';
import userReducer from './user';
import appReducer from './app';

// 把一个由多个不同 reducer 函数作为 value 的 object，合并成一个最终的 reducers 函数
export default combineReducers({
  userReducer,
  appReducer,
});
