import { SyntheticEvent } from 'react';

function removeErrorAlert(e: SyntheticEvent) {
  e.preventDefault();
  const element = e.currentTarget;

  if (element.classList.contains('invalid')) {
    const errorAlert = element.nextElementSibling?.nextElementSibling;

    element.classList.remove('invalid');
    errorAlert?.classList.remove('visible');
    errorAlert?.setAttribute('aria-hidden', 'true');
    errorAlert?.removeAttribute('aria-invalid');
  }
}
export default removeErrorAlert;
