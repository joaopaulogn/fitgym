import React from 'react';
import Container from './style';
import DashboardScreen from '../../components/PageScreen/Dashboard';
import SearchBar from '../../components/Field/Search';
import Button from '../../components/Button';
import StudentData from '../../components/StudentData';

const Students = () => (
  <DashboardScreen
    heading="Alunos"
    subheading="Procure por um aluno para ver ou editar suas informações"
  >
    <Container>
      <div className="search-box">
        <SearchBar />
        <Button text="Pesquisar" />
      </div>

      <section className="students">
        <table>
          <thead>
            <tr className="text-normal">
              <th>Nome</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>Quantidade de treino</th>
            </tr>
          </thead>

          <tbody>
            <StudentData />
            <StudentData />
            <StudentData />
            <StudentData />
            <StudentData />
            <StudentData />
            <StudentData />
            <StudentData />
            <StudentData />
            <StudentData />
            <StudentData />
            <StudentData />
            <StudentData />
            <StudentData />
          </tbody>
        </table>
      </section>
    </Container>
  </DashboardScreen>
);
export default Students;
