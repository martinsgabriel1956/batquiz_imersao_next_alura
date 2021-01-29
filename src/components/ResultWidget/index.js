import React from "react";
import { Widget } from "../Widget";
import { Footer } from "../Footer";
import { Button } from "../Button";
import { Link } from "../Link";

function ResultWidget({ results }) {
  return (
    <>
      <Widget>
        <Widget.Header>
        <h1>
           Você acertou 
           {' '}
            {results.reduce((somatoriaAtual, resultAtual) => {
              const isCorrect = resultAtual === true;
              
              if(isCorrect) {
                return somatoriaAtual + 1;
              }
              
              return somatoriaAtual;
            }, 0)} 
            {' '}
          perguntas
         </h1>
        </Widget.Header>

        <Widget.Content>
         <ul>
           { results.map(( result, index ) => (
            <li key={`result__${result}`}>
              #
                {index + 1}
                {' '}
                Resultado:
                {result === true ? 'Acertou' : 'Errou'}
            </li>
           ))}
         </ul>
         <Link href="/">
          <Button enabled>Voltar para Home</Button>
         </Link> 
        </Widget.Content>
      </Widget>
      <Footer />
    </>
  );
}

export { ResultWidget };
