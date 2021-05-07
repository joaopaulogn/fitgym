import React from 'react';
import AuthScreen from '..';
import PasswordInput from '../../Field/Password';
import Button from '../../Button';
import InfoText from '../../InfoText';
import validateResetPassword from './validation';

const ResetPassword = () => (
  <AuthScreen
    heading="Redefinir senha"
    subheading="Digite abaixo sua nova senha"
    form={
      <>
        <PasswordInput
          name="password"
          id="password"
          title="Digite sua senha atual"
          placeholder="Senha atual"
          errorMessage="Senha não cadastrada. Por favor, tente novamente."
        />
        <PasswordInput
          id="newPassword"
          name="newPassword"
          placeholder="Nova senha"
          title="Digite sua nova senha"
          errorMessage="A senha deve ter entre 8 e 32 caracteres, contendo pelo menos 1 letra minúscula, 1 letra maiúscula, 1 número e 1 caractere especial."
        />
        <PasswordInput
          name="confirmPassword"
          id="confirmPassword"
          title="Confirme a senha"
          placeholder="Confirmar senha"
          errorMessage="As senhas devem seguir o padrão citado acima e serem idênticas."
        />

        <Button text="Redefinir" />
      </>
    }
    onSubmit={validateResetPassword}
    bottomContent={
      <InfoText
        text="Se o e-mail digitado for o mesmo do cadastro, você receberá as
          instruções para redefinir sua senha."
      />
    }
  />
);

export default ResetPassword;
