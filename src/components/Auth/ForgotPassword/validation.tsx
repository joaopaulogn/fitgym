import React from 'react';
import validateForm from '../validator';

function validateForgotPassword(event: React.FormEvent): void {
  event.preventDefault();

  const email = document.getElementById('email') as HTMLInputElement;
  validateForm(email);
}

export default validateForgotPassword;
