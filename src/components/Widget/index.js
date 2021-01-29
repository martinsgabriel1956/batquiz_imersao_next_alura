import styled from "styled-components";

const Widget = styled.div`
  margin: 24px 0;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme["border-radius"]};
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
    color: ${({ theme }) => theme.colors.mainText};
    text-shadow: 2px 2px 4px ${({ theme }) => theme.colors.primary};
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }

  &:nth-child(3) {
    border: 1px solid ${({ theme }) => theme.colors.success};
    
  }

  @media (max-width: 425px) {
    margin: 24px 12px;
  }
  
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 28px;
  background-color: ${({ theme }) => theme.colors.secondary};

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
`;

Widget.Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.mainText};
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme["border-radius"]};
  color: ${({ theme }) => theme.colors.primary};
  transition: .3s;
  display: block;

  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export { Widget };
