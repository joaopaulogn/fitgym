import React, { Fragment } from 'react';
import Container from './style';
import Input, { InputProps } from '../Input';

export interface FieldProps extends InputProps {
  name?: string;
  value?: string;
  children?: JSX.Element;
  instructionMessage?: string | JSX.Element;
}

const Field = ({
  type,
  name,
  value,
  title,
  placeholder,
  children,
  instructionMessage,
  ...props
}: FieldProps): JSX.Element => (
  <Container datatype="field">
    <Input
      type={type}
      name={name}
      value={value}
      title={title}
      placeholder={placeholder}
      className={children ? 'authentication' : ''}
      {...props}
    />
    {children}
    {instructionMessage}
  </Container>
);

Field.defaultProps = {
  value: '',
  children: Fragment,
  instructionMessage: Fragment,
};

export default Field;
