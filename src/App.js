import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const questions = [
    {
      questionText: "What is the second longest river in the world?",
      answerOptions: [
        { answerText: "Nile", isCorrect: false },
        { answerText: "Yangtze", isCorrect: false },
        { answerText: "Amazon", isCorrect: true },
        { answerText: "Missouri-Missisippi", isCorrect: false }
      ]
    },
    {
      questionText: "What is the fourth smallest nation in the Europe?",
      answerOptions: [
        { answerText: "Liechtenstein", isCorrect: true },
        { answerText: "Malta", isCorrect: false },
        { answerText: "San Marino", isCorrect: false },
        { answerText: "Andorra", isCorrect: false }
      ]
    },
    {
      questionText: "What is the fourth most populous country in the world?",
      answerOptions: [
        { answerText: "Brazil", isCorrect: false },
        { answerText: "Indonesia", isCorrect: true },
        { answerText: "Pakistan", isCorrect: false },
        { answerText: "Nigeria", isCorrect: false }
      ]
    },
    {
      questionText: "What is the fifth largest country in the world?",
      answerOptions: [
        { answerText: "Australia", isCorrect: false },
        { answerText: "India", isCorrect: false },
        { answerText: "Argentina", isCorrect: false },
        { answerText: "Brazil", isCorrect: true }
      ]
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      const newScore = score + 1;
      setScore(newScore);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetGame = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
  };

  return (
    <div className="App">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
          <button onClick={resetGame}>Reset Game</button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default App;
