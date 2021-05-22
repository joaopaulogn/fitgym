import React from 'react';
import Container from './style';
import Banner from '../../assets/banner.svg';
import Heading from '../Heading';
import Subheading from '../Subheading';
import Form from '../Form';
import Footer from '../Footer';
import ProtectedAuthPage from '../ProtectedPage/Auth';

interface AuthProps extends React.FormHTMLAttributes<HTMLFormElement> {
  heading: React.ReactElement | React.ReactText;
  subheading: string;
  formFields: React.ReactElement;
  buttonText: string;
  buttonDisabledState?: boolean;
  bottomContent?: React.ReactElement;
}

const AuthScreen = ({
  heading,
  subheading,
  formFields,
  buttonText,
  buttonDisabledState,
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

        <Footer color="var(--secondary-color)" justify="flex-start">
          <p className="text-small">
            <a href="/" className="link">
              Termos
            </a>
            <span className="divider">|</span>
            <a href="/" className="link">
              Privacidade
            </a>
          </p>
        </Footer>
      </div>

      <div className="sub-content">
        <div className="auth">
          <Heading>{heading}</Heading>
          <Subheading text={subheading} />
          <Form buttonText={buttonText} {...props}>
            {formFields}
          </Form>
          {bottomContent}
        </div>
      </div>
    </Container>
  </ProtectedAuthPage>
);

AuthScreen.defaultProps = {
  bottomContent: React.Fragment,
  buttonDisabledState: true,
};

export default AuthScreen;
