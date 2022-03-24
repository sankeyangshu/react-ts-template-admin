/*
 * @Description: 使用hooks链接redux
 * @Author: 王振
 * @Date: 2021-09-24 14:40:46
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-24 16:40:14
 */

import { useSelector as useReduxSelector, TypedUseSelectorHook } from 'react-redux';
import { userStateType } from './reducers/user';
import { appStateType } from './reducers/app';

/**
 * 总仓库的state数据类型
 * 例如：userReducer是reducer合并user的名称，每合并一次reducer，都要加上对应的类型
 */
interface StoreStateType {
  userReducer: userStateType;
  appReducer: appStateType;
}

export const useSelector: TypedUseSelectorHook<StoreStateType> = useReduxSelector;
