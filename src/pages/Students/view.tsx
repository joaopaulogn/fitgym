import React, { FormEvent } from 'react';
import Student from '../../entities/Student';
import Container from './style';
import DashboardScreen from '../../components/PageScreen/Dashboard';
import StudentData from '../../components/StudentData';
import SearchBarContainer from '../../components/Field/SearchBar/index';

interface StudentsProps {
  studentsData: Array<Student> | null;
  handleSearchBarValue(event: FormEvent<HTMLInputElement>): void;
  searchBarValue: string;
}

const Students = ({
  studentsData,
  searchBarValue,
  handleSearchBarValue,
}: StudentsProps) => (
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

        <ul className="students__container">
          {studentsData &&
            studentsData?.map(
              ({ getID, getName, getEmail, getPhone, getAmountTraining }) => (
                <StudentData
                  key={getID()}
                  id={getID()}
                  name={getName()}
                  email={getEmail()}
                  phone={getPhone()}
                  amountTraining={getAmountTraining()}
                />
              ),
            )}
        </ul>
      </section>
    </Container>
  </DashboardScreen>
);

export default Students;
