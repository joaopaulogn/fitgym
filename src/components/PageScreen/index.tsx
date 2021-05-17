import React from 'react';
import Container from './style';
import Menu from '../Menu';
import Footer from '../Footer';
import Header from '../Header';

interface PageScreenProps {
  heading: React.ReactElement | React.ReactText;
  subheading: string;
  children: React.ReactElement;
  banner?: React.ReactElement;
}

const PageScreen = ({
  heading,
  subheading,
  children,
  banner,
}: PageScreenProps) => (
  <Container>
    <Menu />

    <section>
      <Header heading={heading} subheading={subheading} />
      {children}
      {banner}

      <Footer />
    </section>
  </Container>
);

PageScreen.defaultProps = {
  banner: React.Fragment,
};

export default PageScreen;
