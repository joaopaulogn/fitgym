import React from 'react';
import Container from './style';
import Heading from '../Heading/index';
import Subheading from '../Subheading/index';
import Input from '../Input/index';
import Checkbox from '../Checkbox/index';
import Button from '../Button/index';
import CTA from '../CTA/index';

const Login = () => (
  <Container>
    <Heading>
      <span className="heading--main">Olá,</span>
      <span className="heading--sub">bem-vindo de volta</span>
    </Heading>

    <Subheading text="Preencha os dados abaixo para entrar" />

    <form className="form">
      <Input
        type="email"
        name="email"
        id="email"
        placeholder="E-mail"
        iconName="alternate_email"
      />

      <Input
        type="password"
        name="password"
        id="password"
        placeholder="Senha"
        iconName="lock"
      />

      <div className="form__container">
        <Checkbox />
        <a href="/" className="form__link">
          Esqueceu sua senha?
        </a>
      </div>
    </form>

    <Button text="Entrar" />

    <CTA text="Não possui conta?" action="Cadastrar" />
  </Container>
);

export default Login;
