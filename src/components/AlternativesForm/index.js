import styled from 'styled-components';

const AlternativesForm = styled.form`
  label {
    &[data-selected="true"] {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.secondary};
      border: 1px solid ${({ theme }) => theme.colors.secondary};
      
      &[data-status="SUCCESS"] {
        background-color: ${({ theme }) => theme.colors.success};
        border: none;
      }
      &[data-status="ERROR"] {
        background-color: ${({ theme }) => theme.colors.wrong};
        color: ${({ theme }) => theme.colors.wrongText};
        border: none;
      }
    }
    &:focus {
      opacity: 1;
    } 
  }
  button {
    margin-top: 24px;
  }
`;

export {AlternativesForm};