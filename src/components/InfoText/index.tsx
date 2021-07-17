import React from 'react';
import Container from './style';

interface InfoTextProps {
  text: string;
}

const InfoText = ({ text }: InfoTextProps) => (
  <Container className="info-text text-small">{text}</Container>
);

export default InfoText;
