import React, { ReactElement } from 'react';
import Container from './style';
import Logo from '../../Logo';

export interface PageScreenProps {
  children: ReactElement;
}

const PageScreen = ({ children }: PageScreenProps) => (
  <Container>
    <section className="container">
      <Logo color="primary" />
      {children}
    </section>
  </Container>
);

export default PageScreen;
