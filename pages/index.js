import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
import { Link } from '../src/components/Link';

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
        <Widget 
          as={motion.section}
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
          delay: 0,
          duration: 0.5,
          type: "just",
          stiffness: 260,
          damping: 20,
          repeat: 2,
          repeatType: "reverse",
          repeatDelay: 0.2
         }}
        >
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

        <Widget as={motion.section}
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
          delay: 0.2,
          duration: 0.5,
          type: "just",
          stiffness: 260,
          damping: 20,
          repeat: 2,
          repeatType: "reverse",
          repeatDelay: 0.2
         }}
         
         >
          <Widget.Content>
            <h1>Quizzes da Galera</h1>
            

            <ul>
            {db.external.map((linkExterno) => {
            const [projectName, gitHubUser] = linkExterno.replace(/\//g, '').replace('https:', '').replace('.vercel.app', '').split('.');
              
            return (
              <li key={linkExterno}>
                <Widget.Topic as={Link} href={`/quiz/${projectName}___${gitHubUser}`}>
                {`${gitHubUser}/${projectName}`}
                </Widget.Topic>
              </li>
              ); 
            })}
            </ul>
          </Widget.Content>
        </Widget>
        <Footer 
          as={motion.footer}
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
          delay: 0.2,
          duration: 0.5,
          type: "just",
          stiffness: 260,
          damping: 20,
          repeat: 2,
          repeatType: "reverse",
          repeatDelay: 0.2
         }}
        />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/martinsgabriel1956" />
    </QuizBackground>
  );
}
