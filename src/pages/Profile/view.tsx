import React, { ChangeEvent, FormEvent } from 'react';
import { Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';
import DashboardScreen from '../../components/PageScreen/Dashboard';
import Container from './style';
import Option from '../../components/Option/Settings';
import Data from '../../components/DataView';
import Button from '../../components/Button';
import Form from '../../components/Form';
import PasswordContainer from '../../components/Field/Password';
import Banner from '../../components/Banner';
import image from '../../assets/profile.svg';
import Visibility from '../../components/Visibility';

interface ProfileProps {
  values: {
    name: string | undefined;
    cnpj: string | undefined;
    password: string;
    password2: string;
  };
  handlePasswordValue(event: ChangeEvent<HTMLInputElement>): void;
  handlePassword2Value(event: ChangeEvent<HTMLInputElement>): void;
  handlePasswordReset(event: FormEvent): Promise<void>;
  passwordView: string;
}

const Profile = ({
  values,
  passwordView,
  handlePasswordValue,
  handlePassword2Value,
  handlePasswordReset,
}: ProfileProps) => {
  const { url } = useRouteMatch();
  const history = useHistory();
  const paths: Array<string> = [url, `${url}/redefinir-senha`];

  return (
    <DashboardScreen
      heading="Perfil"
      subheading="Atualize ou visualize seus dados"
    >
      <Container>
        <section className="profile">
          <ul className="menu">
            <Option exact path={paths[0]} text="Perfil" icon="person" />
            <Option path={paths[1]} text="Redefinir senha" icon="lock" />
          </ul>

          <Switch>
            <Route exact path={paths[0]}>
              <div className="content">
                <p className="text text-normal">
                  <span>Esses são os seus dados atuais.</span>
                  <span>
                    Clique no botão abaixo para ir para a página de edição.
                  </span>
                </p>

                <Data roleText="Nome">{values.name}</Data>
                <Data roleText="CNPJ">{values.cnpj}</Data>
                <Data roleText="Senha">
                  <>
                    <input
                      type="password"
                      name="password"
                      readOnly
                      value={passwordView}
                    />
                    <Visibility />
                  </>
                </Data>
                <Button
                  text="Editar"
                  width="small"
                  onClick={() => history.push(paths[1])}
                />
              </div>
            </Route>

            <Route path={paths[1]}>
              <div className="content">
                <p className="text text-normal">Redefina sua senha abaixo</p>
                <Form button="Redefinir" onSubmit={handlePasswordReset}>
                  <>
                    <PasswordContainer
                      value={values.password}
                      handleValue={handlePasswordValue}
                    />
                    <PasswordContainer
                      name="confirmPassword"
                      title="Confirme sua senha"
                      placeholder="Confirmar senha"
                      value={values.password2}
                      handleValue={handlePassword2Value}
                      instructionMessage="As senhas devem seguir o padrão citado acima e serem idênticas."
                    />
                  </>
                </Form>
              </div>
            </Route>
          </Switch>
        </section>

        <Banner src={image} alt="Contact page" />
      </Container>
    </DashboardScreen>
  );
};

export default Profile;
