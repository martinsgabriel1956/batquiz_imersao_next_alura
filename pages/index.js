import Head from "next/head";
import Link from "next/link";

import db from "../db.json";

import { Widget } from "../src/components/Widget";
import { Footer } from "../src/components/Footer";
import { GitHubCorner } from "../src/components/GitHubCorner";
import { QuizBackground } from "../src/components/QuizBackground";
import { Button } from "../src/components/Button";
import { QuizContainer } from "../src/components/QuizContainer";

export default function Home() {
  return (
    <>
      <Head>
        <title>The Dark Knight Quiz</title>
        <meta property="og:image" content={db.bg} />
      </Head>
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <Widget>
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>
            <Widget.Content>
              <p>{db.description}</p>
              <input type="text" placeholder="Digite o seu nome :)" required />
              <Link href="/quiz">
                <Button>
                  <a>Entrar</a>
                </Button>
              </Link>
            </Widget.Content>
          </Widget>

          <Widget>
            <Widget.Content>
              <h1>Quizes da Galera</h1>
              <p>Quizes da Galera</p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/martinsgabriel1956" />
      </QuizBackground>
    </>
  );
}
