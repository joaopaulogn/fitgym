import React from 'react';
import Container from './style';
import Button from '../../components/Button';
import Student from '../../components/Student';
import Menu from '../../components/Menu';
import Header from '../../components/Header';
import SearchBar from '../../components/Field/Search';

const Dashboard = () => (
  <Container>
    <Menu />

    <section className="profile-page">
      <Header
        heading="Alunos"
        subheading="Procure por um aluno para ver suas informações"
      />

      <main className="students">
        <div className="search-box">
          <SearchBar />
          <Button text="Pesquisar" />
        </div>

        <section className="container panel">
          <table className="table">
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
      </main>
    </section>
  </Container>
);

export default Dashboard;
