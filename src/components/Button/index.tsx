import React from 'react';
import Container from './style';

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => (
  <Container className="text-normal">{text}</Container>
);

export default Button;
