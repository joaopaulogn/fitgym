import React, { ChangeEvent, FormEvent, InputHTMLAttributes } from 'react';
import Field from '..';
import Instructions from '../../Instructions';
import PasswordVisibility from '../../PasswordVisibility';
import FieldHelper from '../../../helpers/Field';

export interface DefaultProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: 'password' | 'confirmPassword';
  title?: 'Digite sua senha' | 'Confirme sua senha';
  value: string;
  placeholder?: 'Senha' | 'Confirmar senha';
  icon?: JSX.Element;
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
  icon,
  instructionMessage,
  handleValueValidation,
  handleValue,
}: PasswordFieldProps): JSX.Element => (
  <Field
    type="password"
    name={name}
    value={value}
    title={title}
    placeholder={placeholder}
    onChange={handleValue}
    onFocus={({ currentTarget }) =>
      new FieldHelper(currentTarget).setDefaultState()
    }
    onBlur={handleValueValidation}
    instructionMessage={<Instructions text={instructionMessage} />}
  >
    <>
      {icon}
      <PasswordVisibility />
    </>
  </Field>
);

export default PasswordField;
