import React from 'react';
import { Link } from 'react-router-dom';
import AuthScreen from '../../components/AuthScreen';
import EmailInput from '../../components/Field/Auth/Email';
import InfoText from '../../components/InfoText';

const ForgotPassword = () => (
  <AuthScreen
    heading="Esqueceu sua senha?"
    subheading="Digite seu e-mail de cadastro para redefini-la"
    formFields={
      <>
        <EmailInput />
      </>
    }
    buttonText="Redefinir senha"
    // onSubmit={validateForgotPassword}
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
