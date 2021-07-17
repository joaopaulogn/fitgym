import React from 'react';
import Container from './style';
import Input, { InputProps } from '../Input';

export interface FieldProps extends InputProps {
  title?: string;
  children?: React.ReactElement;
}

const Field = ({
  type,
  name,
  title,
  placeholder,
  children,
  ...props
}: FieldProps) => (
  <Container>
    <Input
      type={type}
      name={name}
      title={title}
      placeholder={placeholder}
      {...props}
    />
    {children}
  </Container>
);

Field.defaultProps = {
  children: React.Fragment,
};

export default Field;
