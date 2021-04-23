import React from 'react';
import Container from './style';
import Heading from '../Heading';
import Subheading from '../Subheading';

interface AuthProps {
  heading: React.ReactElement | React.ReactText;
  subheading: string;
  form: React.ReactElement;
  bottomContent?: React.ReactElement;
}

const AuthScreen = ({
  heading,
  subheading,
  form,
  bottomContent,
}: AuthProps) => (
  <Container>
    <Heading>{heading}</Heading>
    <Subheading text={subheading} />
    {form}
    {bottomContent}
  </Container>
);

AuthScreen.defaultProps = {
  bottomContent: <></>,
};

export default AuthScreen;
