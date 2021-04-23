import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from '../components/Auth/SignIn';
import SignUp from '../components/Auth/SignUp';
import ForgotPassword from '../components/Auth/ForgotPassword';
import ResetPassword from '../components/Auth/ResetPassword';

const AuthRoutes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <SignIn />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
      <Route exact path="/forgot-password">
        <ForgotPassword />
      </Route>
      <Route exact path="/reset-password">
        <ResetPassword />
      </Route>
    </Switch>
  </Router>
);

export default AuthRoutes;
