import React, { ChangeEvent, useState } from 'react';
import setErrorState from '../../../components/Field/setErrorState';
import useAuthContext from '../../../contexts/auth';
import SignIn from './view';

const SignInContainer = () => {
  const { signIn } = useAuthContext();
  const [values, setValues] = useState({
    cnpj: '',
    password: '',
  });

  async function handleLogin(event: React.FormEvent) {
    const [cnpjField, passwordField] = document.querySelectorAll('input');
    event.preventDefault();

    try {
      const userData = await signIn();

      if (userData === null) {
        setErrorState(
          cnpjField,
          'CNPJ não cadastrado. Por favor, tente novamente.',
        );
        setErrorState(
          passwordField,
          'Senha inválida. Por favor, digite sua senha cadastrada.',
        );
      }
    } catch (error) {
      // TODO: Lidar com os erros
      console.error(error);
    }
  }

  function handleCNPJValue(event: ChangeEvent<HTMLInputElement>): void {
    const { value } = event.currentTarget;
    setValues(() => ({ ...values, cnpj: value }));
  }

  function handlePasswordValue(event: ChangeEvent<HTMLInputElement>): void {
    const { value } = event.currentTarget;
    setValues(() => ({ ...values, password: value }));
  }

  return (
    <SignIn
      values={values}
      handleCNPJValue={handleCNPJValue}
      handlePasswordValue={handlePasswordValue}
      handleLogin={handleLogin}
    />
  );
};

export default SignInContainer;
