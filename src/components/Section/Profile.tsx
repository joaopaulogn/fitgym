import React from 'react';
import Section from '.';
import ChangeVisibility from '../ChangeVisibility';
import Data from '../CompanyData';

const Profile = () => (
  <Section
    content={
      <>
        <span>Esses são os seus dados atuais.</span>
        <span>Clique no botão abaixo para ir para a página de edição.</span>
      </>
    }
    button={{ text: 'Editar', width: '17rem', disabled: false }}
  >
    <>
      <Data roleText="Nome">
        <span>Léo Fitness</span>
      </Data>

      <Data roleText="Email">
        <span>leofitness@gmail.com</span>
      </Data>

      <Data roleText="Senha">
        <>
          <input
            type="password"
            name="password"
            id="password"
            readOnly
            value="12345678909876543210"
          />
          <ChangeVisibility />
        </>
      </Data>
    </>
  </Section>
);

export default Profile;
