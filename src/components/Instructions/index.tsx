import React, { ReactElement } from 'react';
import Container from './style';

interface InstructionsProps {
  text: string | ReactElement | undefined;
}

const Instructions = ({ text }: InstructionsProps): JSX.Element => (
  <Container className="instructions text-small" aria-hidden="false">
    {text}
  </Container>
);

export default Instructions;
