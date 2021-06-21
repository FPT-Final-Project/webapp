import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
const Psytests = [
  {
    id: 1,
    questionTest:
      "How often have you been bothered by feeling down, depressed, irritable, or hopeless over the last two weeks?",
    answerOptions: [
      {
        answerTest: "Not at all",
        mark: 0,
      },
      {
        answerTest: "Several days",
        mark: 1,
      },
      {
        answerTest: "More than half the days",
        mark: 2,
      },
      {
        answerTest: "Nearly everyday",
        mark: 3,
      },
    ],
  },
  {
    id: 2,
    questionTest:
      "How often have you been bothered that you have little interest or pleasure in doing things over the last two weeks?",
    answerOptions: [
      {
        answerTest: "Not at all",
        mark: 0,
      },
      {
        answerTest: "Several days",
        mark: 1,
      },
      {
        answerTest: "More than half the days",
        mark: 2,
      },
      {
        answerTest: "Nearly everyday",
        mark: 3,
      },
    ],
  },
  {
    id: 3,
    questionTest:
      "How often have you been bothered by trouble falling asleep, staying asleep, or sleeping too much over the last two weeks?",
    answerOptions: [
      {
        answerTest: "Not at all",
        mark: 0,
      },
      {
        answerTest: "Several days",
        mark: 1,
      },
      {
        answerTest: "More than half the days",
        mark: 2,
      },
      {
        answerTest: "Nearly everyday",
        mark: 3,
      },
    ],
  },
  {
    id: 4,
    questionTest:
      "How often have you been bothered that you have poor appetite, weight loss, or overeating over the last two weeks?",
    answerOptions: [
      {
        answerTest: "Not at all",
        mark: 0,
      },
      {
        answerTest: "Several days",
        mark: 1,
      },
      {
        answerTest: "More than half the days",
        mark: 2,
      },
      {
        answerTest: "Nearly everyday",
        mark: 3,
      },
    ],
  },
  {
    id: 5,
    questionTest:
      "How often have you been bothered by feeling tired, or having little energy over the last two weeks?",
    answerOptions: [
      {
        answerTest: "Not at all",
        mark: 0,
      },
      {
        answerTest: "Several days",
        mark: 1,
      },
      {
        answerTest: "More than half the days",
        mark: 2,
      },
      {
        answerTest: "Nearly everyday",
        mark: 3,
      },
    ],
  },
  {
    id: 6,
    questionTest:
      "How often have you been bothered by feeling bad about yourself – or feeling that you are a failure, or that you have let yourself or your family down over the last two weeks?",
    answerOptions: [
      {
        answerTest: "Not at all",
        mark: 0,
      },
      {
        answerTest: "Several days",
        mark: 1,
      },
      {
        answerTest: "More than half the days",
        mark: 2,
      },
      {
        answerTest: "Nearly everyday",
        mark: 3,
      },
    ],
  },
  {
    id: 7,
    questionTest:
      "How often have you been bothered that you have trouble concentrating on things like school work, reading, or watching TV over the last two weeks?",
    answerOptions: [
      {
        answerTest: "Not at all",
        mark: 0,
      },
      {
        answerTest: "Several days",
        mark: 1,
      },
      {
        answerTest: "More than half the days",
        mark: 2,
      },
      {
        answerTest: "Nearly everyday",
        mark: 3,
      },
    ],
  },
  {
    id: 8,
    questionTest:
      "How often have you been bothered by moving or speaking so slowly that other people could have noticed? Or the opposite – being so fidgety or restless that you were moving around a lot more than usual over the last two weeks?",
    answerOptions: [
      {
        answerTest: "Not at all",
        mark: 0,
      },
      {
        answerTest: "Several days",
        mark: 1,
      },
      {
        answerTest: "More than half the days",
        mark: 2,
      },
      {
        answerTest: "Nearly everyday",
        mark: 3,
      },
    ],
  },
  {
    id: 9,
    questionTest:
      "How often have you been bothered by thoughts that you would be better off dead, or of hurting yourself in some way over the last two weeks?",
    answerOptions: [
      {
        answerTest: "Not at all",
        mark: 0,
      },
      {
        answerTest: "Several days",
        mark: 1,
      },
      {
        answerTest: "More than half the days",
        mark: 2,
      },
      {
        answerTest: "Nearly everyday",
        mark: 3,
      },
    ],
  },
];
function getResultOfTest(score: number){
    if(score <= 4) return "Normal";
    if(score <=9) return "Tram cam toi thieu"
    if(score <=14) return "nhe"
    if(score <= 19) return "trung binh"
    return "nang"
}
const Psytest: React.FC = () => {
  const [score, setScore] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const handleAnswerButtonClick = (mark: number) => {
    setScore(score + mark);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < Psytests.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="test-section">
      {showScore ? (
        <div className="score-section">
            <p>You scored {score} out of {Psytests.length}</p>
            <p>{getResultOfTest(score)}</p>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>
                Question {currentQuestion + 1}/{Psytests.length}
              </span>
            </div>
            <div className="question-test">
              {Psytests[currentQuestion].questionTest}
            </div>
          </div>
          <div className="answer-section">
            {Psytests[currentQuestion].answerOptions.map((test, index) => {
              return (
                <button
                  key={index}
                  onClick={() => handleAnswerButtonClick(test.mark)}
                >
                  {test.answerTest}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Psytest;
