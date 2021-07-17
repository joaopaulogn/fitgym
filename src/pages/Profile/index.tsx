import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Container from './style';
import DashboardScreen from '../../components/PageScreen/Dashboard';
import Option from '../../components/Options/Settings';
import Password from '../../components/Field/Auth/Password';
import Data from '../../components/DataView';
import ChangeVisibility from '../../components/ChangeVisibility';
import Button from '../../components/Button';
import Form from '../../components/Form';
import Banner from '../../components/Banner';
import Src from '../../assets/profile.svg';

const Profile = () => {
  const [profilePath, resetPasswordPath] = [
    '/perfil',
    '/perfil/redefinir-senha',
  ];

  return (
    <DashboardScreen
      heading="Perfil"
      subheading="Atualize ou visualize seus dados"
    >
      <Container>
        <section className="profile">
          <ul className="menu">
            <Option exact path={profilePath} text="Perfil" icon="person" />
            <Option
              path={resetPasswordPath}
              text="Redefinir senha"
              icon="lock"
            />
          </ul>

          <Switch>
            <Route exact path={profilePath}>
              <div className="content">
                <p className="text text-normal">
                  <span>Esses são os seus dados atuais.</span>
                  <span>
                    Clique no botão abaixo para ir para a página de edição.
                  </span>
                </p>

                <Data roleText="Nome">Léo Fitness Academia</Data>
                <Data roleText="CNPJ">05.666.388/0001-00</Data>
                <Data roleText="Senha">
                  <>
                    <input
                      type="password"
                      name="password"
                      readOnly
                      value="12345678909876543210"
                    />
                    <ChangeVisibility />
                  </>
                </Data>
                <Button text="Editar" width="small" />
              </div>
            </Route>

            <Route exact path={resetPasswordPath}>
              <div className="content">
                <p className="text text-normal">Redefina sua senha abaixo</p>
                <Form button="Redefinir">
                  <>
                    <Password errorMessage="Senha inválida." />
                    <Password
                      name="confirmPassword"
                      title="Confirme sua senha"
                      placeholder="Confirmar senha"
                      instructions="As senhas devem ser as mesmas"
                      errorMessage="As senhas devem seguir o padrão citado acima e serem idênticas."
                    />
                  </>
                </Form>
              </div>
            </Route>
          </Switch>
        </section>

        <Banner src={Src} alt="Contact page" />
      </Container>
    </DashboardScreen>
  );
};

export default Profile;
