/* eslint-disable no-nested-ternary */
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
  // const picturesURL = [
  //   '../../../assets/imageDepression.jpg',
  //   '../../../assets/imageAuxious.jpg',
  //   '../../../assets/imageStress.jpg',
  // ];
  return (
    <Col span={8} xs={24} sm={12} xl={8} lg={12} key={_id}>
      <Card hoverable className="card">
        <Row>
          <Col span={24}>
            {name.includes('depression') ? (<div className="image1" />) : name.includes('Anxious') ? (<div className="image2" />) : (<div className="image3" />)}
          </Col>
          <Col span={24}>
            <h2>{name}</h2>
          </Col>
          <Col span={24}>
            <p>{description}</p>
          </Col>
          <Button className="btn-submit-test" onClick={() => history.replace(`/quiz/${_id}`)}>
          Let's test now
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
        <div className="banner-quiz">
          <div className="banner-quiz__left ">
            <div className="banner-quiz__left--number">9</div>
            <div className="banner-quiz__left--text">
              <div className="left--top">Sentences</div>
              <div className="left--bottom">Quick Check</div>
            </div>
          </div>
          <div className="banner-quiz__description">This psychology test helps you diagnose what disease you are suffering from through 10 interesting questions.
            <br /><span>Join now, it's free.</span>
          </div>
        </div>
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
