import React from 'react';
import validateForm from '../validator';

function validateSignUp(event: React.FormEvent): void {
  event.preventDefault();

  const [company, email, password, confirmPassword] = document.querySelectorAll(
    'input',
  );
  validateForm(company, email, password, confirmPassword);
}

export default validateSignUp;
