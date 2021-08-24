import React from 'react';
import Container from './style';
import Heading from '../../Heading';
import Subheading from '../../Subheading';
import Form from '../../Form';

interface AuthProps extends React.FormHTMLAttributes<HTMLFormElement> {
  heading: string | Array<string>;
  subheading: string;
  fields: React.ReactElement;
  buttonText: string;
  bottomContent?: React.ReactElement;
}

const AuthScreen = ({
  heading,
  subheading,
  fields,
  buttonText,
  bottomContent,
  ...props
}: AuthProps) => (
  <Container>
    <Heading>{heading}</Heading>
    <Subheading text={subheading} />
    <Form button={buttonText} {...props}>
      {fields}
    </Form>
    {bottomContent}
  </Container>
);

AuthScreen.defaultProps = {
  bottomContent: React.Fragment,
};

export default AuthScreen;
