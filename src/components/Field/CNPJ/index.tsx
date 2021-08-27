import React, { FormEvent, KeyboardEvent } from 'react';
import { DefaultProps } from '../Password/view';
import CNPJField from './view';

export class CNPJ {
  public constructor(private value: string) {
    this.value = value;
  }

  public getValue(): string {
    return this.value;
  }

  public isValid(): boolean {
    return this.valueCleaner().length === 14;
  }

  public valueCleaner(): string {
    return this.value
      .replace('.', '')
      .replace('.', '')
      .replace('/', '')
      .replace('-', '');
  }

  public valueMasking(): string {
    return this.value.replace(
      /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
      '$1.$2.$3/$4-$5',
    );
  }
}

const CNPJContainer = ({ value, handleValue }: DefaultProps): JSX.Element => {
  function handleValueMasking(event: KeyboardEvent<HTMLInputElement>): void {
    const thisElement = event.currentTarget;

    if (event.key !== 'Backspace' && event.key !== 'Delete') {
      if (thisElement.value.length === 2 || thisElement.value.length === 6) {
        thisElement.value += '.';
      } else if (thisElement.value.length === 10) {
        thisElement.value += '/';
      } else if (thisElement.value.length === 15) {
        thisElement.value += '-';
      }
    }
  }

  function handleValueValidation(event: FormEvent<HTMLInputElement>): void {
    const thisElement = event.currentTarget;
    const cnpj: CNPJ = new CNPJ(thisElement.value);

    if (cnpj.isValid()) {
      thisElement.classList.add('valid');
    } else {
      thisElement.classList.remove('valid');
      thisElement.classList.add('invalid');
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
