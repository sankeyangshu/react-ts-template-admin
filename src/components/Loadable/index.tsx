/*
 * @Description: 组件懒加载
 * @Author: 王振
 * @Date: 2022-03-25 15:24:54
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-25 15:36:07
 */

import React, { useEffect } from 'react';
import Loadable from 'react-loadable';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const useLoadingComponent = () => {
  useEffect(() => {
    NProgress.start();
    return () => {
      NProgress.done();
    };
  }, []);

  return <div />;
};

export default (loader, loading = useLoadingComponent) => {
  return Loadable({
    loader,
    loading,
  });
};
