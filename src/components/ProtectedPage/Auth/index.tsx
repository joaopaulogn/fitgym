import React from 'react';
import { Redirect } from 'react-router-dom';

interface ProtectedAuthPageProps {
  children: React.ReactElement;
}

const ProtectedAuthPage = ({ children }: ProtectedAuthPageProps) => {
  const userHasAuthenticated = localStorage.getItem('userHasAuthenticated');

  if (userHasAuthenticated) return <Redirect to="/alunos" />;

  return children;
};

export default ProtectedAuthPage;
