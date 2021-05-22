import React from 'react';
import Container from './style';

interface LogoProps {
  primaryColor?: boolean;
}

const Logo = ({ primaryColor }: LogoProps) => (
  <Container className={primaryColor ? 'logo primary-color' : 'logo'}>
    <div className="icon material-icons-outlined" />
    FITGYM
  </Container>
);

Logo.defaultProps = {
  primaryColor: false,
};

export default Logo;
