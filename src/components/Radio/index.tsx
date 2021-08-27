import React from 'react';
import Container from './style';
import Input, { InputProps } from '../Input';

interface RadioProps extends InputProps {
  name: string;
  id: string;
  text: string;
}

const Radio = ({ name, id, text, ...props }: RadioProps): JSX.Element => (
  <Container htmlFor={id}>
    <Input type="radio" name={name} id={id} {...props} />
    <span className="radio" />
    {text}
  </Container>
);

export default Radio;
