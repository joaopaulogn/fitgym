export function removeInvalidState(input: HTMLInputElement): void {
  const errorElement = input.parentElement
    ?.nextElementSibling as HTMLSpanElement;

  input.classList.remove('invalid');
  errorElement.classList.remove('visible');
  errorElement.setAttribute('aria-hidden', 'true');
}

export function addInvalidState(input: HTMLInputElement): void {
  const errorElement = input.parentElement
    ?.nextElementSibling as HTMLSpanElement;

  input.classList.add('invalid');
  errorElement.classList.add('visible');
  errorElement.setAttribute('aria-hidden', 'false');
}
