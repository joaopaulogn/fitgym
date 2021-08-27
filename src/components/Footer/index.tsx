import React from 'react';
import Container from './style';

interface FooterProps {
  position: 'left' | 'right';
}

const currentYear = new Date().getFullYear();

const Footer = ({ position }: FooterProps): JSX.Element => (
  <Container className={position}>
    <p className="text-small copyright">
      <span className="text">Copyright &copy; {currentYear}</span>
      <span className="divider">•</span>
      <span className="text">Todos os direitos reservados</span>
    </p>

    <p className="text-small terms-and-privacy">
      <a href="/" className="link">
        Termos
      </a>
      <span className="divider">•</span>
      <a href="/" className="link">
        Privacidade
      </a>
    </p>
  </Container>
);

export default Footer;
