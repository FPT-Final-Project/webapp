import Header from '../Header';
// import { MouseEvent } from "react";
import { Row, Form, Input, Button, Divider, Typography, Space } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import '../../shared/css/form.scss';
import gg from '../../assets/gg.png';

const { Title } = Typography;
const Login = () => {
  let history = useHistory();

  const functionDirect = () => {
    history.push('/register');
  }

  const functionDirectLogin = (e: any) => {
    e.preventDefault();
    history.push('/');
  }

  const validateEmail = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
  const validatePass = /^.{6,}$/;

  return (
    <>
      <Header />
      <div className="form">
        <Title className="title" level={2}>Log Into Your Account</Title>
        <Row justify="center">
          <Form layout="vertical">
            <Row className="row" justify="space-around">
              <Space align="center">
                Don't have an account yet?
                <Button className="btn-redirect" onClick={functionDirect}>Register</Button>
              </Space>
            </Row>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  pattern: validateEmail,
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your Email!'
                }
              ]}
            >
              <Input style={{ borderRadius: '8px' }} />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!'
                },
                {
                  pattern: validatePass,
                  message: 'The input must be least 6 characters in length!',
                }
              ]}
              hasFeedback
            >
              <Input.Password style={{ borderRadius: '8px' }} />
            </Form.Item>

            <Form.Item>
              <Button className="btn-submit" htmlType="submit" onClick={functionDirectLogin} >
                LOGIN
              </Button>
            </Form.Item>
            <Divider plain>or login with</Divider>
            <Form.Item>
              <Link to="/login">
                <img src={gg} className="gg" alt="google" />
              </Link>
            </Form.Item>
            <Row justify="space-around">
              <Space>
                <Link to="/reset">Forgot login or password?</Link>
              </Space>
            </Row>
          </Form>
        </Row>
      </div>
    </>
  );
}

export default Login;
