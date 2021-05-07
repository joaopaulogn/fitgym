import React from 'react';
import Container from './style';
import Button from '../Button';

interface SectionProps {
  content: string | React.ReactElement;
  button: {
    text: string;
    width: '100%' | '34rem' | '17rem';
  };
  children: React.ReactElement;
}

const Section = ({ content, button, children }: SectionProps) => (
  <Container>
    <p className="text-normal text">{content}</p>
    {children}
    <Button type="button" text={button.text} width={button.width} />
  </Container>
);

export default Section;
