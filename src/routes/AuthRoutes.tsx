import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from '../components/AuthScreen/SignIn';
import SignUp from '../components/AuthScreen/SignUp';
import ForgotPassword from '../components/AuthScreen/ForgotPassword';
import ResetPassword from '../components/AuthScreen/ResetPassword';

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
