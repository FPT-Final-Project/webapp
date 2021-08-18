import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import score from '../../../assets/Score.svg';
import { analyzeResultOfPsytest } from '../../../helper/analyzeResultOfPsytest';
import './style.scss';

interface Props {
}

const ResultQuiz: React.FC<Props> = (props: any) => {
  const { quizId: _a } = useParams<{ quizId: string }>();
  const quizResult = useSelector((state: any) => state.quiz.quizzesScore);
  const { result } = quizResult;
  // eslint-disable-next-line react/destructuring-assignment
  const { totalQuestions, typeOfQuiz } = props?.location?.state;
  const history = useHistory();
  const handleOnclick = () => {
    history.push({ pathname: '/suggestion', state: { result } });
  };
  return (
    <>
      <div className="result-form">
        <div className="result">
          <h1>Psychological self-test for Depression</h1>
          {/* <h3>Do you to get depressed? Take the depression test.</h3> */}
          <p className="text-desciption">
            For many disorders affertiong your wellbeing, talking a critical look at your
            own mental state can put tou on course towards felling better.
            Using our online selt-test you can find out for yourself whether
            you're exhibiting signs of depression and wherther you need psychological help.
          </p>
          <h1 className="results-title">Your Results</h1>
          <div className="scoreSvg">
            <img src={score} alt="score" />
            <div className="scoreQuiz">{result}/{3 * totalQuestions}</div>
          </div>

          <div className="concludeResult">
            <h3>{analyzeResultOfPsytest(typeOfQuiz, result)}</h3>
          </div>
        </div>
        <FontAwesomeIcon icon={faArrowRight} style={{ color: '#299CB4' }} size="4x" className="suggestIcon" onClick={handleOnclick} />
      </div>
    </>
  );
};
export default ResultQuiz;
