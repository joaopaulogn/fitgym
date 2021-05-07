import React, { InputHTMLAttributes } from 'react';
import ChangeVisibility from '../ChangeVisibility';
import Field from '.';
import Icon from '../Icon';
import ErrorAlert from '../ErrorAlert';

interface PasswordProps extends InputHTMLAttributes<HTMLInputElement> {
  name: 'password' | 'newPassword' | 'confirmPassword';
  id: 'password' | 'newPassword' | 'confirmPassword';
  title: string;
  placeholder: 'Senha' | 'Confirmar senha' | 'Senha atual' | 'Nova senha';
  errorMessage: string;
}

const PasswordInput = ({
  name,
  id,
  title,
  placeholder,
  errorMessage,
}: PasswordProps) => (
  <Field
    type="password"
    name={name}
    id={id}
    minLength={8}
    maxLength={32}
    title={title}
    placeholder={placeholder}
  >
    <>
      <Icon icon="lock" />
      <ErrorAlert text={errorMessage} />
      <ChangeVisibility />
    </>
  </Field>
);

// PasswordInput.defaultProps = {
//   name: 'password',
//   id: 'password',
//   placeholder: 'Senha',
//   errorMessage:
//     'A senha deve ter entre 8 e 32 caracteres, contendo pelo menos 1 letra minúscula, 1 letra maiúscula, 1 número e 1 caractere especial.',
// };

export default PasswordInput;
