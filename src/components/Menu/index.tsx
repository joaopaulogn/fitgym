import React from 'react';
import Container from './style';
import Icon from '../Icon';
import Option from '../Options/Dashboard';

const Menu = () => (
  <Container>
    <header>
      <div className="logo">
        <div className="icon-box">
          <Icon icon="fitness_center" />
        </div>
        <p className="title">FITGYM</p>
      </div>

      <div className="profile">
        <div className="info">
          <p className="text-normal">Léo Fitness</p>
          <span className="text-small">leofitness@gmail.com</span>
        </div>
      </div>

      <nav>
        <ul>
          <Option path="/" icon="analytics" text="Dashboard" />
          <Option path="/settings" icon="edit" text="Perfil" />
          <Option path="/contact" icon="contact_support" text="Contate-nos" />
        </ul>
      </nav>
    </header>

    <footer className="text-normal">
      <a href="/">Termos</a>
      <a href="/">Privacidade</a>

      <span className="button">
        <Icon icon="logout" />
        <a href="/">Sair</a>
      </span>
    </footer>
  </Container>
);

export default Menu;
