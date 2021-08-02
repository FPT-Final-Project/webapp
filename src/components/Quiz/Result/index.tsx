import React from 'react';
import { connect, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import score from '../../../assets/Score.svg';
import { IRootState } from '../../../stores/store';
import './style.scss';

interface Props {
}

const ResultQuiz: React.FC<Props> = () => {
  const { quizId: _a } = useParams<{ quizId: string }>();
  const quizResult = useSelector((state: any) => state.quiz.quizzesScore);
  const { result } = quizResult || undefined;
  return (
    <>
      <div className="result-form">
        <div className="result">
          <h2>Psychological self-test for depression</h2>
          <h3>Do you to get depressed? Take the depression test.</h3>
          <p>
            For many disorders affertiong your wellbeing, talking a critical look at your
            own mental state can put tou on course towards felling better.
            Using our online selt-test you can find out for yourself whether
            you're exhibiting signs of depression and wherther you need psychological help.
          </p>
          <div className="dotted" />
          <h1>Your Results</h1>
          <div className="scoreSvg">
            <img src={score} alt="score" />
            <div className="scoreQuiz">{result}/27</div>
          </div>

          <div className="concludeResult">
            <h3>You're neither in the best of moods nor do you seem significantly depressed or low.</h3>
          </div>
        </div>

      </div>
    </>
  );
};
export default ResultQuiz;
