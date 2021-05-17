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
export function isValidPassword(input?: HTMLInputElement): boolean {
  const password = document.getElementById('password') as HTMLInputElement;
  const newPassword = document.getElementById(
    'newPassword',
  ) as HTMLInputElement;

  const ruleValidation = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  return input
    ? ruleValidation.test(newPassword.value) &&
        newPassword.value === password.value
    : ruleValidation.test(password.value);
}

// Validation of confirm password field
// TODO: refazer a validação de confirmar senha, pois deve ser idêntica à senha digita anteriormente, seja nova senha (para redefinição) ou senha para cadastro.
// export function isValidConfirmPassword(input: HTMLInputElement): boolean {
//   const passwords = document.querySelectorAll('input[type="password"]');

//   passwords.forEach(password => {
//     password.id === 'confirmPassword' ?
//   })
// }
