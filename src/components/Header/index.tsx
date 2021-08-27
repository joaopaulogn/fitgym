import React from 'react';
import Container from './style';
import Heading from '../Heading';
import Subheading from '../Subheading';

export interface HeaderProps {
  heading: string | Array<string>;
  subheading: string;
}

const Header = ({ heading, subheading }: HeaderProps): JSX.Element => (
  <Container>
    <Heading>{heading}</Heading>
    <Subheading text={subheading} />
  </Container>
);

export default Header;
