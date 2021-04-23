import {
  isValidCompany,
  isValidEmail,
  isValidPassword,
  isValidConfirmPassword,
} from '../Input/validation';
import { addInvalidState } from '../Input/invalidState';

function validateForm(...inputs: HTMLInputElement[]) {
  inputs.forEach((input) => {
    if (input.id === 'company' && !isValidCompany()) {
      addInvalidState(input);
    }
    if (input.id === 'email' && !isValidEmail()) {
      addInvalidState(input);
    }
    if (input.id === 'password' && !isValidPassword()) {
      addInvalidState(input);
    }
    if (input.id === 'confirmPassword' && !isValidConfirmPassword()) {
      addInvalidState(input);
    }
  });
}

export default validateForm;
