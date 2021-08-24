import React from 'react';
import PageScreen from '../../components/PageScreen/Default';
import Container from './style';
import Banner from '../../assets/500.svg';

const InternalServerError = () => (
  <PageScreen>
    <Container>
      <div className="text">
        <span className="status-code">500</span>
        <h2 className="heading">
          <span>Desculpe,</span>
          <span>houve um erro desconhecido</span>
        </h2>
        <p>Estamos trabalhando para consertar o problema.</p>
        <p>Por favor, tente novamente em alguns minutos.</p>
        <p>
          Volte para a <a href="/">página inicial</a> ou{' '}
          <a href="/">entre em contato conosco</a>.
        </p>
      </div>
      <div className="banner">
        <img src={Banner} alt="Internal server error" />
      </div>
    </Container>
  </PageScreen>
);

export default InternalServerError;
