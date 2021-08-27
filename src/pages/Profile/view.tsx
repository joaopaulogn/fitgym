import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import DashboardScreen from '../../components/PageScreen/Dashboard';
import Container from './style';
import Option from '../../components/Option/Settings';
import Banner from '../../components/Banner';
import image from '../../assets/profile.svg';
import DataView from './Sections/Data';
import ResetPassword from './Sections/Password';

interface ProfileProps {
  passwordValue: string;
}

const Profile = ({ passwordValue }: ProfileProps): JSX.Element => {
  const { url } = useRouteMatch();
  const paths = [url, `${url}/redefinir-senha`];

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
              <DataView passwordValue={passwordValue} />
            </Route>

            <Route path={paths[1]}>
              <ResetPassword />
            </Route>
          </Switch>
        </section>

        <Banner src={image} alt="Contact page" />
      </Container>
    </DashboardScreen>
  );
};

export default Profile;
