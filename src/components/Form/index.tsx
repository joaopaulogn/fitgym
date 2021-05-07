import React from 'react';
import Container from './style';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactElement;
}

const Form = ({ children, ...props }: FormProps) => (
  <Container action="." method="POST" autoComplete="off" noValidate {...props}>
    {children}
  </Container>
);

export default Form;
