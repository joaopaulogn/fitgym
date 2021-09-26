import React, { FormEvent, KeyboardEvent } from 'react';
import { isValidCNPJ } from '../../../utils/validation';
import { DefaultProps } from '../Password/view';
import CNPJField from './view';

const CNPJContainer = ({ value, handleValue }: DefaultProps): JSX.Element => {
  function handleValueMasking(event: KeyboardEvent<HTMLInputElement>): void {
    const field = event.currentTarget;
    const keys = ['Backspace', 'Delete'];
    const condition = keys.some((key) => event.key !== key);

    if (condition) {
      if (field.value.length === 2 || field.value.length === 6) {
        field.value += '.';
      } else if (field.value.length === 10) {
        field.value += '/';
      } else if (field.value.length === 15) {
        field.value += '-';
      }
    }
  }

  function handleValueValidation(event: FormEvent<HTMLInputElement>): void {
    const field = event.currentTarget;
    const condition = isValidCNPJ();

    if (condition) {
      field.classList.add('valid');
    } else {
      field.classList.remove('valid');
      field.classList.add('invalid');
    }
  }

  return (
    <CNPJField
      value={value}
      handleValueMasking={handleValueMasking}
      handleValueValidation={handleValueValidation}
      handleValue={handleValue}
    />
  );
};

export default CNPJContainer;
