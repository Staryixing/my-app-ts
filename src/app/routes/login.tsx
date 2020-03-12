import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import style from './login.less';
import CommonType from './data.d';

interface IProps extends CommonType{
  name: string;
}
interface IState {
  name: string;
  age: number;
}

class Login extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      name: "yx",
      age: 1
    };
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={style.root}>
          <Form className={style.login_form}>
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(<Checkbox>Remember me</Checkbox>)}
              <a className={style.login_form_forgo} href="">
                Forgot password
              </a>
              <Button type="primary" htmlType="submit" className={style.login_form_button}>
                Log in
              </Button>
            </Form.Item>
          </Form>
      </div>
    );
  }
}

const WrapppedLogin = Form.create({})(Login)
export default WrapppedLogin;
