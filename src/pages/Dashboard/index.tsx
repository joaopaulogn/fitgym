import React from 'react';
import Container from './style';
import Button from '../../components/Button';
import Student from '../../components/Student';
import SearchBar from '../../components/Field/Search';
import PageScreen from '../../components/PageScreen';

const Dashboard = () => (
  <PageScreen
    heading="Alunos"
    subheading="Procure por um aluno para ver ou editar suas informações"
  >
    <Container>
      <div className="search-box">
        <SearchBar />
        <Button text="Pesquisar" width="100%" />
      </div>

      <section className="students">
        <table>
          <thead>
            <tr className="header text-normal">
              <th>Nome</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>Quantidade de treino</th>
            </tr>
          </thead>

          <tbody>
            <Student />
            <Student />
            <Student />
            <Student />
            <Student />
            <Student />
            <Student />
            <Student />
            <Student />
            <Student />
            <Student />
            <Student />
            <Student />
            <Student />
          </tbody>
        </table>
      </section>
    </Container>
  </PageScreen>
);

export default Dashboard;
