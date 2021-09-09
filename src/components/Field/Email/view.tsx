import React, { ChangeEvent, FormEvent } from 'react';
import Field from '..';
import FieldHelper from '../../../helpers/Field';
import Instructions from '../../Instructions';
import Icon from '../../Icon';

export interface DefaultProps {
  value: string;
  title: string;
  placeholder: string;
  icon?: JSX.Element | string;
  handleValue(event: ChangeEvent<HTMLInputElement>): void;
}

interface EmailFieldProps extends DefaultProps {
  handleValueValidation(event: FormEvent<HTMLInputElement>): void;
}

const EmailField = ({
  value,
  title,
  placeholder,
  icon,
  handleValue,
  handleValueValidation,
}: EmailFieldProps): JSX.Element => (
  <Field
    type="email"
    name="email"
    value={value}
    title={title}
    placeholder={placeholder}
    onChange={handleValue}
    onFocus={({ currentTarget }) =>
      new FieldHelper(currentTarget).setDefaultState()
    }
    onBlur={handleValueValidation}
    instructionMessage={
      <Instructions text="Siga o padrão: 'nome' @ 'provedor' . 'dominio'" />
    }
  >
    {typeof icon === 'string' ? <Icon icon={icon} /> : <></>}
  </Field>
);

export default EmailField;
