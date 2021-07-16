import {
  Row, Form, Input, Button, Divider, Typography, Space, PageHeader,
} from 'antd';
import { Link, useHistory } from 'react-router-dom';
import '../../shared/css/form.scss';
import gg from '../../assets/gg.png';

const { Title } = Typography;

const SignUp = () => {
  const history = useHistory();
  const functionDirect = () => {
    history.push('/login');
  };

  return (
    <>
      <PageHeader title="PSY CARE." />
      <div className="form">
        <Title className="title" level={2}>Create Your Account</Title>
        <Row justify="center">
          <Form className="formSignIn" layout="vertical">
            <Row className="row" justify="space-around">
              <Space align="center">
                Already have an account ?
                <Button className="btn-login" onClick={functionDirect}>Login</Button>
              </Space>
            </Row>

            <Form.Item
              label="Fullname"
              name="fullname"
              rules={[{
                required: true,
                message: 'Please input you Fullname!',
              }]}
            >
              <Input style={{ borderRadius: '8px' }} />
            </Form.Item>

            <Form.Item
              label="Email or Phone number"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your Email or Phone number!',
                },
              ]}
            >
              <Input style={{ borderRadius: '8px' }} />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{
                required: true,
                message: 'Please input your password!',
              }]}
            >
              <Input.Password style={{ borderRadius: '8px' }} />
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
                <Link to="/reset">Forgot login or password?</Link>
              </Space>
            </Row>
          </Form>
        </Row>
      </div>
    </>
  );
};

export default SignUp;
