import Header from '../Header';
import { Row, Form, Button, Typography, Space } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';
import './Reset.css';

const { Title } = Typography;
const Reset = () => {
    let history = useHistory();
    const functionDirect = () => {
        history.push('/signup');
    }
    return (
        <>
            <Header />
            <div className="form ">
                <Title className="title" level={2} >Reset Password</Title>
                <Row justify="center">

                    <Form className="formReset" layout="vertical">
                        <Row className="row" justify="space-around">
                            <Space align="center">
                                Don't have an account yet?
                                <Button onClick={functionDirect} >Signup</Button>
                            </Space>
                        </Row>

                        <p>
                            An email with a instrution how to resset your password has been sent to
                            <span> datle31399@gmail.com</span>
                        </p>

                        <Row justify="space-around">
                            <Space >
                                <Link to="/login" style={{ color: "black" }}>
                                    {<LeftOutlined />} Back to Login
                                </Link>
                            </Space>
                        </Row>

                    </Form>
                </Row>
            </div>
        </>
    )
}
export default Reset