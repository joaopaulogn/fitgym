import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Container from './style';
import Option from '../Options/Dashboard';
import Icon from '../Icon';
import Logo from '../Logo';

const Menu = () => {
  const history = useHistory();

  function handleLogout(event: React.MouseEvent) {
    event.preventDefault();
    const userHasAuthenticated = localStorage.getItem('userHasAuthenticated');

    try {
      if (userHasAuthenticated === 'true') {
        history.push('/');
        localStorage.removeItem('userHasAuthenticated');
      }
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <Container>
      <header>
        <Logo />
        <div className="profile">
          <div className="info">
            <p className="text-normal">Léo Fitness</p>
            <span className="text-small">leofitness@gmail.com</span>
          </div>
        </div>

        <nav>
          <ul>
            {/* <Option path="/dashboard" icon="home" text="Início" /> */}
            <Option path="/alunos" icon="people" text="Alunos" />
            <Option path="/perfil" icon="edit" text="Perfil" />
            <Option path="/contato" icon="contact_support" text="Contate-nos" />
          </ul>
        </nav>
      </header>

      <footer className="text-normal">
        <a href="/">Termos</a>
        <a href="/">Privacidade</a>

        <Link to="/" className="button" onClick={handleLogout}>
          <Icon icon="logout" />
          Sair
        </Link>
      </footer>
    </Container>
  );
};

export default Menu;
