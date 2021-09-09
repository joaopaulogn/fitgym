import React, { FormEvent, Fragment } from 'react';
import Name from '../../../helpers/Name';
import NameField, { DefaultProps } from './view';

const NameFieldContainer = ({
  value,
  placeholder,
  icon,
  handleValue,
}: DefaultProps): JSX.Element => {
  function handleValueValidation(event: FormEvent<HTMLInputElement>): void {
    const field = event.currentTarget;
    const name: Name = new Name(field.value);

    if (!name.isValid()) field.classList.add('invalid');
  }

  return (
    <NameField
      value={value}
      placeholder={placeholder}
      icon={icon}
      handleValue={handleValue}
      handleValueValidation={handleValueValidation}
    />
  );
};

NameFieldContainer.defaultProps = {
  icon: Fragment,
};

export default NameFieldContainer;
