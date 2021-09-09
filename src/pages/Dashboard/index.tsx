import React from 'react';
import { Route } from 'react-router-dom';
import Container from './style';
import Footer from '../../components/Footer';
import Students from '../Students';
import Contact from '../Contact';
import Profile from '../Profile';
import Menu from '../../components/Menu/Dashboard';

const DashboardScreen = (): JSX.Element => (
  <Container>
    <Menu />
    <div className="container">
      <Route exact path="/">
        <Students />
      </Route>
      <Route path="/perfil">
        <Profile />
      </Route>
      <Route path="/contato">
        <Contact />
      </Route>

      <Footer position="right" />
    </div>
  </Container>
);

export default DashboardScreen;
