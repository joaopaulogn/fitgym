import React from 'react';
import Container from './style';
import Heading from '../Heading';
import Subheading from '../Subheading';
import Form from '../Form';

interface AuthProps extends React.FormHTMLAttributes<HTMLFormElement> {
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
  ...props
}: AuthProps) => (
  <Container>
    <Heading>{heading}</Heading>
    <Subheading text={subheading} />
    <Form {...props}>{form}</Form>
    {bottomContent}
  </Container>
);

AuthScreen.defaultProps = {
  bottomContent: <></>,
};

export default AuthScreen;
