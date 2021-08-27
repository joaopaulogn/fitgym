import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthPage from '../pages/Auth/Login';

const AppRoutes = (): JSX.Element => (
  <Router>
    <AuthPage />
  </Router>
);

export default AppRoutes;
