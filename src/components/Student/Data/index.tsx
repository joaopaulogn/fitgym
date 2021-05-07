import React from 'react';
import Container from './style';
import Icon from '../../Icon';

interface DataProps {
  icon: string;
  text: string;
}

const Data = ({ icon, text }: DataProps) => (
  <Container className="text-normal">
    <Icon icon={icon} />
    {text}
  </Container>
);

export default Data;
