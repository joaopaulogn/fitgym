import React from 'react';
import Container from './style';
import PageScreen from '../../components/PageScreen';
import Subheading from '../../components/Subheading';
import Button from '../../components/Button';
import Banner from '../../assets/not-found.svg';
import Balloon from '../../assets/balloon.svg';

const NotFound = () => {
  function handleClick() {
    window.location.pathname = '/';
  }

  return (
    <>
      <PageScreen
        content={
          <>
            <Container>
              <div className="text">
                <Subheading text="Oops... Página não encontrada" />
                <p className="text-normal">
                  Talvez você tenha digitado <br />
                  o endereço errado. <br />
                  Nós sugerimos que volte para a página inicial. <br />
                  <span className="text-normal">
                    Caso esteja logado, você será redirecionado para a tela de
                    alunos.
                  </span>
                </p>
                <Button
                  type="button"
                  text="Página Inicial"
                  width="17rem"
                  onClick={handleClick}
                />
              </div>
              <div className="banner">
                <img src={Banner} alt="Not found page banner" />
              </div>
              <div className="balloon">
                <img
                  src={Balloon}
                  alt="Observe the balloon while you stay here"
                />
              </div>
            </Container>
          </>
        }
      />
    </>
  );
};

export default NotFound;
