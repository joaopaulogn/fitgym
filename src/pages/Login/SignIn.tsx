import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { isValidEmail } from '../../components/Field/valid';
import { isValidPassword } from '../../components/Field/validator';
import AuthScreen from '../../components/AuthScreen';
import EmailInput from '../../components/Field/Auth/Email';
import PasswordInput from '../../components/Field/Auth/Password';
import Checkbox from '../../components/Checkbox';
import HelperText from '../../components/HelperText';

const Home = () => {
  const history = useHistory();

  function handleLogin(event: React.FormEvent): void {
    event.preventDefault();

    try {
      if (isValidEmail() && isValidPassword()) {
        localStorage.setItem('userHasAuthenticated', 'true');
        history.push('/alunos');
      }
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <AuthScreen
      heading={
        <>
          <span className="heading--main">Olá,</span>
          <span className="heading--sub">bem-vindo de volta</span>
        </>
      }
      subheading="Preencha os dados abaixo para entrar."
      formFields={
        <>
          <EmailInput />
          <PasswordInput
            title="Digite sua senha cadastrada"
            errorMessage="Senha não cadastrada. Por favor, tente novamente"
          />
          <div className="container">
            <Checkbox text="Lembrar-me" />
            <Link to="/senha" className="link">
              Esqueceu sua senha?
            </Link>
          </div>
        </>
      }
      buttonText="Entrar"
      onSubmit={handleLogin}
      bottomContent={
        <HelperText
          link="/cadastrar"
          text="Não possui conta?"
          action="Cadastrar"
        />
      }
    />
  );
};
export default Home;
