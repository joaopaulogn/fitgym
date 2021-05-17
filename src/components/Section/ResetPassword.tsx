import React from 'react';
import Section from '.';
import Password from '../Field/Auth/Password';

const ResetPassword = () => (
  <Section
    content="Redefina sua senha abaixo"
    button={{ text: 'Salvar', width: '34rem', disabled: true }}
  >
    <form action="." method="POST" noValidate className="form">
      <Password
        name="password"
        id="password"
        title="Digite sua nova senha"
        placeholder="Senha"
        errorMessage="A senha deve ter entre 8 e 32 caracteres, contendo pelo menos 1 letra minúscula, 1 letra maiúscula, 1 número e 1 caractere especial."
      />
      <Password
        id="confirmPassword"
        name="confirmPassword"
        title="Confirme sua senha"
        placeholder="Confirmar senha"
        errorMessage="As senhas devem seguir o padrão citado acima e serem idênticas."
      />
    </form>
  </Section>
);

export default ResetPassword;
