import React from 'react';
import AuthScreen from '..';
import CompanyInput from '../../Field/Auth/Company';
import EmailInput from '../../Field/Auth/Email';
import PasswordInput from '../../Field/Auth/Password';
import Checkbox from '../../Checkbox';
import Button from '../../Button';
import HelperText from '../../HelperText';
import validateSignUp from './validation';

const SignUp = () => (
  <AuthScreen
    heading="Primeiro acesso?"
    subheading="Preencha os dados abaixo para se cadastrar"
    form={
      <>
        <CompanyInput />
        <EmailInput
          title="Digite seu e-mail"
          errorMessage='O e-mail deve ter um "@" seguido de um provedor válido.'
        />
        <PasswordInput
          name="password"
          id="password"
          placeholder="Senha"
          title="Digite sua senha"
          errorMessage="A senha deve ter entre 8 e 32 caracteres, contendo pelo menos 1 letra minúscula, 1 letra maiúscula, 1 número e 1 caractere especial."
        />
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
        <Button text="Cadastrar" disabled />
      </>
    }
    onSubmit={validateSignUp}
    bottomContent={
      <HelperText link="/" text="Já possui conta?" action="Entrar" />
    }
  />
);

export default SignUp;
