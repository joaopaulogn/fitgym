import React from 'react';
import validateForm from '../validator';

function validateSignIn(event: React.FormEvent): void {
  event.preventDefault();
  const email = document.getElementById('email') as HTMLInputElement;
  const password = document.getElementById('password') as HTMLInputElement;

  validateForm(email, password);
}

export default validateSignIn;
