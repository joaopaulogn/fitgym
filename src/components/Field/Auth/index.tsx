import React from 'react';
import Container from '../style';
import Field, { FieldProps } from '..';
import setValidityState, {
  removeInvalidState,
} from './events/setValidityState';
import setButtonState from './events/setButtonState';

interface AuthFieldProps extends FieldProps {
  children?: React.ReactElement;
}

const AuthField = ({
  type,
  name,
  id,
  title,
  placeholder,
  icon,
  button,
  children,
}: AuthFieldProps) => (
  <Container className="field">
    <Field
      type={type}
      name={name}
      id={id}
      title={title}
      placeholder={placeholder}
      icon={icon}
      button={button}
      onFocus={({ currentTarget }) => removeInvalidState(currentTarget)}
      onBlur={setValidityState}
      onChange={setButtonState}
    />
    {children}
  </Container>
);

AuthField.defaultProps = {
  children: React.Fragment,
};

export default AuthField;
