/*
 * @Description: 全局的类型推断
 * @Author: 王振
 * @Date: 2021-09-24 14:45:46
 * @LastEditors: 王振
 * @LastEditTime: 2021-09-27 10:15:07
 */

export type CommonObject<T = any> = Record<string, T>;

export interface ReduxProps<T> {
  storeData: T;
  setStoreData?: (type: string, payload: any) => object;
}

/**
 * 路由类型
 */
export interface routerConfigModel {
  path: string;
  name?: string;
  component?: any;
  auth?: boolean;
}
