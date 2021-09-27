/*
 * @Description: 首页
 * @Author: 王振
 * @Date: 2021-09-27 08:53:33
 * @LastEditors: 王振
 * @LastEditTime: 2021-09-27 11:30:53
 */
import React from 'react';
import moduleCss from './Home.module.less';

const Home = () => {
  return (
    <div className={moduleCss.basic_layout}>
      <div className={moduleCss.nav_side}></div>
      <div className={moduleCss.content_right}>
        <div className={moduleCss.nav_top}>
          <div className={moduleCss.bread}>面包屑</div>
          <div className={moduleCss.user_info}>用户</div>
        </div>
        <div className={moduleCss.wrapper}></div>
      </div>
    </div>
  );
};

export default Home;
