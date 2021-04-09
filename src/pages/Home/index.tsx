import React from 'react';
import Container from './style';
import Footer from '../../components/Footer/index';
import Login from '../../components/Login/index';
import Banner from '../../assets/banner.svg';

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

      <Footer />
    </div>

    <div className="sub-content">
      <Login />
    </div>
  </Container>
);

export default Home;
