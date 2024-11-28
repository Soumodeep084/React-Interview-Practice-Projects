import React, { useState, useRef } from 'react';
import './Quiz.css';
import data from './data';

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);
  const [disableButton, setDisableButton] = useState(true);
  const [lock, setLock] = useState(false);
  const questionData = data[index];

  // Refs for options
  const Option1 = useRef(null);
  const Option2 = useRef(null);
  const Option3 = useRef(null);
  const Option4 = useRef(null);
  const OptionsRef = [Option1, Option2, Option3, Option4];

  const checkAns = (e, ans) => {
    if (!lock) {
      if (questionData.ans === ans) {
        e.target.classList.add('Correct');
        setScore((prev) => prev + 2);
      } else {
        e.target.classList.add('Wrong');
        OptionsRef[questionData.ans - 1].current.classList.add('Correct');
      }
      setLock(true);
      setDisableButton(false);
    }
  };

  const handleNext = () => {
    if (index < data.length - 1) {
      setIndex(index + 1);
      resetOptions();
    } else {
      setResult(true);
    }
  };

  const handleReset = () => {
    setIndex(0);
    setScore(0);
    setResult(false);
    resetOptions();
  };

  const resetOptions = () => {
    setLock(false);
    setDisableButton(true);
    OptionsRef.forEach((option) => {
      if (option.current) {
        option.current.classList.remove('Correct', 'Wrong');
      }
    });
  };

  return (
    <div className="card quiz-card">
      <div className="card-header quiz-header py-0">
        <h3 className="text-center">Quiz App</h3>
      </div>

      {!result ? (
        <div className="card-body">
          <h4 className="font-monospace quiz-question fs-5">
            Q{index + 1}. {questionData.question}
          </h4>
          <div className="container ps-0 mt-3">
            <div className="options" ref={Option1} onClick={(e) => checkAns(e, 1) } > {questionData.option1} </div>
            <div className="options" ref={Option2} onClick={(e) => checkAns(e, 2) } > {questionData.option2} </div>
            <div className="options" ref={Option3} onClick={(e) => checkAns(e, 3) } > {questionData.option3} </div>
            <div className="options" ref={Option4} onClick={(e) => checkAns(e, 4) } > {questionData.option4} </div>
          </div>
        </div>
      ) : (
        <div className="card-body text-center">
          <h4 className="font-monospace quiz-question fs-5">Quiz Completed!</h4>
          <p className="te nter fw-bold">Your Score: {score} out of {data.length * 2}</p>
        </div>
      )}

      <div className="card-footer quiz-footer border-0 text-center">
        {!result ? 
        (
          <>
            <button className="btn btn-primary font-monospace fw-bold next-button" onClick={handleNext} disabled={disableButton} > Next </button>
            <p className="card-title mt-1" style={{ fontFamily: 'Calibri' }}> Question {index + 1} out of {data.length} </p>
          </>
        ) : (
          <button className="btn btn-primary font-monospace fw-bold next-button" onClick={handleReset} > Reset Quiz </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
