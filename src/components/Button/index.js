import styled from "styled-components";
import PropTypes from "prop-types";

const Button = styled.button`
  width: 100%;
  padding: 10px 16px;

  border: 0;
  border-radius: ${({ theme }) => theme["border-radius"]};
  
  font-size: 16px;
  font-weight: bold;
  line-height: 1;
  text-align: center;

  background-color: ${({ theme }) => theme.colors.contrastText};
  color: ${({ theme }) => theme.colors.mainText};
  text-shadow: 2px 2px 4px ${({ theme }) => theme.colors.primary};


  &:focus {
    outline-style: none;
  }

  &:enabled {
    background-color: ${({ theme }) => theme.colors.success} ;
    border: none;
    cursor: pointer;

    &:hover,
    &:focus {
      opacity: 0.8;
    }
  }
`;

Button.propTypes = {
  type: PropTypes.oneOf(["submit", "type", "button"]).isRequired,
  children: PropTypes.node.isRequired,
};

export { Button };
