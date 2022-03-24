/*
 * @Description: redux 全局仓库
 * @Author: 王振
 * @Date: 2021-09-24 14:38:57
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-24 14:45:49
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'; // 使用该插件实现数据持久化储存 https://github.com/rt2zz/redux-persist
import storage from 'redux-persist/lib/storage'; // 默认为localStorage for web
import storeData from './reducers';
import thunkMiddleware from 'redux-thunk';

// 数据持久化插件配置
const persistConfig = {
  key: 'root',
  storage,
};
const myPersistReducer = persistReducer(persistConfig, storeData);

// redux中间件配置
const composeEnhancers =
  typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

// 中间件数组
const middlewares = [thunkMiddleware];

// 判断环境是否为开发环境，只有在开发环境中引入redux-logger插件
if (process.env.NODE_ENV === 'development') {
  middlewares.push(require('redux-logger').createLogger()); // 引入redux-logger中间件
}

// 合并中间件数组
const enhancer = composeEnhancers(
  applyMiddleware(...middlewares)
  // other store enhancers if any
);

// 创建store仓库
const store: any = createStore(myPersistReducer, enhancer);

const persistor = persistStore(store);

export { store, persistor };
