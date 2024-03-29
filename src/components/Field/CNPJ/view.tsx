import React, {
  ChangeEvent,
  FormEvent,
  InputHTMLAttributes,
  KeyboardEvent,
} from 'react';
import Field from '..';
import Icon from '../../Icon';
import Instructions from '../../Instructions';
import FieldHelper from '../../../helpers/Field';

interface DefaultProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  handleValue(event: ChangeEvent<HTMLInputElement>): void;
}

interface CNPJFieldProps extends DefaultProps {
  handleValueValidation(event: FormEvent<HTMLInputElement>): void;
  handleValueMasking(event: KeyboardEvent<HTMLInputElement>): void;
}

const CNPJField = ({
  value,
  handleValue,
  handleValueMasking,
  handleValueValidation,
}: CNPJFieldProps): JSX.Element => (
  <Field
    type="text"
    name="cnpj"
    value={value}
    title="Digite o seu CNPJ"
    placeholder="CNPJ"
    maxLength={18}
    onKeyDown={handleValueMasking}
    onFocus={({ currentTarget }) =>
      new FieldHelper(currentTarget).setDefaultState()
    }
    onBlur={handleValueValidation}
    instructionMessage={
      <Instructions text="Digite somente números, por favor" />
    }
    onChange={handleValue}
  >
    <Icon icon="assignment_ind" filled />
  </Field>
);

export default CNPJField;
