import React from 'react';
import Container from './style';
import Input, { InputProps } from '../Input';

export interface Field2Props extends InputProps {
  name?: string;
  value?: string;
  children: JSX.Element;
  instructionMessage?: string | JSX.Element;
  errorMessage?: string | JSX.Element;
}

const Field = ({
  type,
  name,
  value,
  title,
  placeholder,
  children,
  instructionMessage,
  errorMessage,
  ...props
}: Field2Props) => (
  <Container datatype="field">
    <Input
      type={type}
      name={name}
      value={value}
      title={title}
      placeholder={placeholder}
      {...props}
    />
    {children}
    {instructionMessage}
    {errorMessage}
  </Container>
);

Field.defaultProps = {
  value: '',
  instructionMessage: React.Fragment,
  errorMessage: React.Fragment,
};

export default Field;
