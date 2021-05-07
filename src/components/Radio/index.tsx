import React from 'react';
import Input from '../Input';
import Container from './style';

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  id: string;
  text: string;
}

const Radio = ({ name, id, text, ...props }: RadioProps) => (
  <Container htmlFor={id}>
    <Input type="radio" name={name} id={id} {...props} />
    <span className="radio" />
    {text}
  </Container>
);

export default Radio;
