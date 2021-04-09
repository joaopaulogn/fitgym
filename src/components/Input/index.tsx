import React from 'react';
import Container from './style';
import removeErrorAlert from './event';
import Icon from '../Icon/index';

interface InputProps {
  type: string;
  name: string;
  id: string;
  placeholder: string;
  iconName: string;
}

const Input = ({ type, name, id, placeholder, iconName }: InputProps) => (
  <Container className="input">
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      required
      className="text-normal"
      onClick={removeErrorAlert}
    />
    <Icon icon={iconName} />
    <span role="alert" aria-hidden="true" className="error text-small" />
  </Container>
);

export default Input;
