/*
 * @Description: webpack 配置文件
 * @Author: 王振
 * @Date: 2021-09-24 14:22:15
 * @LastEditors: 王振
 * @LastEditTime: 2021-09-24 14:22:55
 */
const { override, fixBabelImports, addWebpackAlias, addLessLoader } = require('customize-cra');
const path = require('path');

module.exports = override(
  // 针对antd 实现按需打包：根据import来打包 (使用babel-plugin-import)
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css', // 自动打包相关的样式 默认为 style:'css'
  }),
  // 配置路径别名
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      localIdentName: '[local]--[hash:base64:5]', // use less-modules
    },
  })
);
