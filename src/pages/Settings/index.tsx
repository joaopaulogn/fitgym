import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import PageScreen from '../../components/PageScreen';
import Container from './style';
import Banner from '../../assets/profile.svg';
import Option from '../../components/Options/Settings';
import SettingsRoutes from '../../routes/SettingsRoutes';

const Settings = () => {
  const { url } = useRouteMatch();

  return (
    <PageScreen
      heading="Perfil"
      subheading="Atualize ou visualize seus dados"
      bannerSrc={Banner}
      bannerAlt="Profile settings banner"
    >
      <Container>
        <ul className="menu">
          <Option path={`${url}`} text="Perfil" />
          <Option path={`${url}/edit`} text="Editar perfil" />
          <Option path={`${url}/password`} text="Redefinir senha" />
        </ul>

        <SettingsRoutes
          profile={`${url}`}
          edit={`${url}/edit`}
          password={`${url}/password`}
        />
      </Container>
    </PageScreen>
  );
};

export default Settings;
