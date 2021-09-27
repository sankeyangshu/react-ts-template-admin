/*
 * @Description: 默认模版
 * @Author: 王振
 * @Date: 2021-09-27 13:15:34
 * @LastEditors: 王振
 * @LastEditTime: 2021-09-27 14:56:38
 */
import React from 'react';
import moduleCss from './Admin.module.less';
import logo from '@/assets/img/logo.png';
import Header from '@/layout/Header';
import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useSelector } from '@/store/hooks';

const Admin = () => {
  const { Content, Footer, Sider } = Layout;
  const { SubMenu } = Menu;
  const collapsed = useSelector((state) => state.storeData.collapsed); // 从redux中获取菜单收纳状态

  return (
    <Layout className={moduleCss.layout}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className={moduleCss.logo}>
          <img src={logo} className={moduleCss.logo_img} alt="logo" />
          {!collapsed && <span className={moduleCss.logo_title}>后台管理系统</span>}
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="User">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />}>
            Files
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className={moduleCss.site_layout}>
        <Header></Header>
        <Content className={moduleCss.site_layout_content}>
          <div className={moduleCss.content_background}>内容区域</div>
        </Content>
        <Footer className={moduleCss.site_layout_footer}>后台管理系统 ©2021 三棵杨树</Footer>
      </Layout>
    </Layout>
  );
};

export default Admin;
