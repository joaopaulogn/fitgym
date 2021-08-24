export default function setErrorState(
  element: HTMLInputElement,
  message: string,
): void {
  const errorMessage = element.parentElement?.querySelector(
    '.error',
  ) as HTMLSpanElement;

  if (errorMessage.previousElementSibling) {
    const instructionMessage = errorMessage.previousElementSibling as HTMLSpanElement;
    instructionMessage.classList.add('hidden');
    instructionMessage.setAttribute('aria-hidden', 'true');
  }

  element.classList.remove('valid');
  element.classList.add('invalid');
  errorMessage.classList.add('visible');
  errorMessage.setAttribute('aria-hidden', 'false');
  errorMessage.innerText = message;
}
