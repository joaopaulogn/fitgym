import React from 'react';
import Container from './style';
import Logo from '../Logo';

export interface PageScreenProps {
  content: React.ReactElement;
  menu?: React.ReactElement;
  button?: React.ReactElement;
}

const PageScreen = ({ content, menu, button }: PageScreenProps) => (
  <Container>
    <section>
      <Logo primaryColor />
      {menu}
      {button}
      {content}
    </section>
  </Container>
);

PageScreen.defaultProps = {
  menu: React.Fragment,
  button: React.Fragment,
};

export default PageScreen;
