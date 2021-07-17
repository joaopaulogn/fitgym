import React from 'react';
import api from '../../services/api';
import AuthScreen from '../../components/PageScreen/Auth';
import PasswordInput from '../../components/Field/Auth/Password';
import Checkbox from '../../components/Checkbox';

const SignUp = () => {
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const [$gymName, $email, $password] = document.querySelectorAll(
      'input',
    ) as NodeListOf<HTMLInputElement>;

    api.post('register/post', {
      gymName: $gymName.value,
      email: $email.value,
      password: $password.value,
    });
  }

  return (
    <AuthScreen
      heading="Primeiro acesso?"
      subheading="Cadastre sua senha abaixo"
      fields={
        <>
          <PasswordInput errorMessage="Senha inválida" />
          <PasswordInput
            name="confirmPassword"
            title="Confirme sua senha"
            placeholder="Confirmar senha"
            instructions="As senhas devem ser iguais"
            errorMessage="As senhas devem seguir o padrão citado acima e serem idênticas."
          />
          <Checkbox text="Criando uma conta, você concorda com os Termos de Serviço e Condições, e Privacidade e Política." />
        </>
      }
      button="Cadastrar"
      onSubmit={(e) => handleSubmit(e)}
    />
  );
};

export default SignUp;
