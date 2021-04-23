import React from 'react';
import { Link } from 'react-router-dom';
import AuthScreen from '..';
import EmailInput from '../../Input/Email';
import Button from '../../Button';
import InfoText from '../../InfoText';
import validateForgotPassword from './validation';

const ForgotPassword = () => (
  <AuthScreen
    heading="Esqueceu sua senha?"
    subheading="Digite seu e-mail de cadastro para redefini-la"
    form={
      <form
        action="."
        method="POST"
        autoComplete="off"
        className="form"
        noValidate
        onSubmit={validateForgotPassword}
      >
        <EmailInput />
        <Button text="Redefinir senha" />
      </form>
    }
    bottomContent={
      <InfoText
        text="Se o e-mail digitado for o mesmo do cadastro, você receberá as
          instruções para redefinir sua senha."
      >
        <Link to="/" className="button text-normal">
          Voltar
        </Link>
      </InfoText>
    }
  />
);

export default ForgotPassword;
