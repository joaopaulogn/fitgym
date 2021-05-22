import React from 'react';
import Button from '../Button';
import Container from './style';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactElement;
  buttonText: string;
}

const Form = ({ children, buttonText, ...props }: FormProps) => (
  <Container action="." method="POST" autoComplete="off" noValidate {...props}>
    {children}
    <Button text={buttonText} disabled />
  </Container>
);

export default Form;
