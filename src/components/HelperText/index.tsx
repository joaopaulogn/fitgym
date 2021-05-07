import React from 'react';
import { Link } from 'react-router-dom';
import Container from './style';

interface TextHelperProps {
  link: string;
  text: string;
  action: 'Entrar' | 'Cadastrar';
}

const TextHelper = ({ link, text, action }: TextHelperProps) => (
  <Container className="text-normal">
    <p className="text">{text}</p>
    <Link to={link} className="action">
      {action}
    </Link>
  </Container>
);

export default TextHelper;
