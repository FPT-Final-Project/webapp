import {
  Row, Form, Button, Typography, Space, Input, PageHeader,
} from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';
import '../../shared/css/form.scss';

const { Title } = Typography;
const NewPass = () => {
  const history = useHistory();
  const functionDirect = () => {
    history.push('/register');
  };

  return (
    <>
      <PageHeader title="PSY CARE." />
      <div className="form">
        <Title className="title" level={2}>Reset Password</Title>
        <Row justify="center">
          <Form layout="vertical">
            <Row className="row" justify="space-around">
              <Space align="center">
                Don't have an account yet?
                <Button onClick={functionDirect}>Register</Button>
              </Space>
            </Row>

            <p>Please enter your registered email address to reset your password </p>

            <Form.Item
              label="New Password"
              name="password"
              rules={[{
                required: true,
                message: 'Please input new password!',
              }]}
            >
              <Input.Password style={{ borderRadius: '8px' }} />
            </Form.Item>
            <Form.Item>
              <Button className="btn-submit" htmlType="submit">
                RESET PASSWORD
              </Button>
            </Form.Item>

            <Row justify="space-around">
              <Space>
                <Link to="/login" style={{ color: 'black' }}>
                  <LeftOutlined />
                  {' '}
                  Back to Login
                </Link>
              </Space>
            </Row>
          </Form>
        </Row>
      </div>
    </>
  );
};

export default NewPass;
