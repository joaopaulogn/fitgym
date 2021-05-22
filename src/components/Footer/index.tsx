import React from 'react';
import Container from './style';

interface FooterProps {
  children?: React.ReactElement;
  color?: string;
  justify?: 'flex-start' | 'flex-end';
}

const Footer = ({ color, justify, children }: FooterProps) => (
  <Container style={{ color, justifyContent: justify }}>
    <p className="text-small">
      <span className="text">Copyright &copy; {new Date().getFullYear()}</span>
      <span className="divider">•</span>
      <span className="text">Todos os direitos reservados</span>
    </p>

    {children}
  </Container>
);

Footer.defaultProps = {
  children: React.Fragment,
  color: 'var(--text-color)',
  justify: 'flex-end',
};

export default Footer;
