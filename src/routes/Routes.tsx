import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from '../pages/Login/SignIn';
import SignUp from '../pages/Login/SignUp';
import ForgotPassword from '../pages/Login/ForgotPassword';
import ResetPassword from '../pages/Login/ResetPassword';
import NotFound from '../pages/NotFound';
import Students from '../pages/Students';
import Profile from '../pages/Profile';
import Contact from '../pages/Contact';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <SignIn />
      </Route>
      <Route path="/cadastrar">
        <SignUp />
      </Route>
      <Route path="/senha">
        <ForgotPassword />
      </Route>
      <Route path="/redefinir-senha">
        <ResetPassword />
      </Route>
      <Route path="/alunos">
        <Students />
      </Route>
      <Route path="/perfil">
        <Profile />
      </Route>
      <Route path="/contato">
        <Contact />
      </Route>
      <Route path="/alunos">
        <Students />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
