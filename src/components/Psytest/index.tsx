/* eslint-disable jsx-a11y/click-events-have-key-events */
import { faArrowLeft, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Image, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import quizService from '../../services/quiz.service';
import Loading from '../../shared/Loading';
import quizAction from '../../stores/actions/quiz.action';
import { IRootState } from '../../stores/store';
import { IQuestion } from '../../types/question';
import { IUser } from '../../types/user';
import AvatarModal from '../Modals/Avatar';
import './style.scss';

interface Props {
  user: IUser | undefined;
  createResultOfTest: (userId: string, quizId: string, score: number) => void;
}

const antIcon = <FontAwesomeIcon icon={faSpinner} style={{ fontSize: 30, color: '#1f8ba3' }} spin />;

const PsyTest: React.FC<Props> = ({ user, createResultOfTest }: Props) => {
  const history = useHistory();
  const [score, setScore] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingApi, setLoadingApi] = useState(true);
  const [showScore, setShowScore] = useState(false);
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const { quizId } = useParams<{ quizId: string }>();
  const quizzes = useSelector((state: any) => state.quiz.quizzes);
  const userDemo = useSelector((state: any) => state.authentication.user);

  const quiz = quizzes.find((q: any) => q._id === quizId);

  useEffect(() => {
    if (showScore) {
      const userId = userDemo ? userDemo._id : uuid();
      createResultOfTest(userId, quizId, score);
      if (user) {
        history.push(`/quiz/${quiz._id}/result`);
      } else {
        history.push(`/register/${userId}`);
      }
    }
  }, [showScore]);

  useEffect(() => {
    const getQuestionsApi = async (): Promise<void> => {
      try {
        const data: any = await quizService.getQuestions(quizId);
        if (data.length) {
          setQuestions(data);
          setLoadingApi(false);
        }
      } catch (error) {
        setLoadingApi(false);
      }
    };
    getQuestionsApi();
  }, []);

  const handleAnswerButtonClick = (mark: number) => {
    setScore((state) => state + mark);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setLoading(true);
      setTimeout(() => {
        setCurrentQuestion(nextQuestion);
        setLoading(false);
      }, 400);
    } else {
      setShowScore(true);
    }
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancelDropAvatar = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div className="psy-test-section">

        <div className="header-wrapper">
          <div className="left-header">
            <FontAwesomeIcon icon={faArrowLeft} onClick={() => history.push('/app/psychology-test')} />
          </div>
          <div className="right-header" role="button">
            <p>{user?.name}</p>
            <Image src={user?.avatar || '/avatarDefault.png'} onClick={showModal} alt="avatar" className="avatar-profile" preview={false} />
            <AvatarModal
              visible={isModalVisible}
              handleCancelDropAvatar={handleCancelDropAvatar}
            />
          </div>
        </div>
        {loadingApi ? (
          <Loading />
        )
          : (
            <div className="psy-test-section">
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
                        <Spin indicator={antIcon} />
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
          )}
      </div>
    </>
  );
};

const actionCreators = {
  // getQuestions: quizAction.getQuestions,
  createResultOfTest: quizAction.createQuizResult,
};

const mapState = (state: IRootState) => ({
  quizzes: state.quiz.quizzes,
  questions: state.quiz.questions,
  user: state.authentication.user,
});

const connectedState = connect(mapState, actionCreators)(PsyTest);

export { connectedState as PsyTest };
