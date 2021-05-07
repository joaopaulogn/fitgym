import React from 'react';
import {
  isValidCompany,
  isValidEmail,
  isValidPassword,
  isValidConfirmPassword,
} from './validator';
import { addInvalidState } from '../../events/setInvalidState';

function setValidityState({ currentTarget }: React.FocusEvent): void {
  const input = currentTarget as HTMLInputElement;
  const { id } = currentTarget;

  if (id === 'company') {
    isValidCompany() ? input.classList.add('valid') : addInvalidState(input);
  } else if (id === 'email') {
    isValidEmail() ? input.classList.add('valid') : addInvalidState(input);
  } else if (id === 'password' || id === 'newPassword') {
    isValidPassword() ? input.classList.add('valid') : addInvalidState(input);
  } else if (id === 'confirmPassword') {
    isValidConfirmPassword()
      ? input.classList.add('valid')
      : addInvalidState(input);
  }
}

export default setValidityState;
