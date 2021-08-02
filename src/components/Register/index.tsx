import React from 'react';
import {
  Row, Form, Input, Button, Divider, Typography, Space, PageHeader, Select,
} from 'antd';
import { Link, useHistory, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import '../../shared/css/form.scss';
import authAction from '../../stores/actions/auth.action';
import gg from '../../assets/gg.png';
import { IUser } from '../../types/user';
import { IRootState } from '../../stores/store';

interface Props {
  register: (id: string, name: string, email: string, password: string, role: string, isTested: boolean) => void;
  user: IUser | undefined;
}

const { Title } = Typography;
const { Option } = Select;
const validateEmail = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
const validatePass = /^.{6,}$/;

const Register: React.FC<Props> = ({ register, user }: Props) => {
  const history = useHistory();
  const { userId } = useParams<{ userId: string }>();

  if (user) {
    history.push('/app/dashboard');
    return (<></>);
  }

  const functionDirect = () => {
    history.push('/login');
  };

  // eslint-disable-next-line max-len
  const handleRegister = ({ name, email, password, role }: { name: string, email: string, password: string, role: string }) => {
    return register(userId, name, email, role, password, !!userId);
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

const mapState = (state: IRootState) => ({
  user: state.authentication.user,
});

const connectedState = connect(mapState, actionCreators)(Register);

export { connectedState as Register };
