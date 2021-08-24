export default function setDefaultValue(element: HTMLInputElement): void {
  const errorMessage = element.parentElement?.querySelector(
    '.error',
  ) as HTMLSpanElement;

  if (errorMessage.previousElementSibling) {
    const instructionMessage = errorMessage.previousElementSibling as HTMLSpanElement;
    instructionMessage.classList.remove('hidden');
    instructionMessage.setAttribute('aria-hidden', 'false');
  }

  element.classList.remove('invalid');
  element.classList.add('valid');
  errorMessage.classList.remove('visible');
  errorMessage.setAttribute('aria-hidden', 'true');
}
