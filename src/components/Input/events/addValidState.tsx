import React from 'react';
import {
  isValidCompany,
  isValidEmail,
  isValidPassword,
  isValidConfirmPassword,
} from '../validation';

function addValidState(event: React.ChangeEvent): void {
  const input = event.currentTarget as HTMLInputElement;

  input.classList.remove('valid');

  if (input.id === 'company' && isValidCompany()) {
    input.classList.add('valid');
  }
  if (input.id === 'email' && isValidEmail()) {
    input.classList.add('valid');
  }
  if (input.id === 'password' && isValidPassword()) {
    input.classList.add('valid');
  }
  if (input.id === 'confirmPassword' && isValidConfirmPassword()) {
    input.classList.add('valid');
  }
}

export default addValidState;
