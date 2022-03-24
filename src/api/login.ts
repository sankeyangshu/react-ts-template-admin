/*
 * @Description: 登录注册功能接口管理
 * @Author: 王振
 * @Date: 2021-09-27 10:32:55
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-24 15:44:33
 */

// 导入http
import http from '@/utils/http';
import { CustomSuccessData } from '@/types';

/**
 * 登录请求参数类型
 */
export interface loginParams {
  userName: string;
  password: string;
}

/**
 * @description: 用户登录
 * @param {loginParams} params 登录参数
 * @return {*} 返回请求登录接口的结果
 */
export async function postLoginAPI(params: loginParams): Promise<CustomSuccessData<any>> {
  return await http.post('/api/user/login', params);
}
