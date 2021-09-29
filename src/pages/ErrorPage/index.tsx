/*
 * @Description: 错误页面
 * @Author: 王振
 * @Date: 2021-09-28 10:04:34
 * @LastEditors: 王振
 * @LastEditTime: 2021-09-28 10:04:35
 */
import React from 'react';
import { Result } from 'antd';

const ErrorPage = () => {
  return (
    <Result
      style={{ height: '100%' }}
      status="403"
      title="403"
      subTitle="抱歉，您无权访问此页面，如有疑问请联系管理员！"
    />
  );
};

export default ErrorPage;
