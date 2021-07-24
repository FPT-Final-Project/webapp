import {
  Row, Form, Input, Button, Divider, Typography, Space, PageHeader,
} from 'antd';
import { Link, useHistory } from 'react-router-dom';
import '../../shared/css/form.scss';
import gg from '../../assets/gg.png';

const { Title } = Typography;
const Login = () => {
  const history = useHistory();

  const functionDirect = () => {
    history.push('/register');
  };

  const functionDirectLogin = (e: any) => {
    e.preventDefault();
    history.push('/');
  };

  const validateEmail = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
  const validatePass = /^.{6,}$/;

  return (
    <>
      <PageHeader title="PSY CARE." />
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
              <Button className="btn-submit" htmlType="submit" onClick={functionDirectLogin}>
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
