import React, { FormEvent, Fragment } from 'react';
import { isValidEmail } from '../../../utils/validation';
import EmailField, { DefaultProps } from './view';

const EmailFieldContainer = ({
  value,
  title,
  placeholder,
  icon,
  handleValue,
}: DefaultProps): JSX.Element => {
  function handleValueValidation(event: FormEvent<HTMLInputElement>): void {
    const field = event.currentTarget;
    const conditon = isValidEmail();

    if (!conditon) field.classList.add('invalid');
  }

  return (
    <EmailField
      value={value}
      title={title}
      placeholder={placeholder}
      icon={icon}
      handleValue={handleValue}
      handleValueValidation={handleValueValidation}
    />
  );
};

EmailFieldContainer.defaultProps = {
  icon: Fragment,
};

export default EmailFieldContainer;
