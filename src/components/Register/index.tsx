import {
  Row, Form, Input, Button, Divider, Typography, Space, PageHeader, Select,
} from 'antd';
import { Link, useHistory } from 'react-router-dom';
import '../../shared/css/form.scss';

import { connect } from 'react-redux';
import authAction from '../../stores/actions/auth.action';
import gg from '../../assets/gg.png';

const { Title } = Typography;
const { Option } = Select;
const validateEmail = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
const validatePass = /^.{6,}$/;

const Register = ({ register }: { register: Function }) => {
  const history = useHistory();

  const functionDirect = () => {
    history.push('/login');
  };

  // eslint-disable-next-line max-len
  const handleRegister = ({ name, email, password, role }: { name: string, email: string, password: string, role: string }) => {
    return register(name, email, role, password);
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
                  message: 'The input must be least 6 characters in length!',
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

const actionCreators = {
  register: authAction.register,
};

const connectedState = connect(null, actionCreators)(Register);

export { connectedState as Register };
