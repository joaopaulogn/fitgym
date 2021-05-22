import React from 'react';
import Container from './style';

interface SectionProps {
  content: string | React.ReactElement;
  children: React.ReactElement;
}

const Section = ({ content, children }: SectionProps) => (
  <Container>
    <p className="text-normal text">{content}</p>
    {children}
  </Container>
);

export default Section;
