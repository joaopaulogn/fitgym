import React from 'react';
import { isValidPassword, isValidConfirmPassword } from '../../Field/valid';

function validateResetPassword(event: React.FormEvent) {
  event.preventDefault();

  if (isValidPassword() && isValidConfirmPassword()) {
    window.location.pathname = '/';
  }
}
export default validateResetPassword;
