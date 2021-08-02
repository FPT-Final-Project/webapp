import React, { useState } from 'react';
import {
  Card, Row, Col, Button,
} from 'antd';
import './style.scss';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import quizAction from '../../../stores/actions/quiz.action';
import { IRootState } from '../../../stores/store';
import { IQuiz } from '../../../types/quiz';

interface Props {
  getQuizzes: () => void;
  quizzes: IQuiz[] | undefined;
}

const Quiz = ({ _id, name, description }: IQuiz, history: any) => {
  return (
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
          <Button className="btn-submit" onClick={() => history.replace(`/quiz/${_id}`)}>
          Test now
          </Button>
        </Row>
      </Card>
    </Col>
  );
};

const Quizzes: React.FC<Props> = ({ getQuizzes, quizzes }: Props) => {
  const history = useHistory();

  if (!quizzes) {
    getQuizzes();
    return (<></>);
  }

  return (
    <>
      <div className="quiz-form">
        <Row className="content">
          <Col span={12} className="col-1">
            <p> 10 SENTENCES QUICK CHECK</p>
          </Col>
          <Col span={12} className="col-2">
            <p>This psychology test helps you diagnose what disease you are suffering from through 10 interesting questions. Join now, it's free</p>
          </Col>
        </Row>
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
