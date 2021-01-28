import React from "react";
import styled from "styled-components";
import Lottie from 'react-lottie';
import animationData from '../../lotties/batman-head.json';
import { Widget } from "../Widget";

const StyledLoadingWidget = styled(Widget.Header)`
  &:nth-child(1) {
    background-color: ${({ theme }) => theme.colors.success};
  }
`;

StyledLoadingWidget.Body = styled(Widget)`
  background-color: ${({ theme }) => theme.colors.contrastText};
  border: 1px solid ${({ theme }) => theme.colors.success};
`;

function LoadingWidget() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <>
      <StyledLoadingWidget.Body>
        <StyledLoadingWidget>Carregando...</StyledLoadingWidget>
        <Widget.Content>
         <Lottie 
            options={defaultOptions}
            width={200}
            height={200}
         />
        </Widget.Content>
      </StyledLoadingWidget.Body>
    </>
  );
}

export { LoadingWidget };
