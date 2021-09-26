import React, { FormEvent } from 'react';
import { isValidPassword } from '../../../utils/validation';
import Icon from '../../Icon';
import PasswordField, { DefaultProps } from './view';

const PasswordContainer = ({
  name,
  title,
  value,
  placeholder,
  icon,
  instructionMessage,
  handleValue,
}: DefaultProps): JSX.Element => {
  function handleValueValidation(event: FormEvent<HTMLInputElement>): void {
    const field = event.currentTarget;
    const condition = isValidPassword();

    if (condition) {
      field.classList.add('valid');
    } else {
      field.classList.remove('valid');
      field.classList.add('invalid');
    }
  }

  return (
    <PasswordField
      name={name}
      title={title}
      value={value}
      placeholder={placeholder}
      icon={icon}
      instructionMessage={instructionMessage}
      handleValueValidation={handleValueValidation}
      handleValue={handleValue}
    />
  );
};

PasswordContainer.defaultProps = {
  name: 'password',
  title: 'Digite sua senha',
  placeholder: 'Senha',
  icon: <Icon icon="lock" />,
  instructionMessage: (
    <>
      Sua senha deve seguir o padrão abaixo: <br />
      - Conter pelo menos 1 letra minúscula, 1 letra maiúscula, 1 número e 1
      símbolo. <br /> - Ter no mínimo 8 caracteres
    </>
  ),
};

export default PasswordContainer;
