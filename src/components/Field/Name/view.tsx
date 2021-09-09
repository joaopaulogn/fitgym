import React, { ChangeEvent, FormEvent } from 'react';
import Field from '..';
import FieldHelper from '../../../helpers/Field';
import Instructions from '../../Instructions';
import Icon from '../../Icon';

export interface DefaultProps {
  value: string;
  placeholder: string;
  icon?: JSX.Element | string;
  handleValue(event: ChangeEvent<HTMLInputElement>): void;
}

interface NameFieldProps extends DefaultProps {
  handleValueValidation(event: FormEvent<HTMLInputElement>): void;
}

const NameField = ({
  value,
  placeholder,
  icon,
  handleValue,
  handleValueValidation,
}: NameFieldProps): JSX.Element => (
  <Field
    type="text"
    name="name"
    value={value}
    title="Nome do aluno"
    placeholder={placeholder}
    onChange={handleValue}
    onFocus={({ currentTarget }) =>
      new FieldHelper(currentTarget).setDefaultState()
    }
    onBlur={handleValueValidation}
    instructionMessage={
      <Instructions text="Digite seu nome completo, por favor" />
    }
  >
    {typeof icon === 'string' ? <Icon icon={icon} /> : <></>}
  </Field>
);

export default NameField;
