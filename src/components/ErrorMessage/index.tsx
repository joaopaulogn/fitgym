import React from 'react';
import Container from './style';

const ErrorMessage = () => (
  <Container
    role="alert"
    aria-hidden="true"
    aria-live="assertive"
    className="error text-small"
  />
);

export default ErrorMessage;
