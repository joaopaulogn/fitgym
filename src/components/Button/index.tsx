import React from 'react';
import Container from './style';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  type?: 'submit' | 'reset' | 'button';
  disabled?: false | true;
  width?: '100%' | '34rem' | '17rem';
}

const Button = ({ type, text, width, disabled, ...props }: ButtonProps) => (
  <Container
    style={{ width }}
    type={type}
    disabled={disabled}
    className="text-normal"
    {...props}
  >
    {text}
  </Container>
);

Button.defaultProps = {
  type: 'submit',
  disabled: false,
  width: '100%',
};

export default Button;
