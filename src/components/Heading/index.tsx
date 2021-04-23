import React from 'react';
import Container from './style';

interface HeadingProps {
  children: React.ReactElement | React.ReactText;
}

const Heading = ({ children }: HeadingProps) => (
  <Container className="heading">{children}</Container>
);

export default Heading;
