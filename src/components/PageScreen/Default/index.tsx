import React from 'react';
import Container from './style';
import Logo from '../../Logo';

export interface DefaultScreenProps {
  children: React.ReactElement;
}

const DefaultScreen = ({ children }: DefaultScreenProps) => (
  <Container>
    <section className="container">
      <Logo color="primary" />
      {children}
    </section>
  </Container>
);

export default DefaultScreen;
