/*
 * @Description: redux 全局仓库
 * @Author: 王振
 * @Date: 2021-09-24 14:38:57
 * @LastEditors: 王振
 * @LastEditTime: 2021-09-24 14:39:30
 */

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'; // 使用该插件实现数据持久化储存 https://github.com/rt2zz/redux-persist
import storage from 'redux-persist/lib/storage'; // 默认为localStorage for web
import storeData from './reducers';
import reduxLogger from 'redux-logger';

// 把一个由多个不同 reducer 函数作为 value 的 object，合并成一个最终的 reducers 函数
const reducers = combineReducers({
  storeData,
});

const persistConfig = {
  key: 'root',
  storage,
};

const myPersistReducer = persistReducer(persistConfig, reducers);

// 创建store仓库
const store: any = createStore(myPersistReducer, applyMiddleware(reduxLogger));

const persistor = persistStore(store);

export { store, persistor };
