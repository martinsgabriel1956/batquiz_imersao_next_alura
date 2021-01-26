import React from 'react'
import styled from 'styled-components';
import Image from 'next/image'

function Logo({ className }) {
  return <Image className={className} src="/Logo.svg" width="350px" height="110px" />
}

const QuizLogo = styled(Logo)`
  margin: auto;
  display: block;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export {QuizLogo};
