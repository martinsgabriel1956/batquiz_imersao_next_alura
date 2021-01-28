import React from "react";

import { Widget } from "../Widget";
import { Button } from "../Button";

function QuestionWidget({ question, questionIndex, totalQuestions, onSubmit }) {
  const questionId = `question__${questionIndex}`
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

          <form onSubmit={(infosDoEvento) => {
            infosDoEvento.preventDefault();
            onSubmit();
          }}>
            {question.alternatives.map((alternative, alternativeIndex) => {
              console.log("Ne");

              const alternativeId = `alternative__${alternativeIndex}`;
              return (
                <Widget.Topic 
                  as="label" 
                  htmlFor={alternativeId}
                >
                  <input 
                    id={alternativeId}
                    name={questionId}
                    type="radio"
                    />
                    {alternative}
                </Widget.Topic>
              );
            })}
            <Button 
            type="submit"
            >
              Confirmar
            </Button>
          </form>
        </Widget.Content>
      </Widget>
    </>
  );
}

export { QuestionWidget };
