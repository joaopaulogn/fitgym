// Validation of company name field
export function isValidCompany(): boolean {
  const company = document.getElementById('company') as HTMLInputElement;

  return /^[a-zA-Z ]{1,}$/.test(company.value);
}

// Validation of email field
export function isValidEmail(): boolean {
  const email = document.getElementById('email') as HTMLInputElement;

  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/gi.test(email.value);
}

// Validation of password field
export function isValidPassword(): boolean {
  const password = document.getElementById('password') as HTMLInputElement;

  return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
    password.value,
  );
}

// Validation of confirm password field
export function isValidConfirmPassword(): boolean {
  const password = document.getElementById('password') as HTMLInputElement;
  const confirmPassword = document.getElementById(
    'confirmPassword',
  ) as HTMLInputElement;

  return isValidPassword() && confirmPassword.value === password.value;
}
