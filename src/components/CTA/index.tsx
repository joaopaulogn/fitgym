import React from 'react';
import Container from './style';

interface CTAProps {
  text: string;
  action: string;
}

const CTA = ({ text, action }: CTAProps) => (
  <Container className="text-normal">
    <p className="text">{text}</p>
    <a href="/" className="action">
      {action}
    </a>
  </Container>
);

export default CTA;
