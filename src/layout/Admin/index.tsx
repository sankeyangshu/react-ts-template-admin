/*
 * @Description: 默认模版
 * @Author: 王振
 * @Date: 2021-09-27 13:15:34
 * @LastEditors: 王振
 * @LastEditTime: 2021-09-28 09:23:35
 */
import React from 'react';
import moduleCss from './Admin.module.less';
import Header from '@/layout/Header';
import MenuView from '@/layout/Menu';
import { Layout } from 'antd';

const { Content, Footer } = Layout;

const Admin: React.FC = ({ children }) => {
  return (
    <Layout className={moduleCss.layout}>
      {/* 侧边导航 开始 */}
      <MenuView />
      {/* 侧边导航 结束 */}
      <Layout className={moduleCss.site_layout}>
        {/* 头部导航 开始 */}
        <Header />
        {/* 头部导航 结束 */}
        {/* 内容区域 开始 */}
        <Content className={moduleCss.site_layout_content}>
          <div className={moduleCss.content_background}>{children}</div>
        </Content>
        {/* 内容区域 结束 */}
        <Footer className={moduleCss.site_layout_footer}>后台管理系统 ©2021 三棵杨树</Footer>
      </Layout>
    </Layout>
  );
};

export default Admin;
