import React from 'react';
import Container from './style';

interface InfoTextProps {
  text: string;
  children?: React.ReactElement;
}

const InfoText = ({ text, children }: InfoTextProps) => (
  <Container className="bottom-content">
    <p className="text text-small">{text}</p>
    {children}
  </Container>
);

InfoText.defaultProps = {
  children: <></>,
};

export default InfoText;
