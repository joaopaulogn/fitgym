import React, { MouseEvent } from 'react';
import Container from './style';
import Logo from '../../Logo';
import UsrInfo from '../../UserInfo';
import Link from '../../Link';
import Option from '../../Option/Dashboard';

interface DashboardMenuProps {
  handleLogout(event: MouseEvent): void;
}

const DashboardMenu = ({ handleLogout }: DashboardMenuProps): JSX.Element => (
  <Container>
    <header>
      <Logo />
      <UsrInfo />

      <nav>
        <ul>
          <Option path="/" icon="people" text="Alunos" />
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

export default DashboardMenu;
