import React from 'react';
import Container from './style';

const Footer = () => (
  <Container>
    <p className="text-small">
      <span className="text">Copyright &copy; 2021</span>
      <span className="divider">•</span>
      <span className="text">Todos os direitos reservados</span>
    </p>

    <p className="text-small">
      <a href="/" className="link">
        Termos
      </a>
      <span className="divider">|</span>
      <a href="/" className="link">
        Privacidade
      </a>
    </p>
  </Container>
);

export default Footer;
