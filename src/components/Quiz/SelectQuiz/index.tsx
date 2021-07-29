import React, { useState } from 'react';
import {
  Card, Row, Col, Button,
} from 'antd';
import './style.scss';
<<<<<<< HEAD
import { Link } from 'react-router-dom';

interface Props {}

const Quiz = ({ id, title, description }: any) => (
=======
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import quizAction from '../../../stores/actions/quiz.action';
import { IRootState } from '../../../stores/store';
import { IQuiz } from '../../../types/quiz';

interface Props {
  getQuizzes: () => void;
  quizzes: IQuiz[] | undefined;
}

const Quiz = ({ _id, name, description }: IQuiz, history: any) => (
>>>>>>> develop
  <Col span={8} xs={24} sm={12} xl={8} lg={12}>
    <Card hoverable className="card">
      <Row>
        <Col span={24}>
          <div className="image1" />
        </Col>
        <Col span={24}>
<<<<<<< HEAD
          <h2>{title}</h2>
=======
          <h2>{name}</h2>
>>>>>>> develop
        </Col>
        <Col span={24}>
          <p>{description}</p>
        </Col>
<<<<<<< HEAD
        <Button className="btn-submit">
          <Link to={`/app/quiz/${id}`}>
            Test now
          </Link>
=======
        <Button className="btn-submit" onClick={() => history.push(`/quiz/${_id}`)}>
          Test now
>>>>>>> develop
        </Button>
      </Row>
    </Card>
  </Col>
);

<<<<<<< HEAD
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
=======
const Quizzes: React.FC<Props> = ({ getQuizzes, quizzes }: Props) => {
  const history = useHistory();

  if (!quizzes) {
    getQuizzes();
    return (<></>);
  }
>>>>>>> develop

  return (
    <>
      <div className="quiz-form">
        <Row gutter={[16, 16]}>
<<<<<<< HEAD
          {quizzes.map((quiz) => Quiz(quiz))}
=======
          {(quizzes || []).map((quiz) => Quiz(quiz, history))}
>>>>>>> develop
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
