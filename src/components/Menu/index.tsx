import React from 'react';
import { useHistory } from 'react-router-dom';
import Link from '../Link';
import Container from './style';
import Option from '../Options/Dashboard';
import Logo from '../Logo';

const DashboardMenu = () => {
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
            <p className="text-normal">Léo Fitness Academia</p>
            <span className="text-small">05.666.388/0001-00</span>
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
        <Link path="/" text="Sair" icon="logout" onClick={handleLogout} />
      </footer>
    </Container>
  );
};

export default DashboardMenu;
