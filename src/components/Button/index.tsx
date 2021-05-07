import React from 'react';
import Container from './style';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  type?: 'submit' | 'reset' | 'button';
  width?: '100%' | '34rem' | '17rem';
}

const Button = ({ type, text, width, ...props }: ButtonProps) => (
  <Container style={{ width }} type={type} className="text-normal" {...props}>
    {text}
  </Container>
);

Button.defaultProps = {
  type: 'submit',
  width: '100%',
};

export default Button;
