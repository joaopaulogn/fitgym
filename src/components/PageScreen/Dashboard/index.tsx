import React from 'react';
import Container from './style';
import Header, { HeaderProps } from '../../Header';

interface DashboardScreenProps extends HeaderProps {
  children: JSX.Element;
}

const DashboardScreen = ({
  heading,
  subheading,
  children,
}: DashboardScreenProps): JSX.Element => (
  <Container>
    <Header heading={heading} subheading={subheading} />
    <section>{children}</section>
  </Container>
);

export default DashboardScreen;
