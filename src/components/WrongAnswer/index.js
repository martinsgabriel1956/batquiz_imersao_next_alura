import React from "react";
import styled from 'styled-components';
import Lottie from "react-lottie";
import animationData from "../../lotties/wrong";

const AnimationPanel = styled.div`
  width: 350px;
  height: 150px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-width: 425px) {
    width: 300px;
    height: 150px;
  }
`;

function WrongAnswer() {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <AnimationPanel>
      <Lottie
        style={{ marginTop: 10 }}
        options={defaultOptions}
        width={120}
        height={120}
      />
    </AnimationPanel>
  );
}

export { WrongAnswer };
