import React, { InputHTMLAttributes } from 'react';
import Container from './style';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: 'email' | 'password' | 'text' | 'search' | 'radio' | string;
  name: string;
  id: string;
}

const Input = ({ type, name, id, ...props }: InputProps) => (
  <Container type={type} name={name} id={id} required {...props} />
);

export default Input;
