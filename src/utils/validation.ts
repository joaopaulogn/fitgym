import { clearCNPJValue, clearMeasureValue } from './format';

export function isValidCNPJ(): boolean {
  return clearCNPJValue().length === 14;
}

export function isValidEmail(): boolean {
  const { value } = document.getElementById('email') as HTMLInputElement;
  const rule = new RegExp(
    `^(([^<>()\\[\\]\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$`,
  );

  return rule.test(value);
}

export function isValidMeasure(): boolean {
  const cleanValue = clearMeasureValue();
  const value = cleanValue.toString();

  return !Number.isNaN(cleanValue) && value.length > 0;
}

export function isValidName(): boolean {
  const { value } = document.getElementById('name') as HTMLInputElement;

  return value.length > 0;
}

export function isValidPassword(): boolean {
  const { value } = document.getElementById('password') as HTMLInputElement;
  const rule = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  return rule.test(value);
}

export function isValidPhone(): boolean {
  const { value } = document.getElementById('phone') as HTMLInputElement;
  const rule = /\(\d{2,}\) \d{4,}-\d{4}/;

  return rule.test(value);
}
