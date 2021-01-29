import React, { useEffect, useState } from "react";
import db from "../../../db.json";

import { QuizBackground } from "../../components/QuizBackground";
import { QuizLogo } from "../../components/QuizLogo";
import { QuizContainer } from "../../components/QuizContainer";
import { QuestionWidget } from "../../components/QuestionWidget";
import { LoadingWidget } from "../../components/LoadingWidget";
import { ResultWidget } from "../../components/ResultWidget";

export default function QuizScreen({ externalQuestions, externalBg }) {
  const screenStates = {
    QUIZ: "QUIZ",
    LOADING: "LOADING",
    RESULT: "RESULT",
  };

  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const [results, setResults] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  
  const totalQuestions = externalQuestions.length;
  const questionIndex = currentQuestion;
  const question = externalQuestions[questionIndex];
  const bg = externalBg;

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
      <QuizBackground backgroundImage={bg}>
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
