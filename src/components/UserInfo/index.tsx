import React from 'react';
import useAuth from '../../contexts/auth';
import Container from './style';

const UserInfo = (): JSX.Element => {
  const { user } = useAuth();
  const name = user?.name;
  const cnpj = user?.cnpj;

  return (
    <Container className="profile">
      <div className="info">
        <p className="text-normal">{name}</p>
        <span className="text-small">{cnpj}</span>
      </div>
    </Container>
  );
};

export default UserInfo;
