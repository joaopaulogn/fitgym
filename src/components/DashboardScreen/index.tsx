import React from 'react';
import Container from './style';
import Menu from '../Menu';
import Header from '../Header';
import Footer from '../Footer';
import ProtectedDashboardPage from '../ProtectedPage/Dashboard';

interface DashboardScreenProps {
  heading: React.ReactElement | React.ReactText;
  subheading: string;
  children: React.ReactElement;
  banner?: React.ReactElement;
}

const DashboardScreen = ({
  heading,
  subheading,
  children,
  banner,
}: DashboardScreenProps) => (
  <ProtectedDashboardPage>
    <Container style={{ display: 'flex' }}>
      <Menu />
      <section>
        <Header heading={heading} subheading={subheading} />
        {children}
        {banner}
        <Footer />
      </section>
    </Container>
  </ProtectedDashboardPage>
);

DashboardScreen.defaultProps = {
  banner: React.Fragment,
};

export default DashboardScreen;
