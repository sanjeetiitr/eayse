import React,{ Component } from "react";
import { Form, Icon, Input, Button, Checkbox } from 'antd';

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
        <div>
      <Form onSubmit={this.handleSubmit} className="login-form login-p2-ey">
          <h3>Loggen Sie mit Ihrem <br/><span style={{
              color : "#0014C4",
          }}>B&O Account</span> ein</h3>
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
          <a className="login-form-forgot fp-lg-ey" href="" style={{
              textAlign: 'right',
              opacity: 0.4,
                  color: '#000000',
                  fontSize : '0.6rem',
                  paddingRight : '0rem !important',
          }}>
          Passwort vergessen 
          </a>
        </Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button btn-lg-ey">
        Abnahme Beitreten
          </Button>
      </Form>

      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default WrappedNormalLoginForm