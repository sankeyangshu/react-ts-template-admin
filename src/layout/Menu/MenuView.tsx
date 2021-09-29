/*
 * @Description: 默认模版-侧边导航组件
 * @Author: 王振
 * @Date: 2021-09-27 16:04:04
 * @LastEditors: 王振
 * @LastEditTime: 2021-09-28 15:56:16
 */
import React, { useState, useEffect, useCallback } from 'react';
import moduleCss from './MenuView.module.less';
import logo from '@/assets/img/logo.png';
import menus from '@/config/menu';
import MyIconFont from '@/components/MyIconFont';
// import Icon from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useSelector } from '@/store/hooks';
import { Link, useLocation } from 'react-router-dom';
import { CommonObject } from '@/types';
import { getKeyName, flattenRoutes } from '@/utils/toolFunc';

const { Sider } = Layout;
const { SubMenu } = Menu;
const flatMenu = flattenRoutes(menus);

type MenuType = CommonObject<string>;

const MenuView = () => {
  const collapsed = useSelector((state) => state.storeData.collapsed); // 从redux中获取菜单收纳状态
  const theme = useSelector((state) => state.storeData.theme); // 从redux中获取主题色
  // const { permission = [] } = useSelector((state) => state.storeData.userInfo);
  const { pathname } = useLocation(); // 获取路径
  const { tabKey: curKey = 'home' } = getKeyName(pathname); // 根据路径获取路由的name和key
  const [current, setCurrent] = useState(curKey);

  // 递归逐级向上获取最近一级的菜单，并高亮
  const higherMenuKey = useCallback(
    (checkKey = 'home', path = pathname) => {
      const higherKey = checkKey;
      if (checkKey === '403' || flatMenu.some((item: MenuType) => item.key === checkKey)) {
        return higherKey;
      }
      const higherPath = path.match(/(.*)\//g)[0].replace(/(.*)\//, '$1');
      const { tabKey } = getKeyName(higherPath);
      return higherMenuKey(tabKey, higherPath);
    },
    [pathname]
  );

  useEffect(() => {
    const { tabKey } = getKeyName(pathname);
    const higherKey = higherMenuKey(tabKey);
    setCurrent(higherKey);
  }, [higherMenuKey, pathname]);

  // 菜单点击事件
  const handleClick = ({ key }): void => {
    setCurrent(key);
  };

  // 子菜单的标题
  const subMenuTitle = (data: MenuType) => {
    const { icon: MenuIcon, iconfont } = data;
    return (
      <span>
        {iconfont ? (
          <MyIconFont type={iconfont} style={{ fontSize: '14px' }} />
        ) : (
          !!MenuIcon && <MenuIcon />
        )}
        <span>{data.name}</span>
      </span>
    );
  };

  // 递归渲染多级菜单
  const renderMenu = (data) =>
    data.map((item) => {
      if (item.routes) {
        return (
          <SubMenu key={item.path} title={subMenuTitle(item)}>
            {renderMenu(item.routes)}
          </SubMenu>
        );
      }

      return (
        <Menu.Item key={item.path} title={data.name}>
          <Link to={item.path}>{subMenuTitle(item)}</Link>
        </Menu.Item>
      );
    });

  return (
    <Sider
      trigger={null}
      theme={theme === 'default' ? 'dark' : 'light'}
      collapsible
      collapsed={collapsed}
    >
      <Link to={{ pathname: '/' }}>
        <div className={moduleCss.logo}>
          <img src={logo} className={moduleCss.logo_img} alt="logo" />
          {!collapsed && <span className={moduleCss.logo_title}>后台管理系统</span>}
        </div>
      </Link>

      <Menu
        theme={theme === 'default' ? 'dark' : 'light'}
        mode="inline"
        selectedKeys={[current]}
        onClick={handleClick}
      >
        {renderMenu(menus)}
      </Menu>
    </Sider>
  );
};

export default MenuView;
