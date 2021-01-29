import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../lotties/wrong';

function WrongAnswer()  {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }
  return (
    <Lottie style={{ marginTop: 10 }} options={defaultOptions} width={120} height={120} />
  );
}

export { WrongAnswer };
