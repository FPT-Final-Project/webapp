import React from 'react';
import {
  Row, Form, Input, Button, Divider, Typography, Space, PageHeader, Select,
} from 'antd';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../../shared/css/form.scss';
import authAction from '../../stores/actions/auth.action';
import gg from '../../assets/gg.png';
import { IRootState } from '../../stores/store';

const { Title } = Typography;
const { Option } = Select;
const validateEmail = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
const validatePass = /^.{8,}$/;

const Register: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  let { userId } = useParams<{ userId: string }>();
  const user = useSelector((state: IRootState) => state.authentication.user);

  if (user) {
    history.push('/app/dashboard');
    return (<></>);
  }

  const functionDirect = () => {
    history.push('/login');
  };

  // eslint-disable-next-line max-len
  const handleRegister = ({ name, email, password, role }: { name: string, email: string, password: string, role: string }) => {
    if (userId === 'new') {
      userId = '';
    }
    dispatch(authAction.register(userId, name, email, role, password, !!userId));
  };

  return (
    <>
      <PageHeader title="PSY CARE." />
      <div className="form">
        <Title className="title" level={2}>Create Your Account</Title>
        <Row justify="center">
          <Form className="formSignIn" layout="vertical" onFinish={handleRegister}>
            <Row className="row" justify="space-around">
              <Space align="center">
                Already have an account ?
                <Button className="btn-login" onClick={functionDirect}>Login</Button>
              </Space>
            </Row>

            <Form.Item
              label="Fullname"
              name="name"
              rules={[{
                required: true,
                message: 'Please input you Fullname!',
              }]}
            >
              <Input style={{ borderRadius: '8px' }} />
            </Form.Item>

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
                  message: 'The input must be least 8 characters in length!',
                },
              ]}
              hasFeedback
            >
              <Input.Password style={{ borderRadius: '8px' }} />
            </Form.Item>

            <Form.Item
              label="Role"
              name="role"
              rules={[{
                required: true,
                message: 'Please select your role!',
              }]}
            >
              <Select style={{ borderRadius: '8px', textAlign: 'left' }}>
                <Option value="patient">Patient</Option>
                <Option value="doctor">Doctor</Option>
              </Select>
            </Form.Item>

            <Form.Item>
              <Button className="btn-submit" id="bt" htmlType="submit">
                REGISTER
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

export default Register;
