import React, { ChangeEvent, useState } from 'react';
import useAuthContext from '../../../contexts/auth';
import Field from '../../../helpers/Field';
import SignIn from './view';

const SignInContainer = (): JSX.Element => {
  const { signIn } = useAuthContext();
  const [values, setValues] = useState({
    cnpj: '',
    password: '',
  });

  async function handleLogin(event: React.FormEvent): Promise<void> {
    event.preventDefault();

    try {
      const userData = await signIn();

      if (userData === null) {
        const cnpjField: Field = new Field(
          document.getElementById('cnpj') as HTMLInputElement,
        );
        const passwordField: Field = new Field(
          document.getElementById('password') as HTMLInputElement,
        );

        cnpjField.setErrorState();
        passwordField.setErrorState();
      }
    } catch (error) {
      // TODO: Lidar com os erros
      console.error(error);
    }
  }

  function handleValue(event: ChangeEvent<HTMLInputElement>): void {
    const { name, value } = event.currentTarget;

    setValues(() => ({ ...values, [name]: value }));
  }

  return (
    <SignIn
      values={values}
      handleValue={handleValue}
      handleLogin={handleLogin}
    />
  );
};

export default SignInContainer;
