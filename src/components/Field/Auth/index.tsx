import React from 'react';
import Container from './style';
import Field, { FieldProps } from '..';
import ErrorMessage from '../../ErrorMessage';
import Instructions from '../../Instructions';

interface AuthFieldProps extends FieldProps {
  instructions?: string | React.ReactElement;
}

const AuthField = ({
  type,
  name,
  placeholder,
  title,
  children,
  instructions,
  ...props
}: AuthFieldProps) => {
  function handleOnFocus({ currentTarget }: React.FocusEvent) {
    const $error = currentTarget.parentElement?.nextElementSibling
      ?.nextElementSibling as HTMLSpanElement;
    const $instructions = $error.previousElementSibling as HTMLSpanElement;

    currentTarget.classList.remove('invalid');
    $error.classList.remove('visible');
    $error.setAttribute('aria-hidden', 'true');
    $instructions.classList.remove('hidden');
    $instructions.setAttribute('aria-hidden', 'false');
  }

  return (
    <Container datatype="field">
      <Field
        type={type}
        name={name}
        title={title}
        placeholder={placeholder}
        onFocus={(event) => handleOnFocus(event)}
        {...props}
      >
        {children}
      </Field>
      <>
        <Instructions text={instructions} />
        <ErrorMessage />
      </>
    </Container>
  );
};

AuthField.defaultProps = {
  instructions: React.Fragment,
};

export default AuthField;
