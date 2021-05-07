import React from 'react';
import Container from './style';

interface ErrorProps {
  text: string;
}

const ErrorAlert = ({ text }: ErrorProps) => (
  <Container
    role="alert"
    aria-hidden="true"
    aria-live="assertive"
    className="error text-small"
  >
    {text}
  </Container>
);

export default ErrorAlert;
