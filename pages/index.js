import React, { useState } from 'react';
import { useRouter } from 'next/router';

import db from '../db.json';

import { Widget } from '../src/components/Widget';
import { Footer } from '../src/components/Footer';
import { GitHubCorner } from '../src/components/GitHubCorner';
import { QuizBackground } from '../src/components/QuizBackground';
import { Button } from '../src/components/Button';
import { QuizContainer } from '../src/components/QuizContainer';
import { QuizLogo } from '../src/components/QuizLogo';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  function player(infosDoEvento) {
    infosDoEvento.preventDefault();
    router.push(`/quiz?name=${name}`);
    console.log('Fazendo uma submissão por meio do React');
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
      <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <form
              onSubmit={player}
            >
              <input
                type="text"
                placeholder="Digite o seu nome :)"
                onChange={(infosDoEvento) => {
                  setName(infosDoEvento.target.value);
                }}
              />
              <Button type="submit" disabled={name.length === 0}>
                Bora Jogar {' '} {name}!
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizzes da Galera</h1>
            <p>Quizzes da Galera</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/martinsgabriel1956" />
    </QuizBackground>
  );
}
