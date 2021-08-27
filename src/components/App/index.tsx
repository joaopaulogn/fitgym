import React from 'react';
import { AuthProvider } from '../../contexts/auth';
import Routes from '../../routes';

const App = (): JSX.Element => (
  <AuthProvider>
    <Routes />
  </AuthProvider>
);

export default App;
