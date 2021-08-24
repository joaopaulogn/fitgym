import React, { ChangeEvent, FormEvent } from 'react';
import AuthScreen from '../../../components/PageScreen/Auth';
import CNPJContainer from '../../../components/Field/CNPJ/index';
import PasswordContainer from '../../../components/Field/Password/index';

interface SignInProps {
  values: { cnpj: string; password: string };
  handleCNPJValue(event: ChangeEvent<HTMLInputElement>): void;
  handlePasswordValue(event: ChangeEvent<HTMLInputElement>): void;
  handleLogin(event: FormEvent): void;
}

const SignIn = ({
  values,
  handleCNPJValue,
  handlePasswordValue,
  handleLogin,
}: SignInProps) => (
  <AuthScreen
    heading={['Olá,', 'bem-vindo de volta']}
    subheading="Digite abaixo seus dados"
    fields={
      <>
        <CNPJContainer value={values.cnpj} handleValue={handleCNPJValue} />
        <PasswordContainer
          value={values.password}
          handleValue={handlePasswordValue}
          instructionMessage="Digite sua senha"
        />
      </>
    }
    buttonText="Entrar"
    onSubmit={(event) => handleLogin(event)}
  />
);

export default SignIn;
