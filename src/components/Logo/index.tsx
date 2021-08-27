import React from 'react';
import Container from './style';

interface LogoProps {
  color?: 'primary' | 'white';
}

const Logo = ({ color }: LogoProps): JSX.Element => (
  <Container className={`logo ${color}`}>
    <div className="icon material-icons-outlined" />
    FITGYM
  </Container>
);

Logo.defaultProps = {
  color: 'white',
};

export default Logo;
