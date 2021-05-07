import React from 'react';
import Container from './style';
import Input, { InputProps } from '../Input';
import { removeInvalidState } from '../../events/setInvalidState';
import setValidityState from './validityState';

interface FieldProps extends InputProps {
  title: string;
  placeholder: string;
  children: React.ReactElement;
}

const Field = ({
  type,
  name,
  id,
  title,
  placeholder,
  children,
}: FieldProps) => (
  <Container className="field">
    <Input
      type={type}
      name={name}
      id={id}
      title={title}
      placeholder={placeholder}
      onClick={({ currentTarget }) => removeInvalidState(currentTarget)}
      onFocus={({ currentTarget }) => removeInvalidState(currentTarget)}
      onBlur={setValidityState}
    />
    {children}
  </Container>
);

export default Field;
