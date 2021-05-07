import React from 'react';
import Container from './style';
import Banner from '../../assets/banner.svg';
import Footer from '../../components/Footer';
import AuthRoutes from '../../routes/AuthRoutes';

const Home = () => (
  <Container>
    <div className="main-content">
      <h1 className="title">
        <span className="title--main">Fit</span>
        <span className="title--sub">Gym</span>
      </h1>

      <h2 className="subtitle">
        <span className="subtitle--main">Sua gestão de alunos</span>
        <span className="subtitle--sub">agora de maneira mais prática.</span>
      </h2>

      <div role="banner" className="banner">
        <img src={Banner} alt="Banner" />
      </div>

      <Footer color="var(--secondary-color)" justify="flex-start" />
    </div>

    <div className="sub-content">
      <AuthRoutes />
    </div>
  </Container>
);

export default Home;
