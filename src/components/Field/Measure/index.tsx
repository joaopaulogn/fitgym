import React, { FormEvent } from 'react';
import Measure from '../../../helpers/Measure';
import MeasureField, { DefaultProps } from './view';

const MeasureFieldContainer = ({
  name,
  title,
  value,
  measureType,
  handleValue,
}: DefaultProps): JSX.Element => {
  // const numberKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  // function handleValueMasking(event: KeyboardEvent<HTMLInputElement>): void {
  //   const field = event.currentTarget;
  //   const { value } = field;
  //   const condition = numberKeys.some((key) => event.key === key);

  //   if (condition) {
  //     if (value.length === 1) {
  //       field.value = `${value}.`;
  //     } else if (value.length === 3) {
  //       const cleanValue = field.value.replace('.', '');
  //       field.value = `${cleanValue}.`;
  //     }
  //   }
  // }

  function handleValueValidation(event: FormEvent<HTMLInputElement>): void {
    const field = event.currentTarget;
    const { value } = field;
    const measure: Measure = new Measure(value);

    if (!measure.isValid()) field.classList.add('invalid');
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
