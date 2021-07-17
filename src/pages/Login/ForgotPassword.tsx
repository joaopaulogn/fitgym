import React from 'react';
import AuthScreen from '../../components/PageScreen/Auth';
import CNPJ from '../../components/Field/Auth/CNPJ';
import InfoText from '../../components/InfoText';
import Link from '../../components/Link';

const ForgotPassword = () => (
  <AuthScreen
    heading="Esqueceu sua senha?"
    subheading="Digite seu e-mail de cadastro para redefini-la"
    fields={<CNPJ />}
    button="Redefinir senha"
    bottomContent={
      <>
        <InfoText
          text="Se o CNPJ digitado for o mesmo do cadastro, você será redirecionado
          para redefinir sua senha."
        />
        <Link path="/" text="Voltar" icon="chevron_left" />
      </>
    }
  />
);
export default ForgotPassword;
