import React from 'react';
import { Link } from 'react-router-dom';
import Container from './style';
import Icon from '../Icon';
import Option from '../Options/Dashboard';

const Menu = () => (
  <Container>
    <header>
      <Link to="/" className="logo title">
        <div className="icon-box">
          <Icon icon="fitness_center" />
        </div>
        FITGYM
      </Link>

      <div className="profile">
        <div className="info">
          <p className="text-normal">Léo Fitness</p>
          <span className="text-small">leofitness@gmail.com</span>
        </div>
      </div>

      <nav>
        <ul>
          <Option path="/" icon="home" text="Início" />
          <Option path="/students" icon="people" text="Alunos" />
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
