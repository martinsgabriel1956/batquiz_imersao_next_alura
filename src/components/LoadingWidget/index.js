import React from "react";
import styled from "styled-components";
import { Widget } from "../Widget";

const StyledLoadingWidget = styled(Widget.Header)`
  &:nth-child(1) {
    background-color: ${({ theme }) => theme.colors.success};
  }
`;

StyledLoadingWidget.Body = styled(Widget)`
    border: 1px solid ${({ theme }) => theme.colors.success};
`;

function LoadingWidget() {
  return (
    <>
      <StyledLoadingWidget.Body>
        <StyledLoadingWidget>
          Carregando...
        </StyledLoadingWidget>
        <Widget.Content>
          [Desafio do Loading]
        </Widget.Content>
      </StyledLoadingWidget.Body>
    </>
  );
}

export { LoadingWidget };
