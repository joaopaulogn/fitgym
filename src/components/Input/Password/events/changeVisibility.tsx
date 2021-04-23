function changeVisibility(event: React.MouseEvent): void {
  const button = event.currentTarget as HTMLButtonElement;
  const passwordField = button.previousElementSibling
    ?.previousElementSibling as HTMLInputElement;

  let state = 'visibility_off';
  let inputType = 'password';
  let isPressed = 'false';

  if (button.getAttribute('aria-pressed') === 'false') {
    state = 'visibility';
    inputType = 'text';
    isPressed = 'true';
  }

  button.innerHTML = state;
  button.setAttribute('aria-pressed', isPressed);
  passwordField.setAttribute('type', inputType);
}

export default changeVisibility;
