import React from 'react';
import {
  Card, Row, Col, Button,
} from 'antd';
import './style.scss';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import quizAction from '../../../stores/actions/quiz.action';
import { IRootState } from '../../../stores/store';
import { IQuiz } from '../../../types/quiz';

interface Props {
  getQuizzes: () => void;
  quizzes: IQuiz[] | undefined;
}

const Quiz = ({ _id, name, description }: IQuiz, history: any) => (
  <Col span={8} xs={24} sm={12} xl={8} lg={12}>
    <Card hoverable className="card">
      <Row>
        <Col span={24}>
          <div className="image1" />
        </Col>
        <Col span={24}>
          <h2>{name}</h2>
        </Col>
        <Col span={24}>
          <p>{description}</p>
        </Col>
        <Button className="btn-submit" onClick={() => history.push(`/quiz/${_id}`)}>
          Test now
        </Button>
      </Row>
    </Card>
  </Col>
);

const Quizzes: React.FC<Props> = ({ getQuizzes, quizzes }: Props) => {
  const history = useHistory();

  if (!quizzes) {
    getQuizzes();
  }

  return (
    <>
      <div className="quiz-form">
        <Row gutter={[16, 16]}>
          {(quizzes || []).map((quiz) => Quiz(quiz, history))}
        </Row>
      </div>
    </>
  );
};

const actionCreators = {
  getQuizzes: quizAction.getQuizzes,
};

const mapState = (state: IRootState) => ({
  quizzes: state.quiz.quizzes,
});

const connectedState = connect(mapState, actionCreators)(Quizzes);

export { connectedState as Quizzes };
