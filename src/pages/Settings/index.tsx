import React from 'react';
import DashboardScreen from '../../components/DashboardScreen';
import Container from './style';
import Option from '../../components/Options/Settings';
import SettingsRoutes from '../../routes/SettingsRoutes';
import Banner from '../../assets/profile.svg';

const Settings = () => {
  const [profilePath, editPath, resetPasswordPath] = [
    '/perfil',
    '/perfil/editar-perfil',
    '/perfil/redefinir-senha',
  ];
  return (
    <DashboardScreen
      heading="Perfil"
      subheading="Atualize ou visualize seus dados"
    >
      <Container className="container">
        <section className="content">
          <ul className="menu">
            <Option exact path={profilePath} text="Perfil" />
            <Option path={editPath} text="Editar perfil" />
            <Option path={resetPasswordPath} text="Redefinir senha" />
          </ul>

          <SettingsRoutes
            profile={profilePath}
            edit={editPath}
            resetPassword={resetPasswordPath}
          />
        </section>

        <div className="banner">
          <img src={Banner} alt="Profile settings banner" />
        </div>
      </Container>
    </DashboardScreen>
  );
};

export default Settings;
