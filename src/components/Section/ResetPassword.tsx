import React from 'react';
import Section from '.';
import Password from '../Field/Auth/Password';
import Form from '../Form';

const ResetPassword = () => (
  <Section content="Redefina sua senha abaixo">
    <Form buttonText="Redefinir">
      <>
        <Password />
        <Password
          id="confirmPassword"
          name="confirmPassword"
          title="Confirme sua senha"
          placeholder="Confirmar senha"
          errorMessage="As senhas devem seguir o padrão citado acima e serem idênticas."
        />
      </>
    </Form>
  </Section>
);

export default ResetPassword;
