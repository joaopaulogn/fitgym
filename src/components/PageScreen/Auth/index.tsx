import React from 'react';
import Container from './style';
import Banner from '../../../assets/banner.svg';
import Heading from '../../Heading';
import Subheading from '../../Subheading';
import Form from '../../Form';
import Footer from '../../Footer';
import ProtectedAuthPage from '../../ProtectedPage/Auth';

interface AuthProps extends React.FormHTMLAttributes<HTMLFormElement> {
  heading: string | Array<string>;
  subheading: string;
  fields: React.ReactElement;
  button: string;
  bottomContent?: React.ReactElement;
}

const AuthScreen = ({
  heading,
  subheading,
  fields,
  button,
  bottomContent,
  ...props
}: AuthProps) => (
  <ProtectedAuthPage>
    <Container>
      <div className="main-content">
        <h1 className="title">
          <span className="title--main">Fit</span>
          <span className="title--sub">Gym</span>
        </h1>

        <h2 className="subtitle">
          <span className="subtitle--main">Sua gestão de alunos</span>
          <span className="subtitle--sub">agora de maneira mais prática.</span>
        </h2>

        <div role="banner" className="banner">
          <img src={Banner} alt="Banner" />
        </div>

        <Footer position="left" />
      </div>

      <div className="sub-content">
        <div className="auth-container">
          <Heading>{heading}</Heading>
          <Subheading text={subheading} />
          <Form button={button} {...props}>
            {fields}
          </Form>
          {bottomContent}
        </div>
      </div>
    </Container>
  </ProtectedAuthPage>
);

AuthScreen.defaultProps = {
  bottomContent: React.Fragment,
};

export default AuthScreen;
