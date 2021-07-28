import React, { useState } from 'react';
import {
  Card, Row, Col, Button,
} from 'antd';
import './style.scss';
import { Link } from 'react-router-dom';

interface Props {}

const Quiz = ({ id, title, description }: any) => (
  <Col span={8} xs={24} sm={12} xl={8} lg={12}>
    <Card hoverable className="card">
      <Row>
        <Col span={24}>
          <div className="image1" />
        </Col>
        <Col span={24}>
          <h2>{title}</h2>
        </Col>
        <Col span={24}>
          <p>{description}</p>
        </Col>
        <Button className="btn-submit">
          <Link to={`/app/quiz/${id}`}>
            Test now
          </Link>
        </Button>
      </Row>
    </Card>
  </Col>
);

export const SelectQuiz: React.FC<Props> = () => {
  const [quizzes, setQuizzes] = useState([
    {
      id: '1',
      type: '2',
      pictureUrl: '',
      title: 'Psychological self-test-for depression',
      description: 'Please choose the answer that suits your situation to check if you are likely to be depressed according to the quiz',
    },
    {
      id: '2',
      type: '2',
      title: 'Psychological self-test-for depression',
      description: 'Please choose the answer that suits your situation to check if you are likely to be depressed according to the quiz',
    },
    {
      id: '3',
      type: '2',
      title: 'Psychological self-test-for depression',
      description: 'Please choose the answer that suits your situation to check if you are likely to be depressed according to the quiz',
    },
  ]);

  return (
    <>
      <div className="quiz-form">
        <Row gutter={[16, 16]}>
          {quizzes.map((quiz) => Quiz(quiz))}
        </Row>
      </div>
    </>
  );
};
