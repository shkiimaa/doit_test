import React from 'react';
import { styled } from 'styled-components';

const Button = ({ children }) => {
  return <Btn>{children}</Btn>;
};

export default Button;

const Btn = styled.button`
  color: white;
  background-color: blue;
`;
