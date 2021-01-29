import React, { useEffect, useState } from "react";
import db from "../../db.json";

import { QuizBackground } from "../../src/components/QuizBackground";
import { QuizLogo } from "../../src/components/QuizLogo";
import { QuizContainer } from "../../src/components/QuizContainer";
import { QuestionWidget } from "../../src/components/QuestionWidget";
import { LoadingWidget } from "../../src/components/LoadingWidget";
import { ResultWidget } from "../../src/components/ResultWidget";

export default function QuizPage() {
  const screenStates = {
    QUIZ: "QUIZ",
    LOADING: "LOADING",
    RESULT: "RESULT",
  };

  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const [results, setResults] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  
  const totalQuestions = db.questions.length;
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  function addResult(result) {
    setResults([
      ...results,
      result,
    ])
  }


  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
  }, []);

  function handleSubmit() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <>
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <QuizLogo />
          {screenState === screenStates.QUIZ && (
            <QuestionWidget
              question={question}
              questionIndex={questionIndex}
              totalQuestions={totalQuestions}
              onSubmit={handleSubmit}
              addResult={addResult}
            />
          )}
          {screenState === screenStates.LOADING && <LoadingWidget />}
          {screenState === screenStates.RESULT && (
            <ResultWidget results={results} />
          )}
        </QuizContainer>
      </QuizBackground>
    </>
  );
}
