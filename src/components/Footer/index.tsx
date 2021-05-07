import React from 'react';
import Container from './style';

interface FooterProps {
  color?: string;
  justify?: 'flex-start' | 'flex-end';
}

const Footer = ({ color, justify }: FooterProps) => (
  <Container style={{ justifyContent: justify }}>
    <p style={{ color }} className="text-small">
      <span className="text">Copyright &copy; {new Date().getFullYear()}</span>
      <span className="divider">•</span>
      <span className="text">Todos os direitos reservados</span>
    </p>

    <p style={{ color }} className="text-small">
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

Footer.defaultProps = {
  color: 'var(--text-color)',
  justify: 'flex-end',
};

export default Footer;
