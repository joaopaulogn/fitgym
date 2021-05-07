import React from 'react';
import Container from './style';
import Heading from '../Heading';
import Subheading from '../Subheading';

interface HeaderProps {
  heading: React.ReactElement | React.ReactText;
  subheading: string;
}

const Header = ({ heading, subheading }: HeaderProps) => (
  <Container>
    <div className="heading-box">
      <Heading>{heading}</Heading>
      <Subheading text={subheading} />
    </div>
  </Container>
);

export default Header;
