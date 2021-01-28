import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const InputBase = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: ${({ theme }) => theme["border-radius"]};
  outline: 0;
  margin-bottom: 25px;

  &::placeholder {
      color: #a0a6cb;
      font-family: Lato;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 24px;
      letter-spacing: 0.15px;
    }
`;

function Input({ onChange, placeholder }) {
  return <InputBase 
    placeholder={placeholder}
    onChange={onChange}
  />;
}

Input.defaultProps = {
  value: '',
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export { Input };