/*
 * @Description: 全局根组件
 * @Author: 王振
 * @Date: 2021-09-24 13:52:29
 * @LastEditors: 王振
 * @LastEditTime: 2021-09-27 10:10:57
 */
import React from 'react';
import routes from '@/router';
import { HashRouter, Switch } from 'react-router-dom';
import FrontendAuth from '@/components/FrontendAuth';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        {/* 使用高阶组件实现路由守卫功能 */}
        <FrontendAuth config={routes} />
      </Switch>
    </HashRouter>
  );
};

export default App;
