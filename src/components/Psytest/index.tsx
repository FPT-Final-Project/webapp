/* eslint-disable jsx-a11y/click-events-have-key-events */
import { faArrowLeft, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import quizService from '../../services/quiz.service';
import quizAction from '../../stores/actions/quiz.action';
import { IRootState } from '../../stores/store';
import { IQuestion } from '../../types/question';
import { IQuiz } from '../../types/quiz';
import { IUser } from '../../types/user';
import AvatarModal from '../Modals/Avatar';
import './style.scss';
// import { Tests } from './tests';

interface Props {
  getQuestions: (quizId: string) => void;
  getQuizzes: () => void;
  quizzes: IQuiz[] | undefined;
  questions: IQuestion[] | undefined;
  user: IUser | undefined;
}

const getResultOfTest = (score: number) => {
  if (score <= 4) return 'Normal';
  if (score <= 9) return 'A little bit';
  if (score <= 14) return 'Little';
  if (score <= 19) return 'Immediate';

  return 'Hard';
};

const PsyTest: React.FC<Props> = ({ getQuestions, getQuizzes, quizzes, questions, user }: Props) => {
  const history = useHistory();
  const [score, setScore] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const { quizId } = useParams<{ quizId: string }>();

  if (!quizzes) {
    getQuizzes();
    return (<></>);
  }

  if (!questions) {
    getQuestions(quizId);
    return (<></>);
  }

  const quiz = quizzes.find((q) => q._id === quizId);

  const handleAnswerButtonClick = (mark: number) => {
    setScore(score + mark);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setLoading(true);
      setTimeout(() => {
        setCurrentQuestion(nextQuestion);
        setLoading(false);
      }, 400);
    } else {
      const userId = user ? user._id : uuid();
      quizService.createQuizResult(userId, quizId, score);

      if (user) {
        history.push(`/quiz/${quiz?._id}/result`);
        return;
      }

      history.push(`/register/${userId}`);
    }
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancelDropAvatar = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="psy-test-section">
      <div className="header-wrapper">
        <div className="left-header">
          <FontAwesomeIcon icon={faArrowLeft} onClick={() => history.push('/app/dashboard')} />
        </div>
        <div className="right-header" role="button">
          <p>{user?.name}</p>
          <button className="avatar-profile" onClick={showModal} />
          <AvatarModal
            visible={isModalVisible}
            handleCancelDropAvatar={handleCancelDropAvatar}
          />
        </div>
      </div>
      <div className="wrapper">
        <div className="test-header">
          <h2>
            {quiz?.name}
          </h2>
        </div>
        {
          loading ? (
            <div className="test-section">
              <div className="test-loading">
                <FontAwesomeIcon icon={faSpinner} size="5x" />
              </div>
            </div>
          ) : (
            <div className="test-section">
              <div className="question-section">
                <div className="question-count">
                  <span>
                Question {currentQuestion + 1}
                  </span>
                </div>
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
              <div className="answer-section">
                {questions[currentQuestion].alternatives.map((test, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerButtonClick(test.mark)}
                  >
                    {test.text}
                  </button>
                ))}
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};

const actionCreators = {
  getQuestions: quizAction.getQuestions,
  getQuizzes: quizAction.getQuizzes,
};

const mapState = (state: IRootState) => ({
  quizzes: state.quiz.quizzes,
  questions: state.quiz.questions,
  user: state.authentication.user,
});

const connectedState = connect(mapState, actionCreators)(PsyTest);

export { connectedState as PsyTest };
