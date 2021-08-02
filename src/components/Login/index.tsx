import React from 'react';
import {
  Row, Form, Input, Button, Divider, Typography, Space, PageHeader,
} from 'antd';
import { Link, useHistory } from 'react-router-dom';
import '../../shared/css/form.scss';
import { useDispatch, useSelector } from 'react-redux';
import gg from '../../assets/gg.png';
import authAction from '../../stores/actions/auth.action';
import { IRootState } from '../../stores/store';

const { Title } = Typography;
const validateEmail = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
const validatePass = /^.{6,}$/;

const Login: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state: IRootState) => state.authentication.user);

  if (user) {
    history.push('/app/dashboard');
    return (<></>);
  }
  const functionDirect = () => {
    history.push('/register/new');
  };

  const submit = ({ email, password }: { email: string, password: string }) => {
    dispatch(authAction.login(email, password));
  };

  return (
    <>
      <PageHeader title="PSY CARE." />
      <div className="form">
        <Title className="title" level={2}>Log Into Your Account</Title>
        <Row justify="center">
          <Form layout="vertical" onFinish={submit}>
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
                  required: true,
                  message: 'Please input your Email!',
                },
                {
                  pattern: validateEmail,
                  message: 'The input is not valid E-mail!',
                },
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
                  message: 'Please input your password!',
                },
                {
                  pattern: validatePass,
                  message: 'The input must be least 6 characters in length!',
                },
              ]}
              hasFeedback
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
                <Link to="/resetPass">Forgot login or password?</Link>
              </Space>
            </Row>
          </Form>
        </Row>
      </div>
    </>
  );
};

export default Login;
