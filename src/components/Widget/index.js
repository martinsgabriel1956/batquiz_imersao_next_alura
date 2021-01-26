import styled from "styled-components";
import db from "../../../db.json";

const Widget = styled.div`
  margin: 24px 0;
  border: 1px solid ${db.theme.colors.secondary};
  background-color: ${db.theme.colors.primary};
  border-radius: ${db.theme["border-radius"]};
  overflow: hidden;

  h1,
  h2,
  h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }

  h1,
  h2,
  h3,
  p {
    color: ${db.theme.colors.mainText};
    text-shadow: 2px 2px 4px ${db.theme.colors.primary};
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${db.theme.colors.secondary};

  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px;

  & > *:first-child {
    margin-top: 0;
  }

  & > *:last-child {
    margin-bottom: 0;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  input[type="text"] {
    border: 1px solid ${db.theme.colors.secondary};
    width: 100%;
    height: 38px;
    margin-top: 14px;
    border-radius: 3.5px;
    background-color: ${db.theme.colors.primary};
    color: ${db.theme.colors.mainText};

    &::placeholder {
      color: #a0a6cb;
      font-family: Lato;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 24px;
      letter-spacing: 0.15px;
    }
    &:focus {
      outline-style: none;
    }
  }
`;

export { Widget };
