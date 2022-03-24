/*
 * @Description: 默认模版-头部导航组件
 * @Author: 王振
 * @Date: 2021-09-27 14:22:52
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-24 19:53:10
 */
import React, { useEffect, useState } from 'react';
import { Layout, Dropdown, Menu, Avatar } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
} from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { logout as userLogout } from '@/store/actions/user';
import { setCollapsed as setCollapse, setTheme } from '@/store/actions/app';
import moduleCss from './Header.module.less';
import BreadCrumbs from '@/layout/BreadCrumbs';
import screenfull from 'screenfull';

const Header = () => {
  const { Header } = Layout;
  const [collapsed, setCollapsed] = useState(false); // 当前收起状态
  const [isFullscreen, setIsFullscreen] = useState(false); // 是否全屏
  const dispatch = useDispatch();

  // 展开-收起时的回调函数
  const toggle = () => {
    setCollapsed(!collapsed);
    dispatch(setCollapse(!collapsed));
  };

  // 监听 screenfull 变化
  const change = () => {
    if (screenfull.isEnabled) {
      setIsFullscreen(screenfull.isFullscreen);
    }
  };

  // 全屏切换
  const onChangeScreen = () => {
    if (screenfull.isEnabled) {
      screenfull.toggle();
    }
  };

  useEffect(() => {
    // 组件挂载时调用
    if (screenfull.isEnabled) {
      // 设置侦听器
      screenfull.on('change', change);
    }

    return () => {
      // 组件卸载时调用
      if (screenfull.isEnabled) {
        // 删除侦听器
        screenfull.off('change', change);
      }
    };
  }, []);

  // 退出登录
  const logout = () => {
    dispatch(userLogout());
  };

  // 切换主题色
  const changeTheme = (themes: string) => {
    dispatch(setTheme(themes));
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
        <BreadCrumbs></BreadCrumbs>
      </div>
      <div className={moduleCss.header_right}>
        <div className={moduleCss.screenFull}>
          {React.createElement(isFullscreen ? FullscreenExitOutlined : FullscreenOutlined, {
            className: moduleCss.fullIcon,
            onClick: onChangeScreen,
          })}
        </div>
        <Dropdown overlay={changeMenu}>
          <div title="更换主题" className={moduleCss.theme} />
        </Dropdown>
        <Dropdown className={moduleCss.avart} overlay={menu}>
          <span className={moduleCss.avart_user}>
            <Avatar
              shape="square"
              size={40}
              src="https://joeschmoe.io/api/v1/random"
              icon={<UserOutlined />}
            />
          </span>
        </Dropdown>
      </div>
    </Header>
  );
};

export default Header;
