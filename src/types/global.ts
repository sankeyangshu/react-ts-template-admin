/*
 * @Description: 全局的类型推断
 * @Author: 王振
 * @Date: 2021-09-24 14:45:46
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-24 16:17:58
 */

export type CommonObject<T = any> = Record<string, T>;

/**
 * 路由类型
 */
export interface routerConfigModel {
  path: string;
  name?: string;
  component?: any;
  auth?: boolean;
  routes?: routerConfigModel[];
}

/**
 * action 类型
 */
export interface StoreActionType {
  type: string;
  payload: any;
}
