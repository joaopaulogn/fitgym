import React from 'react';
import {
  isValidCompany,
  isValidEmail,
  isValidPassword,
  isValidConfirmPassword,
} from '../../valid';

export function removeInvalidState(input: HTMLInputElement): void {
  const errorElement = input.parentElement
    ?.nextElementSibling as HTMLSpanElement;

  input.classList.remove('invalid');
  errorElement.classList.remove('visible');
  errorElement.setAttribute('aria-hidden', 'true');
}

function setValidityState({ currentTarget }: React.FocusEvent): void {
  const input = currentTarget as HTMLInputElement;
  const { id } = currentTarget;

  function addInvalidState(): void {
    const errorElement = input.parentElement
      ?.nextElementSibling as HTMLSpanElement;

    input.classList.remove('valid');
    input.classList.add('invalid');
    errorElement.classList.add('visible');
    errorElement.setAttribute('aria-hidden', 'false');
  }

  if (id === 'company') {
    isValidCompany() ? input.classList.add('valid') : addInvalidState();
  } else if (id === 'email') {
    isValidEmail() ? input.classList.add('valid') : addInvalidState();
  } else if (id === 'password') {
    isValidPassword() ? input.classList.add('valid') : addInvalidState();
  } else if (id === 'confirmPassword') {
    isValidConfirmPassword() ? input.classList.add('valid') : addInvalidState();
  }
}

export default setValidityState;
