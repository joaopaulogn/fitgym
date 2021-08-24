import React from 'react';
import useAuth from '../../contexts/auth';
import Container from './style';

const GymInfo = () => {
  const { user } = useAuth();
  const name = user?.getName();
  const cnpj = user?.getCNPJ();

  return (
    <Container className="profile">
      <div className="info">
        <p className="text-normal">{name}</p>
        <span className="text-small">{cnpj}</span>
      </div>
    </Container>
  );
};

export default GymInfo;
