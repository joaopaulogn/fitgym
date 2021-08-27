import React from 'react';
import Container from './style';

interface ErrorMessageProps {
  message?: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps): JSX.Element => (
  <Container
    role="alert"
    aria-hidden="true"
    aria-live="assertive"
    className="error text-small"
  >
    {message}
  </Container>
);

ErrorMessage.defaultProps = {
  message: '',
};

export default ErrorMessage;
