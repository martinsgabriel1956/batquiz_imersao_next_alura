import React, { useState } from 'react';
import { useRouter } from 'next/router';

import db from '../db.json';

import { QuizBackground } from '../src/components/QuizBackground';
import { QuizContainer } from '../src/components/QuizContainer';
import { QuizLogo } from '../src/components/QuizLogo';
import { Widget } from '../src/components/Widget';
import { Input } from '../src/components/Input';
import { Button } from '../src/components/Button';
import { Footer } from '../src/components/Footer';
import { GitHubCorner } from '../src/components/GitHubCorner';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  function player(infosDoEvento) {
    infosDoEvento.preventDefault();
    router.push(`/quiz?name=${name}`);
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
              <Input
                name="nomeDoUsuario"
                placeholder="Digite o seu nome :)"
                onChange={(infosDoEvento) => {
                  setName(infosDoEvento.target.value);
                }}
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
              {`Bora Jogar ${name}?`}
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
