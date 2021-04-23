import React from 'react';
import validateForm from '../validator';
import {
  isValidPassword,
  isValidConfirmPassword,
} from '../../Input/validation';

function validateResetPassword(event: React.FormEvent) {
  event.preventDefault();
  const [newPassword, confirmNewPassword] = document.querySelectorAll('input');

  validateForm(newPassword, confirmNewPassword);

  if (isValidPassword() && isValidConfirmPassword()) {
    window.location.pathname = '/';
  }
}
export default validateResetPassword;
