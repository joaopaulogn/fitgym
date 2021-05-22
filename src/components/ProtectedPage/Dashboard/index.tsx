import React from 'react';
import { Redirect } from 'react-router-dom';

interface ProtectedDashboardPageProps {
  children: React.ReactElement;
}

const ProtectedDashboardPage = ({ children }: ProtectedDashboardPageProps) => {
  const userHasAuthenticated = localStorage.getItem('userHasAuthenticated');

  if (!userHasAuthenticated) return <Redirect exact to="/" />;

  return children;
};

export default ProtectedDashboardPage;
