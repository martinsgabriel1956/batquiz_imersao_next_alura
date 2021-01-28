import React from "react";
import Lottie from "react-lottie";
import animationData from "../../lotties/success";

function CorrectAnswer() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
  <Lottie options={defaultOptions} width={200} height={200} />
  );
};

export { CorrectAnswer };
