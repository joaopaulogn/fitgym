import React, { FormEvent, Fragment, KeyboardEvent } from 'react';
import { isValidPhone } from '../../../utils/validation';
import PhoneField, { DefaultProps } from './view';

const PhoneFieldContainer = ({
  value,
  title,
  placeholder,
  icon,
  handleValue,
}: DefaultProps): JSX.Element => {
  function handleValueValidation(event: FormEvent<HTMLInputElement>): void {
    const field = event.currentTarget;
    const condition = isValidPhone();

    if (!condition) field.classList.add('invalid');
  }

  function handleValueMasking(event: KeyboardEvent<HTMLInputElement>): void {
    const field = event.currentTarget;
    const { value } = field;
    const { length } = value;
    const keys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const isLandline = field.value[5] !== '9';
    const condition = keys.some((key) => event.key === key);

    if (condition) {
      if (length === 0) {
        field.value = `(${value}`;
      } else if (length === 3) {
        field.value = `${value}) `;
      } else if (length === 9 && isLandline) {
        field.value = `${value}-`;
        field.setAttribute('maxLength', '14');
      } else if (length === 10) {
        field.value = `${value}-`;
        field.setAttribute('maxLength', '15');
      } else {
        field.value = value;
      }
    }
  }

  return (
    <PhoneField
      value={value}
      title={title}
      placeholder={placeholder}
      icon={icon}
      handleValue={handleValue}
      handleValueMasking={handleValueMasking}
      handleValueValidation={handleValueValidation}
    />
  );
};

PhoneFieldContainer.defaultProps = {
  icon: Fragment,
};

export default PhoneFieldContainer;
