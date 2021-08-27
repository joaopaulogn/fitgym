import React from 'react';
import Container from './style';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'submit' | 'reset' | 'button';
  width?: 'large' | 'default' | 'small';
  text: string;
}

const Button = ({
  type,
  text,
  width,
  disabled,
  ...props
}: ButtonProps): JSX.Element => (
  <Container type={type} className={`text-normal ${width}`} {...props}>
    {text}
  </Container>
);

Button.defaultProps = {
  type: 'submit',
  width: 'default',
};

export default Button;
