import React, { InputHTMLAttributes } from 'react';
import Container from './style';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  name?: string;
}

const Input = ({ type, name, id, ...props }: InputProps): JSX.Element => (
  <Container type={type} name={name} id={!id ? name : id} required {...props} />
);

export default Input;
