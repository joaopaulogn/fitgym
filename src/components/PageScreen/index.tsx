import React from 'react';
import Container from './style';
import Menu from '../Menu';
import Footer from '../Footer';
import Header from '../Header';

interface PageScreenProps {
  heading: React.ReactElement | React.ReactText;
  subheading: string;
  children: React.ReactElement;
  bannerSrc: string;
  bannerAlt: string;
}

const PageScreen = ({
  heading,
  subheading,
  children,
  bannerSrc,
  bannerAlt,
}: PageScreenProps) => (
  <Container>
    <Menu />

    <section>
      <Header heading={heading} subheading={subheading} />
      <main>
        <section>{children}</section>
        <div className="banner">
          <img src={bannerSrc} alt={bannerAlt} />
        </div>
      </main>

      <Footer />
    </section>
  </Container>
);

export default PageScreen;
