import React from "react";
import Lottie from "react-lottie";
import animationData from "../../lotties/success";

function CorrectAnswer() {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
  <Lottie style={{ marginTop: 10 }} options={defaultOptions} width={110} height={110} />
  );
};

export { CorrectAnswer };
