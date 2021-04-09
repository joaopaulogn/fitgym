import React from 'react';
import Container from './style';

interface SubheadingProps {
  text: string;
}

const Subheading = ({ text }: SubheadingProps) => <Container>{text}</Container>;

export default Subheading;
