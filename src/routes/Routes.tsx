import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from '../pages/Login/SignIn';
import SignUp from '../pages/Login/SignUp';
import ForgotPassword from '../pages/Login/ForgotPassword';
import ResetPassword from '../pages/Login/ResetPassword';
import Students from '../pages/Students';
import Settings from '../pages/Settings';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

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
        <Settings />
      </Route>
      <Route path="/contato">
        <Contact />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
