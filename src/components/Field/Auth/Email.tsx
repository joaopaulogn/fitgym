import React, { InputHTMLAttributes } from 'react';
import AuthField from '.';
import ErrorAlert from '../../ErrorAlert';

interface EmailProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  errorMessage?: string;
}

const EmailInput = ({ title, errorMessage }: EmailProps) => (
  <AuthField
    type="email"
    name="email"
    id="email"
    minLength={11}
    title={title}
    placeholder="E-mail"
    icon="alternate_email"
  >
    <ErrorAlert text={errorMessage} />
  </AuthField>
);

EmailInput.defaultProps = {
  title: 'Digite seu e-mail cadastrado',
  errorMessage: 'E-mail não cadastrado. Por favor, tente novamente.',
};

export default EmailInput;
