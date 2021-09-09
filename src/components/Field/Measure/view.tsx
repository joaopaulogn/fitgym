import React, { ChangeEvent, FormEvent } from 'react';
import Field from '..';
import FieldHelper from '../../../helpers/Field';

export interface DefaultProps {
  name: string;
  title: string;
  value: string;
  measureType: string;
  handleValue(event: ChangeEvent<HTMLInputElement>): void;
}

interface MeasureFieldProps extends DefaultProps {
  handleValueValidation(event: FormEvent<HTMLInputElement>): void;
}

const MeasureField = ({
  name,
  title,
  value,
  measureType,
  handleValue,
  handleValueValidation,
}: MeasureFieldProps): JSX.Element => (
  <Field
    type="text"
    name={name}
    title={title}
    value={value}
    maxLength={5}
    className="measure"
    onChange={handleValue}
    onFocus={({ currentTarget }) =>
      new FieldHelper(currentTarget).setDefaultState()
    }
    onBlur={handleValueValidation}
  >
    <>
      <span className="title">{title}</span>
      <span className="measure-type">{measureType}</span>
    </>
  </Field>
);

export default MeasureField;
