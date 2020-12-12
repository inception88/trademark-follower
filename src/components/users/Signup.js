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

class Signup extends Component {

    onFinish = (values) => {
        fetch(`http://localhost:3000/api/v1/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                email: values.email,
                password: values.password
            })
        })
        .then(resp => resp.json())
        .then(json => {
            localStorage.setItem("token", json.jwt)
            console.log(json)
            console.log(this.state)
        })
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
//
//class Signup extends Component {
//
//		state = {
//			email: '',
//			password: '',
//		};
//
//	handleEmailChange = (e) => {
//		this.setState({
//			email: e.target.value,
//		});
//	}
//
//	handlePasswordChange = (e) => {
//		this.setState({
//			password: e.target.value,
//		});
//	}
//
//
//render() {
//  return (
//	  <form className="center" onSubmit={this.onSubmitHandler}>
//
//        <input
//          onChange={this.handleEmailChange}
//          type="email"
//          name="email"
//          placeholder="Email"
//          required
//        />
//          
//        <input
//          onChange={this.handlePasswordChange}
//          type="password"
//          name="password"
//          placeholder="Password"
//          required
//			/>
//      
//        <button type="submit">
//          Create Account
//        </button>
//    </form>
//		);
//	}
//}
export default Signup;