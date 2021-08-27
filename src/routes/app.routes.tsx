import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import DashboardScreen from '../pages/Dashboard';

const AppRoutes = (): JSX.Element => (
  <Router>
    <DashboardScreen />
  </Router>
);

export default AppRoutes;
