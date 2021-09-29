/*
 * @Description: 默认模版-头部导航组件
 * @Author: 王振
 * @Date: 2021-09-27 14:22:52
 * @LastEditors: 王振
 * @LastEditTime: 2021-09-28 10:31:00
 */
import React, { useState } from 'react';
import moduleCss from './Header.module.less';
import actionTypes from '@/store/actionTypes';
import { Layout, Breadcrumb, Badge, Dropdown, Menu } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, BellOutlined } from '@ant-design/icons';
import { setStoreData } from '@/store/actions';
import { useDispatch } from 'react-redux';

const Header = () => {
  const { Header } = Layout;
  const [collapsed, setCollapsed] = useState(false); // 当前收起状态
  const dispatch = useDispatch();

  // 展开-收起时的回调函数
  const toggle = () => {
    setCollapsed(!collapsed);
    dispatch(setStoreData(actionTypes.SET_COLLAPSED.name, !collapsed));
  };

  // 退出登录
  const logout = () => {
    dispatch(setStoreData(actionTypes.SET_USERINFO.name, {}));
  };

  // 切换主题色
  const changeTheme = (themes: string) => {
    dispatch(setStoreData(actionTypes.SET_THEME.name, themes));
  };

  // 用户信息操作菜单
  const menu = (
    <Menu>
      <Menu.Item onClick={logout} key="1">
        <span>退出登录</span>
      </Menu.Item>
    </Menu>
  );

  // 用户修改主题色
  const changeMenu = (
    <Menu>
      <Menu.Item onClick={() => changeTheme('default')}>
        <span>暗黑主题</span>
      </Menu.Item>
      <Menu.Item onClick={() => changeTheme('')}>
        <span>亮白主题</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <Header className={moduleCss.layout_header}>
      <div className={moduleCss.header_left}>
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: moduleCss.trigger,
          onClick: toggle,
        })}
        <Breadcrumb className={moduleCss.bread}>
          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className={moduleCss.header_right}>
        <Badge dot className={moduleCss.bellOut}>
          <BellOutlined style={{ fontSize: 20 }} />
        </Badge>
        <Dropdown overlay={changeMenu}>
          <div title="更换主题" className={moduleCss.theme} />
        </Dropdown>
        <Dropdown className={moduleCss.avart} overlay={menu}>
          <span className={moduleCss.avart_user}>
            <span>三棵杨树</span>
          </span>
        </Dropdown>
      </div>
    </Header>
  );
};

export default Header;
