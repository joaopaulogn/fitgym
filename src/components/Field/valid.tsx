export function isValidCompany() {
  const field = document.getElementById('company') as HTMLInputElement;
  return /^[a-zA-Z ]{1,}$/.test(field.value);
}

export function isValidEmail() {
  const field = document.getElementById('email') as HTMLInputElement;
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/gi.test(field.value);
}

export function isValidPassword() {
  const field = document.getElementById('password') as HTMLInputElement;
  return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
    field.value,
  );
}

export function isValidConfirmPassword() {
  const field = document.getElementById('password') as HTMLInputElement;
  const confirmField = document.getElementById(
    'confirmPassword',
  ) as HTMLInputElement;

  return isValidPassword() && field.value === confirmField.value;
}
