/*
 * @Description: 封装api请求方法
 * @Author: 王振
 * @Date: 2021-09-24 14:51:35
 * @LastEditors: 王振
 * @LastEditTime: 2021-09-24 14:52:13
 */

// 1.导入封装好的axios实例
import request from './request';
import { Get, Post, Patch, Delete } from '../types'; // 接口泛型

/**
 * @description: 封装get请求方法
 * @param {string} url url 请求地址
 * @param {string | object | undefined} params 请求参数
 * @param {AxiosRequestConfig | undefined} config 请求配置
 */
const get: Get = async (url, params, config) => {
  config = {
    method: 'get', // `method` 是创建请求时使用的方法
    url: url, // `url` 是用于请求的服务器 URL
  };
  if (params) {
    config.params = params;
  }
  const response = await request(config);
  return response;
};

/**
 * @description: 封装post请求方法
 * @param {string} url url 请求地址
 * @param {string | object | undefined} params 请求参数
 * @param {AxiosRequestConfig | undefined} config 请求配置
 */
const post: Post = async (url, params, config) => {
  config = {
    method: 'post',
    url: url,
  };
  if (params) {
    config.data = params;
  }
  const response = await request(config);
  return response;
};

/**
 * @description: 封装patch请求方法
 * @param {string} url url 请求地址
 * @param {string | object | undefined} params 请求参数
 * @param {AxiosRequestConfig | undefined} config 请求配置
 */
const patch: Patch = async (url, params, config) => {
  config = {
    method: 'patch',
    url: url,
  };
  if (params) {
    config.data = params;
  }
  const response = await request(config);
  return response;
};

/**
 * @description: 封装delete请求方法
 * @param {string} url url 请求地址
 * @param {string | object | undefined} params 请求参数
 * @param {AxiosRequestConfig | undefined} config 请求配置
 */
const destroy: Delete = async (url, params, config) => {
  config = {
    method: 'delete',
    url: url,
  };
  if (params) {
    config.params = params;
  }
  const response = await request(config);
  return response;
};

// 包裹请求方法的容器,使用 http 统一调用
const http = {
  get,
  post,
  patch,
  destroy,
};

export default http;
