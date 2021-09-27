/*
 * @Description: 登录页面
 * @Author: 王振
 * @Date: 2021-09-27 09:00:55
 * @LastEditors: 王振
 * @LastEditTime: 2021-09-27 10:45:46
 */
import React from 'react';
import ReactCanvasNest from 'react-canvas-nest';
import moduleCss from './Login.module.less';
import Logo from '@/assets/img/logo.png';
import actionTypes from '@/store/actionTypes';
import { setStoreData } from '@/store/actions';
import { useHistory } from 'react-router-dom';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Form, Input, Button, message } from 'antd';
import { CommonObject } from '@/types';
import { postLoginAPI } from '@/api/login';
import { useDispatch } from 'react-redux';

const Login: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  // 点击登录
  const onFinish = async (values: CommonObject<string>) => {
    const { userName, password } = values;
    const res = await postLoginAPI({ userName, password });
    if (res.code === 0) {
      // localStorage.setItem('token', res.data.token);
      dispatch(setStoreData(actionTypes.SET_USERINFO.name, res.data));
      message.success('登录成功');
      history.push('/');
    }
  };

  return (
    <div className={moduleCss.login_layout}>
      <ReactCanvasNest
        config={{
          pointColor: '110,65,255',
          lineColor: '110,65,255',
          pointOpacity: 0.6,
        }}
        style={{ zIndex: 1 }}
      />
      <div className={moduleCss.logo_box}>
        <img alt="" className={moduleCss.logo} src={Logo} />
        <span className={moduleCss.logo_name}>XX后台管理系统</span>
      </div>
      <Form className={moduleCss.login_form} name="login-form" onFinish={onFinish}>
        <Form.Item name="userName" rules={[{ required: true, message: '请输入用户名' }]}>
          <Input placeholder="用户名" prefix={<UserOutlined />} size="large" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}
          extra="用户名：admin 密码：123456"
        >
          <Input.Password placeholder="密码" prefix={<LockOutlined />} size="large" />
        </Form.Item>
        <Form.Item>
          <Button
            className={moduleCss.login_form_button}
            htmlType="submit"
            size="large"
            type="primary"
          >
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
