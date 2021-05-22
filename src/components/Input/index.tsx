import React, { InputHTMLAttributes } from 'react';
import Container from './style';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  name: string | undefined;
  id: string | undefined;
}

const Input = ({ type, name, id, ...props }: InputProps) => (
  <Container type={type} name={name} id={id} required {...props} />
);

export default Input;
