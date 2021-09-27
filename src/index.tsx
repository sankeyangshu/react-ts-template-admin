/*
 * @Description: 项目入口文件
 * @Author: 王振
 * @Date: 2021-09-24 13:52:29
 * @LastEditors: 王振
 * @LastEditTime: 2021-09-27 11:14:55
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@/assets/css/reset.css';
import { Provider } from 'react-redux';
import { store, persistor } from '@/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
