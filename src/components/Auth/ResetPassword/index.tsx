import React from 'react';
import AuthScreen from '..';
import PasswordInput from '../../Input/Password';
import Button from '../../Button';
import InfoText from '../../InfoText';
import validateResetPassword from './validation';

const ResetPassword = () => (
  <AuthScreen
    heading="Redefinir senha"
    subheading="Digite abaixo sua nova senha"
    form={
      <form
        action="."
        method="POST"
        autoComplete="off"
        className="form"
        noValidate
        onSubmit={validateResetPassword}
      >
        <PasswordInput title="Digite sua nova senha" />
        <PasswordInput
          name="confirmPassword"
          id="confirmPassword"
          title="Digite a senha novamente"
          placeholder="Confirmar senha"
          errorMessage="As senhas devem seguir o padrão citado acima e serem idênticas."
        />

        <Button text="Redefinir" />
      </form>
    }
    bottomContent={
      <InfoText
        text="Se o e-mail digitado for o mesmo do cadastro, você receberá as
          instruções para redefinir sua senha."
      />
    }
  />
);

export default ResetPassword;
