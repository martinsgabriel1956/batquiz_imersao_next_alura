import React, { useState } from "react";
import styled from 'styled-components';

import { Widget } from "../Widget";
import { Button } from "../Button";
import { WrongAnswer } from "../WrongAnswer";
import { CorrectAnswer } from "../CorrectAnswer";
import { AlternativesForm } from "../AlternativesForm";

const ButtonSubmitQuiz = styled(Button)`
  &:enabled {
    background-color: ${({ theme }) => theme.colors.quizButton};
    color: ${({ theme }) => theme.colors.secondary};
    text-shadow: 1px 1px 1px ${({ theme }) => theme.colors.wrongText};
  }
`;

function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  addResult
}) {

  const [ selectedAlternative, setSelectedAlternative ] = useState(undefined);
  const [ isQuestionSubmitted, setIsQuestionSubmitted ] = useState(false);
  const questionId = `question__${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;

  return (
    <>
      <Widget>
        <Widget.Header>
          <h3>
            {`
            Pergunta ${questionIndex + 1} de ${totalQuestions}`}
          </h3>
        </Widget.Header>
        <img
          src={question.image}
          style={{
            width: "100%",
            height: "150px",
            objectFit: "cover",
          }}
          alt="Descrição"
          />
        <Widget.Content>
          <h2>{question.title}</h2>

          <p>{question.description}</p>

          <AlternativesForm
            onSubmit={(infosDoEvento) => {
              infosDoEvento.preventDefault();
              setIsQuestionSubmitted(true);
              setTimeout(() => {
                addResult(isCorrect);
                onSubmit();
                setIsQuestionSubmitted(false);
                setSelectedAlternative(undefined);
              }, 3 * 1000);
            }}
            >
            {question.alternatives.map((alternative, alternativeIndex) => {
              const alternativeId = `alternative__${alternativeIndex}`;
              const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
              const isSelected = selectedAlternative === alternativeIndex;
              return (
                <Widget.Topic 
                as="label" 
                key={alternativeId}
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmitted && alternativeStatus}
                >
                  <input
                    style={{ display: "none" }}
                    id={alternativeId}
                    name={questionId}
                    onChange={() => setSelectedAlternative(alternativeIndex)}
                    type="radio"
                    />
                  {alternative}
                </Widget.Topic>
              );
            })}
            <ButtonSubmitQuiz type="submit" disabled={!hasAlternativeSelected}>Confirmar</ButtonSubmitQuiz>

            {isQuestionSubmitted && isCorrect && <CorrectAnswer/>}
            {isQuestionSubmitted && !isCorrect && <WrongAnswer/>}
          </AlternativesForm>
        </Widget.Content>
      </Widget>
    </>
  );
}

export { QuestionWidget };
