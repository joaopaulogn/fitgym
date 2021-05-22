import React from 'react';
import AuthScreen from '../../components/AuthScreen';
import CompanyInput from '../../components/Field/Auth/Company';
import EmailInput from '../../components/Field/Auth/Email';
import PasswordInput from '../../components/Field/Auth/Password';
import Checkbox from '../../components/Checkbox';
import HelperText from '../../components/HelperText';

const SignUp = () => (
  <AuthScreen
    heading="Primeiro acesso?"
    subheading="Preencha os dados abaixo para se cadastrar"
    formFields={
      <>
        <CompanyInput />
        <EmailInput
          title="Digite seu e-mail"
          errorMessage='O e-mail deve ter um "@" seguido de um provedor válido.'
        />
        <PasswordInput />
        <PasswordInput
          name="confirmPassword"
          id="confirmPassword"
          title="Confirme sua senha"
          placeholder="Confirmar senha"
          errorMessage="As senhas devem seguir o padrão citado acima e serem idênticas."
        />
        <div className="container">
          <Checkbox text="Criando uma conta, você concorda com os Termos de Serviço e Condições, e Privacidade e Política." />
        </div>
      </>
    }
    buttonText="Cadastrar"
    // onSubmit={validateSignUp}
    bottomContent={
      <HelperText link="/" text="Já possui conta?" action="Entrar" />
    }
  />
);

export default SignUp;
