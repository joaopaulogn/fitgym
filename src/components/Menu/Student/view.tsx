import React from 'react';
import Icon from '../../Icon';
import Container from './style';

interface MenuProps {
  screen: 'create' | 'update' | 'visualization';
}

const Menu = ({ screen }: MenuProps): JSX.Element => {
  const views = [
    {
      create: <></>,
      update: (
        <>
          <li>
            <Icon icon="person_remove" />
            <span className="text">Remover aluno</span>
          </li>
          <li>
            <Icon icon="arrow_back" />
            <span className="text">Voltar</span>
          </li>
        </>
      ),
      view: (
        <>
          <li>
            <Icon icon="edit" />
            <span className="text">Editar aluno</span>
          </li>
          <li>
            <Icon icon="person_remove" />
            <span className="text">Remover aluno</span>
          </li>
          <li>
            <Icon icon="table_view" />
            <span className="text">Visualizar tabela</span>
          </li>
          <li>
            <Icon icon="arrow_back" />
            <span className="text">Voltar</span>
          </li>
        </>
      ),
    },
  ];

  return (
    <Container>
      {views.map((view) => (
        <ul key={screen}>{view[screen]}</ul>
      ))}
    </Container>
  );
};

export default Menu;
