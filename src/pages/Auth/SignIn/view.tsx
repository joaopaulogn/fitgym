import React, { ChangeEvent, FormEvent } from 'react';
import AuthScreen from '../../../components/PageScreen/Auth';
import CNPJContainer from '../../../components/Field/CNPJ/index';
import PasswordContainer from '../../../components/Field/Password/index';

interface SignInProps {
  values: { cnpj: string; password: string };
  handleValue(event: ChangeEvent<HTMLInputElement>): void;
  handleLogin(event: FormEvent): void;
}

const SignIn = ({
  values,
  handleValue,
  handleLogin,
}: SignInProps): JSX.Element => (
  <AuthScreen
    heading={['Olá,', 'bem-vindo de volta']}
    subheading="Digite abaixo seus dados"
    fields={
      <>
        <CNPJContainer value={values.cnpj} handleValue={handleValue} />
        <PasswordContainer
          value={values.password}
          handleValue={handleValue}
          instructionMessage="Digite sua senha"
        />
      </>
    }
    buttonText="Entrar"
    onSubmit={(event) => handleLogin(event)}
  />
);

export default SignIn;
