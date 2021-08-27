import React, { FormEvent, ReactNode } from 'react';
import Container from './style';
import DashboardScreen from '../../components/PageScreen/Dashboard';
import SearchBarContainer from '../../components/Field/SearchBar/index';

interface StudentsProps {
  studentsData: ReactNode;
  handleSearchBarValue(event: FormEvent<HTMLInputElement>): void;
  searchBarValue: string;
}

const Students = ({
  studentsData,
  searchBarValue,
  handleSearchBarValue,
}: StudentsProps): JSX.Element => (
  <DashboardScreen
    heading="Alunos"
    subheading="Procure por um aluno para ver ou editar suas informações"
  >
    <Container>
      <div className="search-box">
        <SearchBarContainer
          value={searchBarValue}
          handleValue={handleSearchBarValue}
        />
      </div>
      <section className="students">
        <ul className="header text-normal">
          <li>Nome</li>
          <li>Email</li>
          <li>Telefone</li>
          <li>Quantidade de treino</li>
        </ul>

        <ul className="students__container">{studentsData && studentsData}</ul>
      </section>
    </Container>
  </DashboardScreen>
);

export default Students;
