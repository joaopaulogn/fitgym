import React from 'react';
import Container from './style';

interface HeadingProps {
  children: React.ReactNode;
}

const Heading = ({ children }: HeadingProps) => (
  <Container className="heading">{children}</Container>
);

export default Heading;
