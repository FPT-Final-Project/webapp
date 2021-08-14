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
import Loading from '../../../shared/Loading';

interface Props {
  getQuizzes: () => void;
  quizzes: IQuiz[] | undefined;
}

const Quiz = ({ _id, name, description }: IQuiz, history: any, index: number) => (
  <Col span={8} xs={24} sm={12} xl={8} lg={12} key={_id}>
    <Card hoverable className="card">
      <Row>
        <Col span={24}>
          <div className={`image${index + 1}`} />
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

const Quizzes: React.FC<Props> = ({ getQuizzes, quizzes }: Props) => {
  const history = useHistory();
  const [loadingApi, setLoadingApi] = useState(true);

  if (!quizzes) {
    getQuizzes();
  } else {
    setTimeout(() => {
      setLoadingApi(false);
    }, 500);
  }

  return (
    <>
      <div className="quiz-form">
        {
          loadingApi
            ? (
              <Loading />
            ) : (
              <>
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
                  {(quizzes || []).map((quiz, index) => Quiz(quiz, history, index))}
                </Row>
              </>
            )
        }
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
