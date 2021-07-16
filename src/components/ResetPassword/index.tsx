import {
  Row, Form, Button, Typography, Space, PageHeader,
} from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';
import '../../shared/css/form.scss';

const { Title } = Typography;
const Reset = () => {
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

            <p>
              An email with a instrution how to resset your password has been sent to
              <span> datle31399@gmail.com</span>
            </p>

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
export default Reset;
