import React from 'react';
import Container from './style';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  type?: 'submit' | 'reset' | 'button';
}

const Button = ({ type, text, ...props }: ButtonProps) => (
  <Container type={type} className="text-normal" {...props}>
    {text}
  </Container>
);

Button.defaultProps = {
  type: 'submit',
};

export default Button;
