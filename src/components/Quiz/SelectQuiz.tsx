import { Card, Row, Col, Button } from 'antd';
import './SelectQuiz.scss';

function SelectQuiz() {
    return (
        <>
            <div className="quiz-form">
                <Row gutter={[16, 16]}>
                    <Col span={8} xs={24} sm={12} xl={8} lg={12} >
                        <Card hoverable className="card">
                            <Row>
                                <Col span={24}>
                                    <div className="image1"></div>
                                </Col>
                                <Col span={24}>
                                    <h2>Psychological self-test-for depression</h2>
                                </Col>
                                <Col span={24}>
                                    <p>Please choose the answer that suits your situation to check if you are likely to be depressed according to the quiz</p>
                                </Col>
                                <Button className="btn-submit" htmlType="submit">
                                    Test now
                                </Button>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={8} xs={24}  sm={12} xl={8} lg={12} >
                        <Card hoverable className="card">
                            <Row>
                                <Col span={24}>
                                    <div className="image2"></div>
                                </Col>
                                <Col span={24}>
                                    <h2>Psychological self-test-for depression</h2>
                                </Col>
                                <Col span={24}>
                                    <p>Please choose the answer that suits your situation to check if you are likely to be depressed according to the quiz</p>
                                </Col>
                                <Button className="btn-submit" htmlType="submit">
                                    Test now
                                </Button>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={8} xs={24} sm={12} xl={8} lg={12}>
                        <Card hoverable className="card">
                            <Row>

                                <Col span={24}>
                                    <div className="image3"></div>
                                </Col>
                                <Col span={24}>
                                    <h2>Psychological self-test-for depression</h2>
                                </Col>
                                <Col span={24}>
                                    <p>Please choose the answer that suits your situation to check if you are likely to be depressed according to the quiz</p>
                                </Col>
                                <Button className="btn-submit" htmlType="submit">
                                    Test now
                                </Button>
                            </Row>
                        </Card>
                    </Col>

                </Row>

            </div>
        </>
    );
}
export default SelectQuiz;