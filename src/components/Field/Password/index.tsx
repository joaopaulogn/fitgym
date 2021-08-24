import React, { FormEvent } from 'react';
import api from '../../../services/api';
import PasswordField, { DefaultProps } from './view';

export class Password {
  public constructor(private value: string) {
    this.value = value;
  }

  public getValue(): string {
    return this.value;
  }

  public isValid(): boolean {
    return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      this.getValue(),
    );
  }
}

export async function updatePassword(password: string, id?: number) {
  await api.patch(`/reset-password/${id}`, { password });
}

const PasswordContainer = ({
  name,
  title,
  value,
  placeholder,
  instructionMessage,
  handleValue,
}: DefaultProps) => {
  function handleValueValidation(event: FormEvent<HTMLInputElement>): void {
    const thisElement = event.currentTarget;
    const password: Password = new Password(thisElement.value);

    if (password.isValid()) {
      thisElement.classList.add('valid');
    } else {
      thisElement.classList.remove('valid');
      thisElement.classList.add('invalid');
    }
  }

  return (
    <PasswordField
      name={name}
      title={title}
      value={value}
      placeholder={placeholder}
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
  instructionMessage: (
    <>
      Sua senha deve seguir o padrão abaixo: <br />
      - Conter pelo menos 1 letra minúscula, 1 letra maiúscula, 1 número e 1
      símbolo. <br /> - Ter no mínimo 8 caracteres
    </>
  ),
};

export default PasswordContainer;
