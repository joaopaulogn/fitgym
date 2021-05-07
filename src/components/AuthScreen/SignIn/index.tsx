import React from 'react';
import { Link } from 'react-router-dom';
import AuthScreen from '..';
import EmailInput from '../../Field/Email';
import PasswordInput from '../../Field/Password';
import Checkbox from '../../Checkbox';
import Button from '../../Button';
import HelperText from '../../HelperText';
import validateSignIn from './validation';

const SignIn = () => (
  <AuthScreen
    heading={
      <>
        <span className="heading--main">Olá,</span>
        <span className="heading--sub">bem-vindo de volta</span>
      </>
    }
    subheading="Preencha os dados abaixo para entrar."
    form={
      <>
        <EmailInput
          title="Digite seu e-mail cadastrado"
          errorMessage="E-mail não cadastrado. Por favor, tente novamente."
        />
        <PasswordInput
          name="password"
          id="password"
          placeholder="Senha"
          title="Digite sua senha cadastrada"
          errorMessage="Senha não cadastrada. Por favor, tente novamente"
        />
        <div className="container">
          <Checkbox text="Lembrar-me" />
          <Link to="/forgot-password" className="link">
            Esqueceu sua senha?
          </Link>
        </div>

        <Button text="Entrar" />
      </>
    }
    onSubmit={validateSignIn}
    bottomContent={
      <HelperText link="/signup" text="Não possui conta?" action="Cadastrar" />
    }
  />
);

export default SignIn;
