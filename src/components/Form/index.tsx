import React, { ReactElement } from 'react';
import Button from '../Button';
import Container from './style';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: ReactElement;
  button: string;
}

const Form = ({ children, button, ...props }: FormProps): JSX.Element => (
  <Container action="." method="POST" noValidate {...props}>
    {children}
    <Button text={button} />
  </Container>
);

export default Form;
