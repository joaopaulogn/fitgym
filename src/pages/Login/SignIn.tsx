import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import AuthScreen from '../../components/PageScreen/Auth';
import CNPJ from '../../components/Field/Auth/CNPJ';

const Home = () => {
  const history = useHistory();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const $cnpj = document.getElementById('cnpj') as HTMLInputElement;

    if ($cnpj.value.length === 18) {
      localStorage.setItem('userHasAuthenticated', 'true');
      history.push('/alunos');
    }
  }

  return (
    <AuthScreen
      heading={['Olá,', 'bem-vindo de volta']}
      subheading="Digite abaixo seu CNPJ"
      fields={<CNPJ />}
      button="Entrar"
      onSubmit={(event) => handleSubmit(event)}
    />
  );
};

export default Home;
