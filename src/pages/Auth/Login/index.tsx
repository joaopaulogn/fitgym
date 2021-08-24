import React from 'react';
import { Route } from 'react-router-dom';
import Container from './style';
import Banner from '../../../assets/banner.svg';
import Footer from '../../../components/Footer';
import SignUp from '../SignUp';
import ResetPassword from '../ResetPassword';
import ForgotPassword from '../ForgotPassword';
import SignIn from '../SignIn';

const AuthPage = () => (
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
      <Route exact path="/">
        <SignIn />
      </Route>
      <Route path="/cadastrar">
        <SignUp />
      </Route>
      <Route path="/esqueci-minha-senha">
        <ForgotPassword />
      </Route>
      <Route path="/redefinir-senha">
        <ResetPassword />
      </Route>
    </div>
  </Container>
);

export default AuthPage;
