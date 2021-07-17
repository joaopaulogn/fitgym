export default function setErrorState(
  $element: HTMLInputElement,
  errorMessage: string,
) {
  const $error = $element.parentElement?.nextElementSibling
    ?.nextElementSibling as HTMLSpanElement;

  $element.classList.add('invalid');
  $element.setAttribute('data-valid', 'false');
  $error.classList.add('visible');
  $error.setAttribute('aria-hidden', 'false');
  $error.innerText = errorMessage;

  if ($error.previousElementSibling) {
    const $instructions = $error.previousElementSibling as HTMLSpanElement;
    $instructions.classList.add('hidden');
  }
}
