import {
  isValidCompany,
  isValidEmail,
  isValidPassword,
  isValidConfirmPassword,
} from '../../valid';

function setButtonState() {
  const { pathname } = window.location;
  const button = document.querySelector('button') as HTMLButtonElement;
  let condition;

  switch (pathname) {
    default:
      condition = isValidPassword() && isValidConfirmPassword();
      break;
    case '/':
      condition = isValidEmail() && isValidPassword();
      break;
    case '/signup':
      condition =
        isValidCompany() &&
        isValidEmail() &&
        isValidPassword() &&
        isValidConfirmPassword();
      break;
    case '/forgot-password':
      condition = isValidEmail();
      break;
    case '/settings/edit':
      condition = isValidCompany() && isValidEmail();
      break;
  }

  condition
    ? button.removeAttribute('disabled')
    : button.setAttribute('disabled', 'true');
}

export default setButtonState;
