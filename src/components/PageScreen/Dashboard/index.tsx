import React from 'react';
import Container from './style';
import Menu from '../../Menu';
import Header from '../../Header';
import Footer from '../../Footer';

interface DashboardScreenProps {
  heading: string | Array<string>;
  subheading: string;
  children: React.ReactElement;
}

const DashboardScreen = ({
  heading,
  subheading,
  children,
}: DashboardScreenProps) => (
  <Container>
    <Menu />
    <div className="container">
      <main>
        <Header heading={heading} subheading={subheading} />
        {children}
      </main>
      <Footer position="right" />
    </div>
  </Container>
);

export default DashboardScreen;
