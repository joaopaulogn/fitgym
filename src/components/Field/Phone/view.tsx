import React, { ChangeEvent, FormEvent, KeyboardEvent } from 'react';
import Field from '..';
import FieldHelper from '../../../helpers/Field';
import Icon from '../../Icon';
import Instructions from '../../Instructions';

export interface DefaultProps {
  value: string;
  title: string;
  placeholder: string;
  icon?: JSX.Element | string;
  handleValue(event: ChangeEvent<HTMLInputElement>): void;
}

interface PhoneFieldProps extends DefaultProps {
  handleValueValidation(event: FormEvent<HTMLInputElement>): void;
  handleValueMasking(event: KeyboardEvent<HTMLInputElement>): void;
}

const PhoneField = ({
  value,
  title,
  placeholder,
  icon,
  handleValue,
  handleValueMasking,
  handleValueValidation,
}: PhoneFieldProps): JSX.Element => (
  <Field
    type="text"
    name="phone"
    value={value}
    title={title}
    placeholder={placeholder}
    onChange={handleValue}
    onKeyDown={handleValueMasking}
    onFocus={({ currentTarget }) =>
      new FieldHelper(currentTarget).setDefaultState()
    }
    onBlur={handleValueValidation}
    instructionMessage={
      <Instructions text="Digite somente números, por favor" />
    }
  >
    {typeof icon === 'string' ? <Icon icon="icon" /> : <></>}
  </Field>
);

export default PhoneField;
