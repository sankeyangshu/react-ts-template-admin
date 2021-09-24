/*
 * @Description: state 文件
 * @Author: 王振
 * @Date: 2021-09-24 14:41:36
 * @LastEditors: 王振
 * @LastEditTime: 2021-09-24 14:41:42
 */

export interface StoreState {
  userInfo: {
    userName: string;
    permission: string[];
    token: string;
  };
  collapsed: boolean;
  curTab: string[];
  theme: string;
  reloadPath: string;
}

export const initState: StoreState = {
  userInfo: {
    userName: '',
    permission: [],
    token: '',
  }, // 用户信息
  collapsed: false, // 菜单收纳状态
  curTab: [], // 当前tab页面
  theme: '', // 网站主题
  reloadPath: 'null', // 需要刷新的tab路径
};
