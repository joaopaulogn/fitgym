import React, { FormEvent, Fragment } from 'react';
import Email from '../../../helpers/Email';
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
    const email: Email = new Email(field.value);

    if (!email.isValid()) field.classList.add('invalid');
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
