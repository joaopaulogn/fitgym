import React, { InputHTMLAttributes } from 'react';
import Container from './style';
import Icon from '../Icon';
import { handleClick, handleFocus } from './events/removeInvalidState';
import addValidState from './events/addValidState';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  name?: string;
  id?: string;
  title?: string;
  errorMessage?: string;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  placeholder?: string;
  icon?: string;
  children?: React.ReactElement;
}

const Input = ({
  type,
  name,
  id,
  title,
  minLength,
  maxLength,
  min,
  max,
  placeholder,
  icon,
  children,
}: InputProps) => (
  <Container>
    <input
      type={type}
      name={name}
      id={id}
      required
      minLength={minLength}
      maxLength={maxLength}
      min={min}
      max={max}
      title={title}
      placeholder={placeholder}
      className="text-normal"
      onClick={handleClick}
      onFocus={handleFocus}
      onChange={addValidState}
    />
    <Icon icon={icon} />
    {children}
  </Container>
);

export default Input;
