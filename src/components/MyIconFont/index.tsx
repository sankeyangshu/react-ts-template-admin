/*
 * @Description: 自定义icon
 * @Author: 王振
 * @Date: 2021-09-28 15:18:09
 * @LastEditors: 王振
 * @LastEditTime: 2021-09-28 15:18:11
 */
import { createFromIconfontCN } from '@ant-design/icons';

const MyIconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1830242_6vhnrbj73u5.js', // 在 iconfont.cn 上生成
});

export default MyIconFont;
