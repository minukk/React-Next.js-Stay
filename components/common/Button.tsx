import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<IProps> = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

const Container = styled.button`
  width: 100%;
  height: 48px;
  border: 0;
  border-radius: 4px;
  background-color: ${palette.bittersweet};
  color: #fff;
  font-size: 16px;
  outline: none;
  cursor: pointer;
`;

export default Button;
