/*
 * @Description: 系统工具函数
 * @Author: 王振
 * @Date: 2022-03-24 17:24:09
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-24 17:25:56
 */

import { TOKEN_TIMEOUT_VALUE } from '@/store/actionTypes/user';
import { useSelector } from '@/store/hooks';

/**
 * 是否超时
 */
export function isCheckTimeout() {
  // 当前时间戳
  const currentTime = Date.now();
  // 获取缓存时间戳
  const timeStamp = useSelector((state) => state.userReducer.timeStamp);
  return currentTime - timeStamp > TOKEN_TIMEOUT_VALUE;
}
