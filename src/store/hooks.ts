/*
 * @Description: 使用hooks链接redux
 * @Author: 王振
 * @Date: 2021-09-24 14:40:46
 * @LastEditors: 王振
 * @LastEditTime: 2021-09-24 14:41:08
 */

import { useSelector as useReduxSelector, TypedUseSelectorHook } from 'react-redux';
import { StoreState } from './state';
import { ReduxProps } from '@/types';

export const useSelector: TypedUseSelectorHook<ReduxProps<StoreState>> = useReduxSelector;
