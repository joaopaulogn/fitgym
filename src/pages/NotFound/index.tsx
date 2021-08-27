import React from 'react';
import Container from './style';
import PageScreen from '../../components/PageScreen/Default';
import Banner from '../../assets/404.svg';
import Balloon from '../../assets/balloon.svg';

const NotFound = (): JSX.Element => {
  function handleClick(): void {
    window.location.pathname = '/';
  }

  return (
    <PageScreen>
      <Container>
        <div className="text">
          <h2 className="heading">
            <span>Oops...</span>
            <span>página não encontrada</span>
          </h2>
          <p>
            Talvez você tenha digitado o endereço errado. <br />
          </p>
          <p>
            Nós sugerimos que volte para a{' '}
            <a href="/" onClick={handleClick}>
              página inicial
            </a>
            .
          </p>
        </div>
        <div className="banner">
          <img src={Banner} alt="Not found page banner" />
        </div>
        <div className="balloon">
          <img
            src={Balloon}
            alt="Oh, no! You missed the chance to see the balloon"
          />
        </div>
      </Container>
    </PageScreen>
  );
};

export default NotFound;
