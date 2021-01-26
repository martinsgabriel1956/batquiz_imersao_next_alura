import Link from 'next/link';

import db from '../db.json';

import { Widget } from '../src/components/Widget';
import { Footer } from '../src/components/Footer';
import { QuizBackground } from '../src/components/QuizBackground';
import { Button } from '../src/components/Button';
import { QuizContainer } from '../src/components/QuizContainer';
import { QuizLogo } from '../src/components/QuizLogo';

export default function Quiz() {
  return (
    <>
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>Pergunta 1 de 50</h1>
            </Widget.Header>
            <Widget.Content>
              <p>Quando o Batman foi criado?</p>

              <Link href="/quiz">
                <Button>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a>Confirmar</a>
                </Button>
              </Link>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
      </QuizBackground>
    </>
  );
}
