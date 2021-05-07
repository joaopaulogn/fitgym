import React from 'react';
import { Link } from 'react-router-dom';
import AuthScreen from '..';
import EmailInput from '../../Field/Email';
import Button from '../../Button';
import InfoText from '../../InfoText';
import validateForgotPassword from './validation';

const ForgotPassword = () => (
  <AuthScreen
    heading="Esqueceu sua senha?"
    subheading="Digite seu e-mail de cadastro para redefini-la"
    form={
      <>
        <EmailInput
          title="Digite seu e-mail cadastrado"
          errorMessage="E-mail não cadastrado. Por favor, tente novamente."
        />
        <Button text="Redefinir senha" />
      </>
    }
    onSubmit={validateForgotPassword}
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
