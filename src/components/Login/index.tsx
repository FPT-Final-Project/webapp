import {
  Row, Form, Input, Button, Divider, Typography, Space, PageHeader,
} from 'antd';
import { useState } from 'react';
import {
  Link, useHistory, useLocation,
} from 'react-router-dom';
import { fakeAuth } from '../../utils/fakeAuth';
import '../../shared/css/form.scss';
import gg from '../../assets/gg.png';

const { Title } = Typography;

const Login = () => {
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  const history = useHistory();

  const functionDirect = () => {
    history.push('/register');
  };
  const { state }: { state: any} = useLocation();
  const login = () => fakeAuth.authenticate(() => {
    setRedirectToReferrer(true);
  });
  const onFinish = () => {
    if (redirectToReferrer) {
      history.push('/app');
    }
  };
  return (
    <>
      <PageHeader title="PSY CARE." />
      <div className="form">
        <Title className="title" level={2}>Log Into Your Account</Title>
        <Row justify="center">
          <Form layout="vertical" onFinish={onFinish} onClick={login}>
            <Row className="row" justify="space-around">
              <Space align="center">
                Don't have an account yet?
                <Button className="btn-redirect" onClick={functionDirect}>Register</Button>
              </Space>
            </Row>

            <Form.Item
              label="Email or Phone number"
              name="username"
              rules={[{
                required: true,
                message: 'Please input your Email or Phone number!',
              }]}
            >
              <Input style={{ borderRadius: '8px' }} />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password style={{ borderRadius: '8px' }} />
            </Form.Item>

            <Form.Item>
              <Button className="btn-submit" htmlType="submit">
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
};

export default Login;
