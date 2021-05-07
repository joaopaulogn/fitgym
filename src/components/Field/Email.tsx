import React, { InputHTMLAttributes } from 'react';
import Field from '.';
import Icon from '../Icon';
import ErrorAlert from '../ErrorAlert';

interface EmailProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  errorMessage: string;
}

const EmailInput = ({ title, errorMessage }: EmailProps) => (
  <Field
    type="email"
    name="email"
    id="email"
    minLength={11}
    title={title}
    placeholder="E-mail"
  >
    <>
      <Icon icon="alternate_email" />
      <ErrorAlert text={errorMessage} />
    </>
  </Field>
);

// EmailInput.defaultProps = {
//   title: 'Digite seu e-mail cadastrado',
//   errorMessage: 'E-mail não cadastrado. Por favor, tente novamente.',
// };

export default EmailInput;
