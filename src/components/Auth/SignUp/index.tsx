import React from 'react';
import AuthScreen from '..';
import CompanyInput from '../../Input/Company';
import EmailInput from '../../Input/Email';
import PasswordInput from '../../Input/Password';
import Checkbox from '../../Checkbox';
import Button from '../../Button';
import HelperText from '../../HelperText';
import validateSignUp from './validation';

const SignUp = () => (
  <AuthScreen
    heading="Primeiro acesso?"
    subheading="Preencha os dados abaixo para se cadastrar"
    form={
      <form
        action="."
        method="GET"
        autoComplete="off"
        className="form"
        noValidate
        onSubmit={validateSignUp}
      >
        <CompanyInput />
        <EmailInput
          title="Digite seu e-mail"
          errorMessage='O e-mail deve ter um "@" seguido de um provedor válido.'
        />
        <PasswordInput title="Digite sua senha" />
        <PasswordInput
          name="confirmPassword"
          id="confirmPassword"
          title="Confirme sua senha"
          placeholder="Confirmar senha"
          errorMessage="As senhas devem seguir o padrão citado acima e serem idênticas."
        />
        <div className="form__container">
          <Checkbox text="Criando uma conta, você concorda com os Termos de Serviço e Condições, e Privacidade e Política." />
        </div>
        <Button text="Cadastrar" onClick={validateSignUp} />
      </form>
    }
    bottomContent={
      <HelperText link="/" text="Já possui conta?" action="Entrar" />
    }
  />
);

export default SignUp;
