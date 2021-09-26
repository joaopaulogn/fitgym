import React, { FormEvent } from 'react';
import { isValidMeasure } from '../../../utils/validation';
import MeasureField, { DefaultProps } from './view';

const MeasureFieldContainer = ({
  name,
  title,
  value,
  measureType,
  handleValue,
}: DefaultProps): JSX.Element => {
  function handleValueValidation(event: FormEvent<HTMLInputElement>): void {
    const field = event.currentTarget;
    const condition = isValidMeasure();

    if (!condition) field.classList.add('invalid');
  }

  return (
    <MeasureField
      name={name}
      title={title}
      value={value}
      measureType={measureType}
      handleValue={handleValue}
      handleValueValidation={handleValueValidation}
    />
  );
};

export default MeasureFieldContainer;
