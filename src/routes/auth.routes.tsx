import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import StudentScreen from '../components/PageScreen/StudentScreen';
import AuthPage from '../pages/Auth/Login';

const AppRoutes = (): JSX.Element => (
  <Router>
    <Route exact path="/">
      <AuthPage />
    </Route>
    <Route path="/teste">
      <StudentScreen screenType="visualization" />
    </Route>
  </Router>
);

export default AppRoutes;
