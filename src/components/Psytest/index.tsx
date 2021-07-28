import React, { useState } from 'react';
import './style.scss';
import { Tests } from './tests';

const getResultOfTest = (score: number) => {
  if (score <= 4) return 'Normal';
  if (score <= 9) return 'A little bit';
  if (score <= 14) return 'Little';
  if (score <= 19) return 'Immediate';

  return 'Hard';
};

const PsyTest: React.FC = () => {
  const [score, setScore] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const handleAnswerButtonClick = (mark: number) => {
    setScore(score + mark);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < Tests.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="wrapper">
      <div className="test-section">
        {showScore ? (
          <div className="score-section">
            <p>
            You scored
              {score}
              {' '}
            out of
              {Tests.length}
            </p>
            <p>{getResultOfTest(score)}</p>
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>
                Question
                  {' '}
                  {currentQuestion + 1}
                /
                  {Tests.length}
                </span>
              </div>
              <div className="question-test">
                {Tests[currentQuestion].questionTest}
              </div>
            </div>
            <div className="answer-section">
              {Tests[currentQuestion].answerOptions.map((test, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerButtonClick(test.mark)}
                >
                  {test.answerTest}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PsyTest;
