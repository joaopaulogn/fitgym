import React from 'react';
import { Link } from 'react-router-dom';
import Container from './style';
import PageScreen, { PageScreenProps } from '../PageScreen';
import Icon from '../Icon';

interface StudentScreenProps extends PageScreenProps {
  heading: React.ReactElement | string;
  subheading: string;
  children: React.ReactElement;
}

const StudentScreen = ({
  heading,
  subheading,
  children,
}: StudentScreenProps) => (
  <PageScreen
    button={
      <Link to="/alunos" className="button">
        <Icon icon="chevron_left" />
        Voltar
      </Link>
    }
    content={
      <Container>
        <div className="text">
          {heading}
          {subheading}
        </div>
        {children}
      </Container>
    }
  />
);

export default StudentScreen;
