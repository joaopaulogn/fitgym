import React from 'react';
import Container from './style';

interface IconProps {
  icon: string;
  outlined?: boolean;
}

const Icon = ({ icon, outlined }: IconProps) => (
  <Container className={`material-icons${!outlined ? '' : '-outlined'} icon`}>
    {icon}
  </Container>
);

Icon.defaultProps = {
  outlined: true,
};

export default Icon;
