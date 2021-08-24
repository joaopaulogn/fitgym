import React, { ChangeEvent, FormEvent, InputHTMLAttributes } from 'react';
import Field from '..';
import Icon from '../../Icon';
import setDefaultValue from '../setDefaultValue';
import Instructions from '../../Instructions';
import ErrorMessage from '../../ErrorMessage';
import Visibility from '../../Visibility';

export interface DefaultProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: 'password' | 'confirmPassword';
  title?: 'Digite sua senha' | 'Confirme sua senha';
  value: string;
  placeholder?: 'Senha' | 'Confirmar senha';
  instructionMessage?: string | JSX.Element;
  handleValue(event: ChangeEvent<HTMLInputElement>): void;
}

interface PasswordFieldProps extends DefaultProps {
  handleValueValidation(event: FormEvent<HTMLInputElement>): void;
}

const PasswordField = ({
  name,
  value,
  title,
  placeholder,
  instructionMessage,
  handleValueValidation,
  handleValue,
}: PasswordFieldProps) => (
  <Field
    type="password"
    name={name}
    value={value}
    title={title}
    placeholder={placeholder}
    onFocus={(event) => setDefaultValue(event.currentTarget)}
    onBlur={handleValueValidation}
    instructionMessage={<Instructions text={instructionMessage} />}
    errorMessage={<ErrorMessage />}
    onChange={handleValue}
  >
    <>
      <Icon icon="lock" />
      <Visibility />
    </>
  </Field>
);

export default PasswordField;
