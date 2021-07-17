import React, { InputHTMLAttributes } from 'react';
import AuthField from '.';
import ChangeVisibility from '../../ChangeVisibility';
import Icon from '../../Icon';
import setError from './setErrorState';

interface PasswordProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: 'password' | 'confirmPassword';
  placeholder?: 'Senha' | 'Confirmar senha';
  title?: string;
  instructions?: string | React.ReactElement;
  errorMessage: string;
}

const PasswordInput = ({
  name,
  placeholder,
  title,
  instructions,
  errorMessage,
}: PasswordProps) => {
  function handleBlur({ currentTarget }: React.FormEvent) {
    const $this = currentTarget as HTMLInputElement;
    const isValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      $this.value,
    );

    if (isValid) {
      $this.classList.add('valid');
    } else {
      setError($this, errorMessage);
    }
  }

  return (
    <AuthField
      type="password"
      name={name}
      title={title}
      placeholder={placeholder}
      onBlur={(event) => handleBlur(event)}
      instructions={instructions}
    >
      <>
        <Icon icon="lock" />
        <ChangeVisibility />
      </>
    </AuthField>
  );
};

PasswordInput.defaultProps = {
  name: 'password',
  title: 'Digite sua senha',
  placeholder: 'Senha',
  instructions: (
    <>
      Sua senha deve seguir o padrão abaixo:
      <br />
      - Conter pelo menos 1 letra minúscula, 1 letra maiúscula,
      <br />
      1 número e 1 símbolo.
      <br /> - Ter no mínimo 8 caracteres.
    </>
  ),
};

export default PasswordInput;
