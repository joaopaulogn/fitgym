import React, { InputHTMLAttributes } from 'react';
import Input from '..';
import ErrorAlert from '../../Error';

interface EmailProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  errorMessage?: string;
}

const EmailInput = ({ title, errorMessage }: EmailProps) => (
  <div className="form__field">
    <Input
      type="email"
      name="email"
      id="email"
      placeholder="E-mail"
      minLength={11}
      title={title}
      errorMessage={errorMessage}
      icon="alternate_email"
    />
    <ErrorAlert text={errorMessage} />
  </div>
);

EmailInput.defaultProps = {
  title: 'Digite seu e-mail cadastrado',
  errorMessage: 'E-mail não cadastrado. Por favor, tente novamente.',
};

export default EmailInput;
