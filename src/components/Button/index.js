import styled from "styled-components";
import db from "../../../db.json";

const Button = styled.button`
  margin-top: 22px;
  width: 100%;
  padding: 10px;
  border: 1px solid ${db.theme.colors.contrastText};
  background-color: ${db.theme.colors.contrastText};
  border-radius: 2px;
  font-size: 16px;
  font-weight: bold;
  text-shadow: 2px 2px 4px ${db.theme.colors.primary};
  cursor: pointer;

  a {
    text-decoration: none;
    color: ${db.theme.colors.mainText};
  }

  &:focus {
    outline-style: none;
  }

  &:active {
    background-color: ${db.theme.colors.success};
    border: none;
    

    &:focus {
    outline-style: none;
    }
  }
`;

export { Button };
