/*
 * @Description: 封装axios方法
 * @Author: 王振
 * @Date: 2021-09-24 14:50:29
 * @LastEditors: 王振
 * @LastEditTime: 2021-09-27 10:31:10
 */

// 导入axios
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { message } from 'antd';
import { store } from '@/store';

// 1. 创建新的axios实例
const instance = axios.create({
  // 公共接口
  baseURL: 'http://localhost:3000',
  // 超时时间 单位是ms，这里设置了10s的超时时间
  timeout: 10000,
});

// 2. 配置请求头，全局的 axios 默认值
instance.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'; // 流程组件 content-type
instance.defaults.headers.patch['Content-Type'] = 'application/json;charset=UTF-8'; // 流程组件 content-type

// 3.添加一个请求拦截器
instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 发请求前做的一些处理，数据转化，配置请求头，设置token,设置loading等
    // 每次发送请求之前判断vuex中是否存在token,如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
    const token = store.getState().storeData.userInfo.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    // 设置loading
    message.loading('加载中...', 0);
    // 数据转换,判断数据格式为formdata还是json格式
    // json格式
    config.data = JSON.stringify(config.data);
    return config;
  },
  (error) => {
    // 出现请求错误，清除toast
    message.destroy();
    message.warning('请求错误，请稍后重试');
    console.info('error: ' + error);
    return Promise.reject(error);
  }
);

// 4. 添加一个响应拦截器
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    const { status, data } = response;
    if (status === 200) {
      // 接口网络请求成功，关闭等待提示
      message.destroy();
      if (data.code === 0) {
        // 接口请求结果正确
        return data;
      } else {
        message.error(data.message);
        return Promise.reject(data);
      }
    }
  },
  (error: AxiosError) => {
    // 响应失败，关闭等待提示
    message.destroy();
    // // 超时处理
    if (JSON.stringify(error).includes('Network Error')) {
      message.error('网络超时');
    } else {
      message.error('服务器连接失败');
    }
    console.info(error);
    return Promise.reject(error);
  }
);

// 5. 导出文件
export default instance;
