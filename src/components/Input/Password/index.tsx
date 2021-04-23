import React, { InputHTMLAttributes } from 'react';
import changeVisibility from './events/changeVisibility';
import Input from '..';
import Icon from '../../Icon';
import ErrorAlert from '../../Error';

interface PasswordProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  id?: string;
  title: string;
  placeholder?: 'Senha' | 'Confirmar senha';
  errorMessage?: string;
}

const PasswordInput = ({
  name,
  id,
  title,
  placeholder,
  errorMessage,
}: PasswordProps) => (
  <div className="form__field">
    <Input
      type="password"
      name={name}
      id={id}
      placeholder={placeholder}
      minLength={8}
      maxLength={32}
      title={title}
      errorMessage={errorMessage}
      icon="lock"
    >
      <Icon
        icon="visibility_off"
        role="button"
        aria-pressed={false}
        className="material-icons-outlined button"
        onClick={changeVisibility}
      />
    </Input>
    <ErrorAlert text={errorMessage} />
  </div>
);

PasswordInput.defaultProps = {
  name: 'password',
  id: 'password',
  placeholder: 'Senha',
  errorMessage:
    'A senha deve ter entre 8 e 32 caracteres, contendo pelo menos 1 letra minúscula, 1 letra maiúscula, 1 número e 1 caractere especial.',
};

export default PasswordInput;
