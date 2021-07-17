import React from 'react';
import AuthScreen from '../../components/PageScreen/Auth';
import PasswordInput from '../../components/Field/Auth/Password';

const ResetPassword = () => (
  <AuthScreen
    heading="Redefinir senha"
    subheading="Digite abaixo sua nova senha"
    fields={
      <>
        <PasswordInput
          placeholder="Senha"
          errorMessage="A senha deve ter entre 8 e 32 caracteres, contendo pelo menos 1 letra minúscula, 1 letra maiúscula, 1 número e 1 caractere especial."
        />
        <PasswordInput
          name="confirmPassword"
          title="Confirme a senha"
          placeholder="Confirmar senha"
          instructions="As senhas devem ser as mesmas."
          errorMessage="As senhas devem seguir o padrão citado acima e serem idênticas."
        />
      </>
    }
    button="Redefinir"
  />
);

export default ResetPassword;
