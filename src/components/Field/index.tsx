import React from 'react';
import Container from './style';
import Input, { InputProps } from '../Input';
import Icon from '../Icon';

export interface FieldProps extends InputProps {
  title: string;
  placeholder: string;
  autoComplete?: string;
  icon: string;
  button?: React.ReactElement;
}

const Field = ({
  type,
  name,
  id,
  title,
  placeholder,
  icon,
  button,
  autoComplete,
  ...props
}: FieldProps) => (
  <Container>
    <Input
      type={type}
      name={name}
      id={id}
      title={title}
      autoComplete={autoComplete}
      placeholder={placeholder}
      {...props}
    />
    {button}
    <Icon icon={icon} />
  </Container>
);

Field.defaultProps = {
  button: React.Fragment,
  autoComplete: 'off',
};

export default Field;
