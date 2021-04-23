import React from 'react';
import { Redirect } from 'react-router-dom';

const Dashboard = () => {
  if (localStorage.getItem('loggedIn') === null) {
    return <Redirect to="/" />;
  }

  return (
    <div style={{ height: '100vh', backgroundColor: '#565656' }}>
      Se você está aqui, você foi permitido estar aqui.
    </div>
  );
};

export default Dashboard;
