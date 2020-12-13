import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

class Login extends Component {

    onFinish = (user) => {
        this.props.login(user)
    };
    
    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

  render() {
      return (
    <Form 
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={this.onFinish}
      onFinishFailed={this.onFinishFailed}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input a valid email!',
            type: "email"
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item 
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Password must be at least 6 characters!',
            min: 6
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
};
export default Login;