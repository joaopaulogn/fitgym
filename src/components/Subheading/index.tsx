import React from 'react';
import Container from './style';

interface SubheadingProps {
  text: string;
}

const Subheading = ({ text }: SubheadingProps): JSX.Element => (
  <Container className="subheading">{text}</Container>
);

export default Subheading;
