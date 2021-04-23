import React from 'react';
import { Link } from 'react-router-dom';
import AuthScreen from '..';
import EmailInput from '../../Input/Email';
import PasswordInput from '../../Input/Password';
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
      <form
        action="."
        method="POST"
        autoComplete="off"
        className="form"
        noValidate
        onSubmit={validateSignIn}
      >
        <EmailInput />
        <PasswordInput
          title="Digite sua senha cadastrada"
          errorMessage="Senha não cadastrada. Por favor, tente novamente"
        />
        <div className="form__container">
          <Checkbox text="Lembrar-me" />
          <Link to="/forgot-password" className="form__link">
            Esqueceu sua senha?
          </Link>
        </div>

        <Button text="Entrar" />
      </form>
    }
    bottomContent={
      <HelperText link="/signup" text="Não possui conta?" action="Cadastrar" />
    }
  />
);

export default SignIn;
